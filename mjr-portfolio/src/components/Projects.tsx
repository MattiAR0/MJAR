"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink, Lock } from "lucide-react"

const projects = [
    {
        title: "PremadeGG",
        description:
            "Plataforma LFG para Valorant con sistema de reputación (Karma), matchmaking por rol/rango, mensajería en tiempo real, gestión de equipos e integración con la API de Riot Games. Proyecto final de grado.",
        tags: ["Angular", "Express", "MongoDB", "JWT", "Riot API", "Docker"],
        accentColor: "from-indigo-500 to-violet-600",
        borderColor: "border-indigo-500/40",
        link: "https://github.com/MattiAR0/premade-gg",
        liveLink: "https://premade-gg.vercel.app/",
        image: "/projects/premadegg.png",
        status: "live" as const,
    },
    {
        title: "FreelanceBoard",
        description:
            "Plataforma fullstack para conectar freelancers con clientes. Monorepo TypeScript con autenticación JWT, ORM Prisma, validación Zod, subida de imágenes a Cloudinary y base de datos PostgreSQL.",
        tags: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Zod", "Docker"],
        accentColor: "from-emerald-500 to-teal-600",
        borderColor: "border-emerald-500/40",
        link: "https://github.com/MattiAR0/FreelanceBoard",
        liveLink: null,
        image: "/projects/freelanceboard.svg",
        status: "code" as const,
    },
    {
        title: "ClutchData",
        description:
            "Herramienta de análisis de datos para eSports. Procesa métricas de partidas para ofrecer estadísticas detalladas, rankings y visualización de rendimiento de jugadores.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "REST API"],
        accentColor: "from-amber-500 to-orange-600",
        borderColor: "border-amber-500/40",
        link: null,
        liveLink: null,
        image: "/projects/clutchdata.svg",
        status: "private" as const,
    },
]

const statusConfig = {
    live: { label: "Live", className: "bg-green-500/20 text-green-400 border-green-500/30" },
    code: { label: "Open Source", className: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    private: { label: "Privado", className: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Proyectos Destacados</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Aplicaciones completas donde he aplicado arquitecturas modernas, buenas prácticas y despliegue profesional.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => {
                        const badge = statusConfig[project.status]
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group bg-gray-800 rounded-xl overflow-hidden border ${project.borderColor} hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 flex flex-col`}
                            >
                                <div className="relative h-48 overflow-hidden">
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
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 text-xs font-medium bg-white/10 text-gray-300 rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-700/50">
                                        {project.link ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                            >
                                                <Github className="w-4 h-4 mr-1.5" /> Código
                                            </a>
                                        ) : (
                                            <span className="flex items-center text-sm font-medium text-gray-600">
                                                <Lock className="w-4 h-4 mr-1.5" /> Repositorio privado
                                            </span>
                                        )}
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-1.5" /> Demo en vivo
                                            </a>
                                        )}
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
