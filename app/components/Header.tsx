"use client"

import { useState } from "react"
import ShadowCard from "./ShadowCard"
import { cn } from "@/lib/utils"
import { Menu, X, Sun, Moon, Rocket } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function Header() {
    const { theme, toggleTheme } = useTheme()
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Left - Logo */}
                <div className="flex items-center gap-2 font-semibold text-lg">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-inner overflow-hidden" >
                        <img className="relative top-2 scale-150" src="/sajjad.png" alt="" />
                    </div>
                    <span>
                        Sajjad <span className="font-bold">Ahmad</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {["Hello", "Trust", "Proofs", "Results", "Offer", "FAQ", "Contact"].map(
                        (item, i) => (
                            <a
                                key={i}
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item}
                            </a>
                        )
                    )}
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">

                        {/* CTA Button */}
                        <ShadowCard variant="button" className="px-5 py-2 rounded-full cursor-pointer">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Rocket size={16} />
                                Nouveau Projet
                            </div>
                        </ShadowCard>

                        {/* Theme Toggle */}
                        <ShadowCard
                            variant="button"
                            onClick={toggleTheme}
                            className="p-2 rounded-full cursor-pointer flex items-center justify-center"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </ShadowCard>

                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300",
                    mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-6 pb-6 flex flex-col gap-4">
                    {["Hello", "Trust", "Proofs", "Results", "Offer", "FAQ", "Contact"].map(
                        (item, i) => (
                            <a
                                key={i}
                                href="#"
                                className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item}
                            </a>
                        )
                    )}

                    <ShadowCard variant="button" className="px-5 py-3 rounded-full cursor-pointer w-fit">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <Rocket size={16} />
                            Nouveau Projet
                        </div>
                    </ShadowCard>
                </div>
            </div>
        </header>
    )
}