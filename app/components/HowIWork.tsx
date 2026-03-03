"use client"

import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"
import {
    Rocket,
    Wrench,
    CheckCircle2,
    FileText,
    ListChecks
} from "lucide-react"

export default function HowIWorkSection() {
    return (
        <section className="w-full py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-2xl mb-10 2xl:mb-20">
                    <p className="text-sm text-muted-foreground mb-3">
                        Services
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        How I work
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        Clear and secure process, via Malt only.
                        Three formats adapted to your needs.
                    </p>
                </div>

                {/* ===== Top 3 Cards ===== */}
                <div className="grid md:grid-cols-3 gap-10 mb-10 2xl:mb-24">

                    {/* Card 1 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="flex items-start gap-4 mb-6">
                            <InnerShadowCard className="p-3 rounded-xl">
                                <Rocket size={20} />
                            </InnerShadowCard>
                            <h3 className="font-semibold text-lg">
                                Audit & Optimization
                            </h3>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Analysis of your existing code: architecture,
                            performance, security, SEO. Identification of quick wins.
                        </p>

                        <div className="text-sm space-y-2">
                            <p><span className="font-medium">Deliverable :</span> Audit report + roadmap</p>
                            <p><span className="font-medium">Duration :</span> 3 to 7 days</p>
                        </div>
                    </ShadowCard>

                    {/* Card 2 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="flex items-start gap-4 mb-6">
                            <InnerShadowCard className="p-3 rounded-xl">
                                <Wrench size={20} />
                            </InnerShadowCard>
                            <h3 className="font-semibold text-lg">
                                Feature Development
                            </h3>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Added specific features: Stripe (payments,
                            subscriptions), authentication, API/webhooks, back-office.
                        </p>

                        <div className="text-sm space-y-2">
                            <p><span className="font-medium">Format :</span> Mission framed via Malt</p>
                            <p><span className="font-medium">Duration :</span> 1 to 4 weeks</p>
                        </div>
                    </ShadowCard>

                    {/* Card 3 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="flex items-start gap-4 mb-6">
                            <InnerShadowCard className="p-3 rounded-xl">
                                <CheckCircle2 size={20} />
                            </InnerShadowCard>
                            <h3 className="font-semibold text-lg">
                                Complete product
                            </h3>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            From idea to production: framing → development
                            by iterations → online → post-launch support.
                        </p>

                        <div className="text-sm space-y-2">
                            <p><span className="font-medium">Format :</span> Long mission via Malt</p>
                            <p><span className="font-medium">Duration :</span> 1 to 6 months</p>
                        </div>
                    </ShadowCard>
                </div>

                {/* Divider */}
                <div className="border-t border-border mb-10 2xl:mb-20" />

                <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-10 2xl:mb-16">
                    Supplementary benefits
                </p>

                {/* ===== Wide Cards ===== */}
                <div className="space-y-16">

                    {/* Custom Forms */}
                    <ShadowCard className="p-10 rounded-3xl max-w-5xl mx-auto">
                        <div className="flex items-start gap-4 mb-6">
                            <InnerShadowCard className="p-3 rounded-xl">
                                <FileText size={20} />
                            </InnerShadowCard>
                            <h3 className="font-semibold text-xl">
                                Custom Forms & Questionnaires
                            </h3>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                            Structured collection of information through multi-step forms.
                            Front-end validation, back-end processing, formatted email notification.
                        </p>

                        <div className="text-sm space-y-3 mb-6">
                            <p className="font-medium">Use case :</p>
                            <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                                <li>Project framework</li>
                                <li>Customer qualification</li>
                                <li>Business data surveys</li>
                                <li>Onboarding users</li>
                            </ul>
                        </div>

                        <p className="text-sm mb-6">
                            <span className="font-medium">Format :</span> Self-service or first step before a larger project.
                        </p>

                        <InnerShadowCard
                            variant="button"
                            className="px-5 py-3 rounded-full text-sm w-fit cursor-pointer"
                        >
                            → See the framing form
                        </InnerShadowCard>
                    </ShadowCard>

                    {/* Product Consulting */}
                    <ShadowCard className="p-10 rounded-3xl max-w-5xl mx-auto">
                        <div className="flex items-start gap-4 mb-6">
                            <InnerShadowCard className="p-3 rounded-xl">
                                <ListChecks size={20} />
                            </InnerShadowCard>
                            <h3 className="font-semibold text-xl">
                                Product consulting & prioritization
                            </h3>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                            Strategic support to clarify priorities, secure technical choices
                            and build a realistic roadmap aligned with business goals.
                        </p>

                        <div className="text-sm space-y-2 mb-6">
                            <p className="font-medium">What I bring you</p>
                            <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                                <li>Architecture & technical debt analysis</li>
                                <li>Identification of quick wins</li>
                                <li>Impact-based prioritization</li>
                                <li>Clear medium-term product vision</li>
                            </ul>
                        </div>

                        <p className="text-sm">
                            <span className="font-medium">Ideal for :</span> Product teams or executives
                            who need a pragmatic external technical look.
                        </p>
                    </ShadowCard>
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-center gap-6 mt-10 2xl:mt-20 flex-wrap">
                    <ShadowCard
                        variant="button"
                        className="px-8 py-3 rounded-full text-sm cursor-pointer"
                    >
                        Talk about it on Malt →
                    </ShadowCard>

                    <ShadowCard
                        variant="button"
                        className="px-8 py-3 rounded-full text-sm cursor-pointer"
                    >
                        Contact me
                    </ShadowCard>
                </div>

            </div>
        </section>
    )
}