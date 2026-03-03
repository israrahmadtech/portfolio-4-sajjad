"use client"

import { Briefcase, Box, CheckCircle2 } from "lucide-react"
import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"

export default function WhyTrustSection() {
    return (
        <section id="trust" className="w-full py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Top Text */}
                <div className="max-w-2xl mb-10 2xl:mb-16">
                    <p className="text-sm text-muted-foreground mb-3">
                        Experience
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Why trust me
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        Three reasons to work together: real business experience,
                        results-oriented product vision, and clear working method.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="flex items-start gap-4">

                            <InnerShadowCard className="p-3">
                                <Briefcase size={20} />
                            </InnerShadowCard>

                            <div>
                                <h3 className="font-semibold text-lg mb-3">
                                    Field experience
                                </h3>

                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Co-manager of a company with real activity: daily production,
                                    team management, customers, priorities, budget. Strong
                                    understanding of business constraints: time, reliability,
                                    maintenance, scalability. Code designed to last in the long
                                    term.
                                </p>
                            </div>

                        </div>
                    </ShadowCard>

                    {/* Card 2 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="flex items-start gap-4">

                            <InnerShadowCard className="p-3">
                                <Box size={20} />
                            </InnerShadowCard>

                            <div>
                                <h3 className="font-semibold text-lg mb-3">
                                    Product vision
                                </h3>

                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Products used, not demos. Maintainable, readable,
                                    structured code. Architecture designed to evolve.
                                    Results-oriented approach: performance, SEO,
                                    conversion, monetization.
                                </p>
                            </div>

                        </div>
                    </ShadowCard>

                    {/* Card 3 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="flex items-start gap-4">

                            <InnerShadowCard className="p-3">
                                <CheckCircle2 size={20} />
                            </InnerShadowCard>

                            <div>
                                <h3 className="font-semibold text-lg mb-3">
                                    Clear method
                                </h3>

                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Clear cutting: Framing → development → delivery →
                                    iterations.
                                    <br />
                                    <br />
                                    Simple communication. Quote and contract via Malt
                                    to secure the relationship.
                                </p>
                            </div>

                        </div>
                    </ShadowCard>

                </div>

                {/* CTA */}
                <div className="flex justify-end mt-10 2xl:mt-16">
                    <ShadowCard
                        variant="button"
                        className="px-6 py-3 rounded-full cursor-pointer text-sm font-medium"
                    >
                        See the evidence
                    </ShadowCard>
                </div>

            </div>
        </section>
    )
}