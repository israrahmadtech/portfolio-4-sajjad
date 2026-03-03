"use client"

import { Leaf, Cpu } from "lucide-react"
import Image from "next/image"
import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"

export default function AchievementsSection() {
    return (
        <section className="w-full py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-2xl mb-10 2xl:mb-20">
                    <p className="text-sm text-muted-foreground mb-0 2xl:mb-3">
                        Achievements
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 2xl:mb-6">
                        Achievements in production
                    </h2>

                    <p className="text-sm 2xl:text-base text-muted-foreground leading-relaxed">
                        Real products, in production, used by real users.
                        No personal projects or abandoned side-projects.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE */}
                    <div className="space-y-10">

                        {/* Project 1 */}
                        <ShadowCard className="p-8 rounded-3xl">
                            <div className="flex items-start gap-4 mb-6">
                                <InnerShadowCard className="p-3">
                                    <Leaf size={20} />
                                </InnerShadowCard>

                                <h3 className="text-lg font-semibold">
                                    FoodandShare.com
                                </h3>
                            </div>

                            <p className="text-muted-foreground mb-4">
                                Kitchen recipe platform in production.
                            </p>

                            <div className="text-sm text-muted-foreground space-y-2">
                                <p><span className="font-medium text-foreground">Stack :</span> Next.js, Supabase, Vercel</p>
                                <p><span className="font-medium text-foreground">SEO :</span> Google indexing, optimized performance</p>
                                <p><span className="font-medium text-foreground">Maintenance :</span> Continuous evolutions, new features</p>
                            </div>

                            <div className="mt-6">
                                <InnerShadowCard
                                    variant="button"
                                    className="px-5 py-2 rounded-full w-fit text-sm font-medium cursor-pointer"
                                >
                                    View FoodandShare →
                                </InnerShadowCard>
                            </div>
                        </ShadowCard>

                        {/* Project 2 */}
                        <ShadowCard className="p-8 rounded-3xl">
                            <div className="flex items-start gap-4 mb-6">
                                <InnerShadowCard className="p-3">
                                    <Cpu size={20} />
                                </InnerShadowCard>

                                <h3 className="text-lg font-semibold">
                                    Internal business software
                                </h3>
                            </div>

                            <p className="text-muted-foreground mb-4">
                                A business management tool developed and used daily
                                for more than 10 years.
                            </p>

                            <div className="text-sm text-muted-foreground space-y-2">
                                <p>
                                    <span className="font-medium text-foreground">Features :</span>
                                    Production management, quotes, orders, customer follow-up,
                                    production schedule, ChronoPost good editor, invoicing,
                                    synchronization with multiple suppliers
                                </p>
                                <p>
                                    <span className="font-medium text-foreground">Proof :</span>
                                    Reliable code in real conditions, long-term maintenance
                                </p>
                            </div>
                        </ShadowCard>

                    </div>

                    {/* RIGHT SIDE - Browser Mockup */}
                    <div className="relative">

                        <ShadowCard className="rounded-3xl p-6">

                            {/* Browser top bar */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>

                            {/* Screenshot */}
                            <div className="rounded-2xl overflow-hidden">
                                <Image
                                    src="/foodandshare.webp" // replace with your image
                                    alt="FoodandShare preview"
                                    width={1000}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                        </ShadowCard>

                    </div>

                </div>

            </div>
        </section>
    )
}