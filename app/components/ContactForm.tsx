"use client"

import { useState } from "react"
import InnerShadowCard from "./InnerShadowEffect"
import { Send } from "lucide-react"
import ShadowCard from "./ShadowCard"

export default function ContactFormSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <section id="contact" className="w-full pb-32 px-6">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="mb-7">
                    <p className="text-sm text-muted-foreground mb-2">
                        Contact form
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Or contact me directly on <span className="font-medium text-foreground">Malt</span>
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 2xl:space-y-10">

                    {/* Name */}
                    <div className="space-y-4">
                        <label className="text-sm font-medium mb-1">
                            Name
                        </label>

                        <InnerShadowCard className="px-6 py-4 rounded-full">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                            />
                        </InnerShadowCard>
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium">
                            Email
                        </label>

                        <InnerShadowCard className="px-6 py-4 rounded-full">
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                            />
                        </InnerShadowCard>
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium">
                            Message
                        </label>

                        <InnerShadowCard className="px-6 py-5 rounded-3xl">
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-sm resize-none placeholder:text-muted-foreground"
                            />
                        </InnerShadowCard>
                    </div>

                    {/* Button */}
                    <ShadowCard
                        variant="button"
                        className="w-full py-4 rounded-full text-sm flex items-center justify-center gap-3 cursor-pointer"
                    >
                        <Send size={16} />
                        Send message
                    </ShadowCard>

                </form>
            </div>
        </section>
    )
}