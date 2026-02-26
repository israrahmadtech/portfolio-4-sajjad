"use client"

import { CheckCircle2, Zap, Search, CreditCard } from "lucide-react"
import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"

export default function BenefitsSection() {
    return (
        <section className="w-full py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-2xl mb-20">
                    <p className="text-sm text-muted-foreground mb-3">
                        Benefits
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        What you get concretely
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        Concrete and measurable results. No vague promises,
                        only what I actually deliver.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Card 1 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="mb-6">
                            <InnerShadowCard className="p-3 w-fit rounded-xl">
                                <CheckCircle2 size={20} />
                            </InnerShadowCard>
                        </div>

                        <h3 className="font-semibold text-lg mb-4">
                            Stable code
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Structure clean, logical cutting, clear documentation.
                            Code designed to be taken back and evolved.
                        </p>
                    </ShadowCard>

                    {/* Card 2 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="mb-6">
                            <InnerShadowCard className="p-3 w-fit rounded-xl">
                                <Zap size={20} />
                            </InnerShadowCard>
                        </div>

                        <h3 className="font-semibold text-lg mb-4">
                            Fast deliveries
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Short sprint cutting: you see the progress regularly.
                            Put into production as soon as possible.
                        </p>
                    </ShadowCard>

                    {/* Card 3 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="mb-6">
                            <InnerShadowCard className="p-3 w-fit rounded-xl">
                                <Search size={20} />
                            </InnerShadowCard>
                        </div>

                        <h3 className="font-semibold text-lg mb-4">
                            Performance & SEO
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Fast pages (Core Web Vitals optimized). SEO on-page:
                            tags, structure, structured data.
                        </p>
                    </ShadowCard>

                    {/* Card 4 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="mb-6">
                            <InnerShadowCard className="p-3 w-fit rounded-xl">
                                <CreditCard size={20} />
                            </InnerShadowCard>
                        </div>

                        <h3 className="font-semibold text-lg mb-4">
                            Stripe Payments
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Stripe integration: one-shot payments,
                            subscriptions, webhooks. Error management,
                            seamless user experience.
                        </p>
                    </ShadowCard>

                </div>

                {/* CTA */}
                <div className="flex justify-end mt-16">
                    <ShadowCard
                        variant="button"
                        className="px-6 py-3 rounded-full cursor-pointer text-sm font-medium"
                    >
                        See the offer
                    </ShadowCard>
                </div>

            </div>
        </section>
    )
}