"use client"

import InnerShadowCard from "./InnerShadowEffect"
import {
    Folder,
    MapPin,
    Calendar,
    Code2,
    ShieldCheck
} from "lucide-react"

export default function FAQSection() {
    return (
        <section id="faq" className="w-full py-32 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-15 2xl:mb-24">
                    <p className="text-sm text-muted-foreground mb-0 2xl:mb-4 uppercase tracking-widest">
                        FAQ
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 2xl:mb-6">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Answers to the most common questions about my services
                        and how I work.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-5">

                    {/* Item 1 */}
                    <FAQItem
                        icon={<Folder size={20} />}
                        question="What kind of projects are you working on?"
                        answer="Mainly: SaaS B2B/B2C, web platforms, content sites with technical SEO, Stripe integrations. Less adapted: native mobile applications."
                    />

                    <Divider />

                    {/* Item 2 */}
                    <FAQItem
                        icon={<MapPin size={20} />}
                        question="Do you work remotely or on site?"
                        answer="Both: remote default (entire France), on site possible according to location, or hybrid (remote + a few days on site per month)."
                    />

                    <Divider />

                    {/* Item 3 */}
                    <FAQItem
                        icon={<Calendar size={20} />}
                        question="Are you available for long missions?"
                        answer="Yes. I work on missions of 1 week (audit), 1 to 4 weeks (feature development), or 1 to 6 months (full product). Availability to be confirmed according to current schedule."
                    />

                    <Divider />

                    {/* Item 4 */}
                    <FAQItem
                        icon={<Code2 size={20} />}
                        question="Do you only use Next.js / React?"
                        answer="Main stack: Next.js, React, Supabase, Vercel, Stripe. But I adapt: Angular for existing projects, PHP/SQL for maintenance. I prefer stack consistency."
                    />

                    <Divider />

                    {/* Item 5 */}
                    <FAQItem
                        icon={<ShieldCheck size={20} />}
                        question="Do you only go through Malt?"
                        answer="Yes, to secure the freelance/client relationship: clear quote, secure payment, dispute management if necessary. No direct billing."
                    />

                </div>
            </div>
        </section>
    )
}

/* ============================= */
/* Reusable FAQ Item Component   */
/* ============================= */

function FAQItem({
    icon,
    question,
    answer
}: {
    icon: React.ReactNode
    question: string
    answer: string
}) {
    return (
        <div className="flex gap-6 items-start">
            <InnerShadowCard className="p-3 rounded-xl shrink-0">
                {icon}
            </InnerShadowCard>

            <div>
                <h3 className="font-semibold text-lg mb-3">
                    {question}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm">
                    {answer}
                </p>
            </div>
        </div>
    )
}

/* Divider Component */
function Divider() {
    return <div className="border-t border-border" />
}