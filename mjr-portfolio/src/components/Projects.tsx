"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink, Lock } from "lucide-react"

const featured = {
    title: "PremadeGG",
    description:
        "Plataforma LFG para Valorant con sistema de reputación (Karma), matchmaking por rol/rango, mensajería en tiempo real, gestión de equipos e integración con la API de Riot Games. Proyecto final de grado.",
    tags: ["Angular", "Express", "MongoDB", "JWT", "Riot API", "Docker"],
    link: "https://github.com/MattiAR0/premade-gg",
    liveLink: "https://premade-gg.vercel.app/",
    image: "/projects/premadegg.png",
    status: "live" as const,
}

const secondary = [
    {
        title: "FreelanceBoard",
        description:
            "Plataforma fullstack para conectar freelancers con clientes. Monorepo TypeScript con autenticación JWT, ORM Prisma, validación Zod, subida de imágenes a Cloudinary y base de datos PostgreSQL.",
        tags: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Zod", "Docker"],
        link: "https://github.com/MattiAR0/FreelanceBoard",
        liveLink: null,
        image: "/projects/freelanceboard.svg",
        status: "code" as const,
        accentColor: "from-emerald-600 to-teal-700",
    },
    {
        title: "ClutchData",
        description:
            "Herramienta de análisis de datos para eSports. Procesa métricas de partidas para ofrecer estadísticas detalladas, rankings y visualización de rendimiento de jugadores.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "REST API"],
        link: null,
        liveLink: null,
        image: "/projects/clutchdata.svg",
        status: "private" as const,
        accentColor: "from-amber-600 to-orange-700",
    },
]

const statusConfig = {
    live: { label: "Live", className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
    code: { label: "Open Source", className: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
    private: { label: "Privado", className: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
}

function ProjectLinks({ link, liveLink }: { link: string | null; liveLink: string | null }) {
    return (
        <div className="flex items-center gap-5">
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                    <Github className="w-4 h-4 mr-1.5" /> Código
                </a>
            ) : (
                <span className="flex items-center text-sm font-medium text-zinc-600">
                    <Lock className="w-4 h-4 mr-1.5" /> Repositorio privado
                </span>
            )}
            {liveLink && (
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                    <ExternalLink className="w-4 h-4 mr-1.5" /> Demo en vivo
                </a>
            )}
        </div>
    )
}

export default function Projects() {
    const featuredBadge = statusConfig[featured.status]

    return (
        <section id="projects" className="py-24 border-t border-zinc-800/60">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-4">
                        Proyectos Destacados
                    </h2>
                    <p className="text-zinc-500 max-w-xl text-lg">
                        Aplicaciones completas con arquitecturas modernas, buenas prácticas y despliegue profesional.
                    </p>
                </motion.div>

                {/* Featured — PremadeGG */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="group relative rounded-2xl border border-zinc-800/80 bg-surface overflow-hidden mb-12 hover:border-primary/40 transition-colors duration-300"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-700 opacity-80" />
                            <Image
                                src={featured.image}
                                alt={`Screenshot de ${featured.title}`}
                                fill
                                className="object-cover object-top mix-blend-overlay opacity-60 group-hover:scale-[1.03] transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4">
                                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${featuredBadge.className}`}>
                                    {featuredBadge.label}
                                </span>
                            </div>
                        </div>

                        <div className="p-8 lg:p-10 flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-3 group-hover:text-primary transition-colors">
                                {featured.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                {featured.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {featured.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700/50"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <ProjectLinks link={featured.link} liveLink={featured.liveLink} />
                        </div>
                    </div>
                </motion.div>

                {/* Secondary projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {secondary.map((project, index) => {
                        const badge = statusConfig[project.status]
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group rounded-xl border border-zinc-800/80 bg-surface overflow-hidden hover:border-zinc-700 transition-colors duration-300 flex flex-col"
                            >
                                <div className="relative h-44 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-80`} />
                                    <Image
                                        src={project.image}
                                        alt={`Screenshot de ${project.title}`}
                                        fill
                                        className="object-cover object-top mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${badge.className}`}>
                                            {badge.label}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold mb-2 text-zinc-100 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 mb-4 text-sm leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 text-xs font-medium bg-zinc-800 text-zinc-400 rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-zinc-800/60">
                                        <ProjectLinks link={project.link} liveLink={project.liveLink} />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
