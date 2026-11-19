"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Lock } from "lucide-react"
import SectionHeader from "@/components/SectionHeader"
import { cn } from "@/components/ui/button"

type Status = "live" | "code" | "private"

const featured = {
    title: "PremadeGG",
    kicker: "Proyecto final de grado",
    description:
        "Plataforma LFG para Valorant con sistema de reputación (Karma), matchmaking por rol/rango, mensajería en tiempo real, gestión de equipos e integración con la API de Riot Games.",
    highlights: ["Reputación Karma", "Matchmaking por rol/rango", "Chat en tiempo real", "Riot Games API"],
    tags: ["Angular", "Express", "MongoDB", "JWT", "Riot API", "Docker"],
    link: "https://github.com/MattiAR0/premade-gg",
    liveLink: "https://premade-gg.vercel.app/",
    image: "/projects/premadegg.png",
    status: "live" as Status,
}

const secondary = [
    {
        title: "FreelanceBoard",
        kicker: "Monorepo full stack",
        description:
            "Plataforma para conectar freelancers con clientes. Autenticación JWT, ORM Prisma, validación con Zod, subida de imágenes a Cloudinary y PostgreSQL.",
        tags: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Zod", "Docker"],
        link: "https://github.com/MattiAR0/FreelanceBoard",
        liveLink: null,
        status: "code" as Status,
        glow: "from-emerald-400/40 via-teal-500/10",
        glyph: "{ }",
    },
    {
        title: "ClutchData",
        kicker: "Analítica eSports",
        description:
            "Procesa métricas de partidas para ofrecer estadísticas detalladas, rankings y visualización del rendimiento de jugadores.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "REST API"],
        link: null,
        liveLink: null,
        status: "private" as Status,
        glow: "from-amber-400/40 via-orange-500/10",
        glyph: "▲▼",
    },
]

const statusConfig: Record<Status, { label: string; dot: string }> = {
    live: { label: "En producción", dot: "bg-primary" },
    code: { label: "Open source", dot: "bg-sky-400" },
    private: { label: "Privado", dot: "bg-amber-400" },
}

const ease = [0.22, 1, 0.36, 1] as const

function StatusBadge({ status }: { status: Status }) {
    const s = statusConfig[status]
    return (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur font-mono text-[11px] uppercase tracking-[0.14em] text-foreground">
            <span className={cn("w-1.5 h-1.5 rounded-full", s.dot)} />
            {s.label}
        </span>
    )
}

function ProjectLinks({ link, liveLink }: { link: string | null; liveLink: string | null }) {
    return (
        <div className="flex flex-wrap items-center gap-3">
            {liveLink && (
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-primary-ink text-sm font-semibold transition-transform hover:-translate-y-0.5"
                >
                    Ver demo
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
            )}
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-white/15 text-sm font-medium text-foreground transition-colors hover:border-white/30 hover:bg-white/5"
                >
                    <Github className="w-4 h-4" /> Código
                </a>
            ) : (
                <span className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-dashed border-white/10 text-sm text-muted">
                    <Lock className="w-4 h-4" /> Repositorio privado
                </span>
            )}
        </div>
    )
}

function handleSpotlight(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - r.left}px`)
    el.style.setProperty("--my", `${e.clientY - r.top}px`)
}

const spotlightClass =
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:bg-[radial-gradient(500px_circle_at_var(--mx)_var(--my),rgba(255,90,31,0.08),transparent_60%)]"

export default function Projects() {
    return (
        <section id="projects" className="relative py-28 md:py-36">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeader
                    index="01"
                    label="Proyectos"
                    title={
                        <>
                            Trabajo{" "}
                            <span className="font-serif-display italic text-primary">seleccionado</span>
                        </>
                    }
                    description="Aplicaciones completas, de la base de datos al despliegue, con arquitecturas modernas y buenas prácticas."
                />

                {/* Proyecto destacado */}
                <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease }}
                    onMouseMove={handleSpotlight}
                    className={cn(
                        "group relative rounded-[28px] border border-border bg-surface overflow-hidden mb-6",
                        spotlightClass
                    )}
                >
                    <div className="grid lg:grid-cols-12">
                        <div className="relative lg:col-span-7 p-4 md:p-6 lg:pr-0">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(225,29,72,0.28),transparent_60%)]" aria-hidden />
                            {/* Mockup de navegador */}
                            <div className="relative rounded-2xl border border-white/10 bg-[#0e1117] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:rotate-[-0.4deg]">
                                <div className="flex items-center gap-2 px-4 h-10 border-b border-white/[0.06] bg-white/[0.02]">
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                    <span className="ml-3 flex-1 max-w-xs h-6 rounded-md bg-white/[0.05] px-3 flex items-center font-mono text-[11px] text-muted truncate">
                                        premade-gg.vercel.app
                                    </span>
                                </div>
                                <div className="relative aspect-[16/9]">
                                    <Image
                                        src={featured.image}
                                        alt="Página de inicio de PremadeGG"
                                        fill
                                        sizes="(min-width: 1024px) 640px, 100vw"
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
                                <StatusBadge status={featured.status} />
                            </div>
                        </div>

                        <div className="relative lg:col-span-5 p-7 md:p-10 flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                                    {featured.kicker}
                                </span>
                                <span className="font-mono text-xs text-muted">/01</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground mb-4">
                                {featured.title}
                            </h3>
                            <p className="text-secondary leading-relaxed mb-6">{featured.description}</p>

                            <ul className="grid grid-cols-2 gap-2 mb-6">
                                {featured.highlights.map((h) => (
                                    <li
                                        key={h}
                                        className="flex items-start gap-2 text-sm text-foreground/90"
                                    >
                                        <span className="mt-[7px] w-1 h-1 rounded-full bg-primary shrink-0" />
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5 mb-8">
                                {featured.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 font-mono text-[11px] text-secondary rounded-md bg-white/[0.04] border border-white/[0.06]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <ProjectLinks link={featured.link} liveLink={featured.liveLink} />
                            </div>
                        </div>
                    </div>
                </motion.article>

                {/* Proyectos secundarios */}
                <div className="grid md:grid-cols-2 gap-6">
                    {secondary.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.8, ease, delay: index * 0.1 }}
                            onMouseMove={handleSpotlight}
                            className={cn(
                                "group relative rounded-[28px] border border-border bg-surface overflow-hidden flex flex-col",
                                spotlightClass
                            )}
                        >
                            <div className="relative h-56 overflow-hidden border-b border-border">
                                <div
                                    className={cn(
                                        "absolute -inset-10 bg-gradient-to-br to-transparent blur-2xl transition-transform duration-700 group-hover:scale-110",
                                        project.glow
                                    )}
                                    aria-hidden
                                />
                                <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
                                <span
                                    className="absolute -right-4 -bottom-10 font-serif-display italic text-[11rem] leading-none text-white/[0.08] select-none transition-transform duration-700 group-hover:-translate-x-3"
                                    aria-hidden
                                >
                                    {project.glyph}
                                </span>
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div className="flex items-center justify-between">
                                        <StatusBadge status={project.status} />
                                        <span className="font-mono text-xs text-foreground/50">/0{index + 2}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-[2.75rem] font-semibold tracking-[-0.04em] text-foreground">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-7 flex flex-col flex-1">
                                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-3">
                                    {project.kicker}
                                </span>
                                <p className="text-secondary leading-relaxed mb-6 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-7">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 font-mono text-[11px] text-secondary rounded-md bg-white/[0.04] border border-white/[0.06]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <ProjectLinks link={project.link} liveLink={project.liveLink} />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
