"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react"

const stack = [
    "TypeScript",
    "Angular",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Java",
    "Go",
    "Tailwind CSS",
    "Git",
]

const ease = [0.22, 1, 0.36, 1] as const

const facts = [
    { k: "Rol", v: "Full Stack Developer" },
    { k: "Formación", v: "DAM + DAW" },
    { k: "Base", v: "Valencia, ES" },
]

export default function Hero() {
    const ref = useRef<HTMLElement>(null)
    const mx = useMotionValue(-400)
    const my = useMotionValue(-400)
    const sx = useSpring(mx, { stiffness: 120, damping: 20 })
    const sy = useSpring(my, { stiffness: 120, damping: 20 })
    const spotlight = useMotionTemplate`radial-gradient(420px circle at ${sx}px ${sy}px, rgba(255,90,31,0.14), transparent 70%)`

    function handleMove(e: React.MouseEvent<HTMLElement>) {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        mx.set(e.clientX - rect.left)
        my.set(e.clientY - rect.top)
    }

    return (
        <section
            ref={ref}
            id="hero"
            onMouseMove={handleMove}
            className="relative min-h-[100svh] flex flex-col justify-end pt-32 overflow-hidden"
        >
            {/* Fondo: rejilla + foco que sigue al ratón + halo */}
            <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
                <div className="absolute inset-0 bg-grid mask-fade-b" />
                <motion.div className="absolute inset-0" style={{ background: spotlight }} />
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/[0.07] blur-[140px]" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl pb-14 md:pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="flex flex-wrap items-center gap-3 mb-10"
                >
                    <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/[0.08] text-sm text-foreground">
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-70" />
                            <span className="relative w-2 h-2 rounded-full bg-primary" />
                        </span>
                        Disponible para incorporación inmediata
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                        <MapPin className="w-3.5 h-3.5" /> Torrent, Valencia
                    </span>
                </motion.div>

                <h1 className="font-semibold tracking-[-0.055em] leading-[0.86] text-foreground text-[clamp(3.5rem,13vw,11.5rem)]">
                    <span className="block overflow-hidden">
                        <motion.span
                            className="block"
                            initial={{ y: "105%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, ease, delay: 0.1 }}
                        >
                            Matti Ahola
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden pb-[0.06em]">
                        <motion.span
                            className="flex items-baseline gap-[0.18em]"
                            initial={{ y: "105%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, ease, delay: 0.22 }}
                        >
                            <span className="font-serif-display italic text-primary tracking-[-0.02em]">Rivas</span>
                            <span className="hidden sm:inline-block h-[0.09em] flex-1 translate-y-[-0.28em] bg-gradient-to-r from-border to-transparent" />
                        </motion.span>
                    </span>
                </h1>

                <div className="mt-12 md:mt-16 grid gap-10 md:grid-cols-12 md:items-end">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.5 }}
                        className="md:col-span-6 text-xl md:text-2xl leading-snug text-secondary text-balance"
                    >
                        Desarrollador Full Stack que construye{" "}
                        <span className="text-foreground">aplicaciones completas y desplegadas</span> con
                        TypeScript, Angular, Node.js y Docker.{" "}
                        <span className="font-serif-display italic text-foreground">Competitivo y autodidacta.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.62 }}
                        className="md:col-span-6 md:justify-self-end flex flex-col gap-6 w-full md:w-auto"
                    >
                        <dl className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-border bg-border">
                            {facts.map((f) => (
                                <div key={f.k} className="bg-background/80 backdrop-blur px-4 py-3">
                                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-1">{f.k}</dt>
                                    <dd className="text-sm font-medium text-foreground">{f.v}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="#projects"
                                className="group inline-flex h-14 items-center justify-between gap-6 rounded-full bg-primary pl-7 pr-2 text-base font-semibold text-primary-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                                Ver proyectos
                                <span className="grid place-items-center w-10 h-10 rounded-full bg-primary-ink text-primary transition-transform group-hover:rotate-[-45deg]">
                                    <ArrowDownRight className="w-4 h-4" />
                                </span>
                            </Link>
                            <a
                                href="#contact"
                                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-base font-medium text-foreground transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                Contactar
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Cinta del stack */}
            <div className="relative border-y border-border bg-surface/60 backdrop-blur py-5 overflow-hidden mask-fade-x">
                <div className="flex w-max animate-marquee">
                    {[...stack, ...stack].map((tech, i) => (
                        <span
                            key={`${tech}-${i}`}
                            className="flex items-center gap-8 pr-8 text-lg md:text-xl font-medium tracking-tight text-secondary whitespace-nowrap"
                            aria-hidden={i >= stack.length}
                        >
                            {tech}
                            <span className="text-primary text-sm">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
