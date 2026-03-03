"use client"

import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"
import { Info, Plus } from "lucide-react"

export default function ContactCTASection() {
    return (
        <section className="w-full pt-32 pb-15 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

                {/* ================= LEFT SIDE ================= */}
                <div>

                    <p className="text-sm text-muted-foreground mb-4">
                        Contact
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        Ready to start?
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        We start with a short exchange (30 min, video or phone) for:
                    </p>

                    <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                        <li>• Understand your need</li>
                        <li>• Check that I am the right person</li>
                        <li>• Define a first framing or quotation</li>
                    </ul>

                    <p className="text-sm mb-6">
                        <span className="font-medium">You leave with:</span> a clear vision of the project,
                        a division in steps, a Malt quote (if we leave together).
                    </p>

                    <div className="flex gap-3 items-start text-sm text-muted-foreground mb-12">
                        <Info size={16} className="mt-1 shrink-0" />
                        <p>
                            <span className="font-medium text-foreground">
                                Complex project?
                            </span>{" "}
                            Use the Detailed form to give me maximum context
                            before our first exchange.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-6 flex-wrap">
                        <ShadowCard
                            variant="button"
                            className="px-8 py-3 rounded-full text-sm cursor-pointer"
                        >
                            Contact on Malt →
                        </ShadowCard>

                        <ShadowCard
                            variant="button"
                            className="px-8 py-3 rounded-full text-sm flex items-center gap-2 cursor-pointer"
                        >
                            <Plus size={16} />
                            New project →
                        </ShadowCard>
                    </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <ShadowCard className="p-10 rounded-3xl max-w-lg w-full ml-auto">

                    <h3 className="font-semibold text-lg mb-6">
                        Availability
                    </h3>

                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-3 h-3 rounded-full bg-green-500" />
                        <p className="text-muted-foreground text-sm">
                            Open to projects in early 2026
                        </p>
                    </div>

                    {/* Response Badge */}
                    <div className="flex justify-center mb-12">
                        <InnerShadowCard className="px-8 py-6 rounded-2xl text-center">
                            <p className="text-2xl font-semibold">~24h</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Average response
                            </p>
                        </InnerShadowCard>
                    </div>

                    <div className="text-sm space-y-3 mb-10">
                        <p className="font-medium">Next step :</p>
                        <ol className="list-decimal ml-5 text-muted-foreground space-y-1">
                            <li>Fast exchange (30 min)</li>
                            <li>Quote via Malt</li>
                            <li>We start 🚀</li>
                        </ol>
                    </div>

                    <div className="border-t border-border pt-6 text-xs text-muted-foreground text-center">
                        © 2026 Laurent Astruc • Full-Stack Developer
                    </div>

                </ShadowCard>

            </div>
        </section>
    )
}