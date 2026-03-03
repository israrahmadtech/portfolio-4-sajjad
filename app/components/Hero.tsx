import ShadowCard from "./ShadowCard"
import ShadowText from "./ShadowText"
import {
    Github,
    Linkedin,
    Mail,
    Send,
    Globe,
    ArrowRight
} from "lucide-react"

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-background px-6 mt-20 lg:mt-0">

            {/* LEFT SOCIAL FLOAT */}
            <div className="hidden 2xl:flex flex-col gap-6 absolute left-8 top-1/2 -translate-y-1/2">
                {[Github, Linkedin, Mail, Send].map((Icon, i) => (
                    <ShadowCard variant="button"
                        key={i}
                        className="p-3 rounded-full cursor-pointer"
                    >
                        <Icon size={18} />
                    </ShadowCard>
                ))}
            </div>

            {/* CONTAINER */}
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-4 2xl:space-y-8">

                    <p className="text-muted-foreground text-sm 2xl:text-lg m-0">
                        +10 years
                    </p>

                    <ShadowText className="text-card font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
                        HELLO <br className="hidden xl:block" />
                        I’M A <br />
                        FULLSTACK
                    </ShadowText>

                    <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
                        <span className="font-semibold text-foreground">full-stack </span>freelance,
                        reelance developer, co-business manager for more than 10 years. I design and develop
                        <span className="font-semibold text-foreground"> reliable, efficient and monetizable </span>web products: SaaS, web platforms, Stripe payments, technical SEO.
                    </p>

                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Globe size={16} />
                        Based in Pakistan (Peshawar) • Missions via fiverr/upwork
                    </div>

                </div>

                {/* RIGHT STACK CARD */}
                <div className="relative">

                    <ShadowCard className="p-10 rounded-4xl space-y-8">

                        <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground">
                                Stack Technique
                            </p>
                        </div>

                        {/* FRONTEND */}
                        <div className="space-y-4">
                            <h3 className="font-semibold">Frontend</h3>
                            <div className="flex flex-wrap gap-3">
                                {["Next.js", "React", "Angular"].map((item) => (
                                    <ShadowCard variant="button"
                                        key={item}
                                        className="px-4 py-2 rounded-full text-sm"
                                    >
                                        {item}
                                    </ShadowCard>
                                ))}
                            </div>
                        </div>

                        {/* DESIGN */}
                        <div className="space-y-4">
                            <h3 className="font-semibold">Design</h3>
                            <div className="flex flex-wrap gap-3">
                                {["Tailwind CSS", "Heorui", "Shadcn"].map((item) => (
                                    <ShadowCard variant="button"
                                        key={item}
                                        className="px-4 py-2 rounded-full text-sm"
                                    >
                                        {item}
                                    </ShadowCard>
                                ))}
                            </div>
                        </div>

                        {/* BACKEND */}
                        <div className="space-y-4">
                            <h3 className="font-semibold">Backend & Services</h3>
                            <div className="flex flex-wrap gap-3">
                                {["Supabase", "NodeJs", "Vercel", "Stripe", "Resend"].map(
                                    (item) => (
                                        <ShadowCard variant="button"
                                            key={item}
                                            className="px-4 py-2 rounded-full text-sm"
                                        >
                                            {item}
                                        </ShadowCard>
                                    )
                                )}
                            </div>
                        </div>

                    </ShadowCard>

                    <div className="mt-10 flex justify-between items-center">
                        <div className="flex 2xl:hidden gap-5">
                            {[Github, Linkedin, Mail, Send].map((Icon, i) => (
                                <ShadowCard variant="button"
                                    key={i}
                                    className="p-3 rounded-full cursor-pointer"
                                >
                                    <Icon size={18} />
                                </ShadowCard>
                            ))}
                        </div>

                        {/* CTA BUTTON */}
                        <div className="ms-auto">
                            <ShadowCard variant="button" className="px-6 py-3 rounded-full cursor-pointer flex items-center gap-2">
                                Contact me now
                                <ArrowRight size={16} />
                            </ShadowCard>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}