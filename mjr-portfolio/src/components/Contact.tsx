"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, Copy, Github, Linkedin, MapPin } from "lucide-react"

const EMAIL = "mattirivas4@gmail.com"

const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", handle: "in/matti-rivas", href: "https://linkedin.com/in/matti-rivas" },
    { icon: Github, label: "GitHub", handle: "@MattiAR0", href: "https://github.com/MattiAR0" },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Contact() {
    const [copied, setCopied] = useState(false)

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(EMAIL)
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
        } catch {
            window.location.href = `mailto:${EMAIL}`
        }
    }

    return (
        <footer id="contact" className="relative border-t border-border overflow-hidden">
            <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
                <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
                <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-primary/[0.08] blur-[140px]" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl pt-28 md:pt-36 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease }}
                >
                    <div className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                        <span className="text-primary">04</span>
                        <span className="h-px w-10 bg-border" />
                        <span>Contacto</span>
                    </div>

                    <h2 className="font-semibold tracking-[-0.05em] leading-[0.9] text-foreground text-[clamp(3rem,10vw,8.5rem)] mb-10">
                        ¿Construimos
                        <br />
                        algo <span className="font-serif-display italic text-primary tracking-[-0.02em]">juntos?</span>
                    </h2>

                    <p className="max-w-xl text-lg md:text-xl text-secondary leading-relaxed mb-12">
                        Disponible para incorporación inmediata. Escríbeme por email o LinkedIn y hablamos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mb-20">
                        <a
                            href={`mailto:${EMAIL}`}
                            className="group inline-flex h-16 items-center justify-between gap-6 rounded-full bg-primary pl-8 pr-2 text-lg font-semibold text-primary-ink transition-transform hover:-translate-y-0.5"
                        >
                            <span className="truncate">{EMAIL}</span>
                            <span className="grid place-items-center w-12 h-12 rounded-full bg-primary-ink text-primary transition-transform group-hover:rotate-45">
                                <ArrowUpRight className="w-5 h-5" />
                            </span>
                        </a>
                        <button
                            type="button"
                            onClick={copyEmail}
                            className="inline-flex h-16 items-center justify-center gap-2 rounded-full border border-white/15 px-7 font-medium text-foreground transition-colors hover:border-white/30 hover:bg-white/5"
                            aria-live="polite"
                        >
                            {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                            {copied ? "Copiado" : "Copiar email"}
                        </button>
                    </div>
                </motion.div>

                <div className="grid sm:grid-cols-3 gap-px rounded-3xl overflow-hidden border border-border bg-border mb-16">
                    {socialLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 bg-background/90 backdrop-blur p-6 transition-colors hover:bg-surface-2"
                        >
                            <span className="flex items-center gap-4">
                                <link.icon className="w-5 h-5 text-primary" />
                                <span>
                                    <span className="block font-medium text-foreground">{link.label}</span>
                                    <span className="block font-mono text-xs text-muted">{link.handle}</span>
                                </span>
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-muted transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    ))}
                    <div className="flex items-center gap-4 bg-background/90 backdrop-blur p-6">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>
                            <span className="block font-medium text-foreground">Torrent, Valencia</span>
                            <span className="block font-mono text-xs text-muted">España</span>
                        </span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border font-mono text-xs text-muted">
                    <p>&copy; {new Date().getFullYear()} Matti Ahola Rivas</p>
                    <p>
                        Hecho con Next.js & Tailwind<span className="text-primary"> ✦</span>
                    </p>
                    <a href="#hero" className="hover:text-foreground transition-colors">
                        Volver arriba ↑
                    </a>
                </div>
            </div>
        </footer>
    )
}
