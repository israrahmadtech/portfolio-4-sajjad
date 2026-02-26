"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ShadowCard from "./ShadowCard"

export default function TechStackSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const el = containerRef.current
            if (!el) return

            const totalWidth = el.scrollWidth / 2

            gsap.to(el, {
                x: -totalWidth,
                duration: 25,
                ease: "none",
                repeat: -1,
            })
        })

        return () => ctx.revert()
    }, [])

    const stack = [
        "tech1.png",
        "tech2.png",
        "tech3.png",
        "tech4.png",
        "tech1.png",
        "tech2.png",
        "tech3.png",
        "tech4.png",
        "tech1.png",
        "tech2.png",
        "tech3.png",
        "tech4.png",
        "tech1.png",
        "tech2.png",
        "tech3.png",
        "tech4.png",
        "tech1.png",
        "tech2.png",
        "tech3.png",
        "tech4.png",
    ]

    return (
        <section className="w-full py-32 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 text-center mb-20">
                <p className="text-sm text-muted-foreground mb-3">
                    My stack & my tools...
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                    The tools I use every day to design and develop my projects.
                </h2>
            </div>

            {/* Marquee */}
            <div className="relative">
                <div
                    ref={containerRef}
                    className="flex gap-10 w-max"
                >
                    {[...stack, ...stack].map((icon, i) => (
                        <ShadowCard
                            key={i}
                            className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                        >
                            <img
                                src={icon}
                                alt="tech"
                                className="w-10 h-10 object-contain"
                            />
                        </ShadowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}