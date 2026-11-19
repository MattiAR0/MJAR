"use client"

import { motion } from "framer-motion"
import SectionHeader from "@/components/SectionHeader"

type Entry = {
    type: "Experiencia" | "Formación"
    period: string
    title: string
    org: string
    place?: string
    points?: string[]
    current?: boolean
}

const entries: Entry[] = [
    {
        type: "Formación",
        period: "2025 — 2026",
        title: "Desarrollo de Aplicaciones Web (DAW)",
        org: "Instituto de Cheste",
    },
    {
        type: "Experiencia",
        period: "Mar 2025 — Jun 2025",
        title: "Desarrollador Junior (Prácticas)",
        org: "Proyectos Informáticos Levante S.L.",
        place: "Valencia",
        points: [
            "Desarrollo y mantenimiento de proyectos internos.",
            "Automatización de procesos mediante scripts y herramientas DevOps.",
            "Redacción de documentación técnica detallada.",
            "Metodologías ágiles (Scrum / Kanban) en el día a día del equipo.",
        ],
    },
    {
        type: "Formación",
        period: "2022 — 2025",
        title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
        org: "Instituto de Cheste",
    },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Experience() {
    return (
        <section id="experience" className="relative py-28 md:py-36 border-t border-border">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeader
                    index="03"
                    label="Trayectoria"
                    title={
                        <>
                            Experiencia &{" "}
                            <span className="font-serif-display italic text-primary">formación</span>
                        </>
                    }
                    description="Experiencia real en entornos profesionales y una formación técnica que cubre web, escritorio y móvil."
                />

                <ol className="border-t border-border">
                    {entries.map((e, i) => (
                        <motion.li
                            key={e.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, ease, delay: i * 0.06 }}
                            className="group relative grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-border"
                        >
                            <span
                                className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full"
                                aria-hidden
                            />
                            <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-2">
                                <span className="font-mono text-sm text-foreground">{e.period}</span>
                                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                                    {e.type}
                                </span>
                            </div>
                            <div className="md:col-span-9">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-foreground transition-colors group-hover:text-primary">
                                        {e.title}
                                    </h3>
                                    {e.current && (
                                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                                            En curso
                                        </span>
                                    )}
                                </div>
                                <p className="text-secondary">
                                    {e.org}
                                    {e.place && <span className="text-muted"> · {e.place}</span>}
                                </p>
                                {e.points && (
                                    <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                                        {e.points.map((p) => (
                                            <li key={p} className="flex gap-3 text-sm leading-relaxed text-secondary">
                                                <span className="mt-[9px] h-px w-3 bg-primary shrink-0" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
