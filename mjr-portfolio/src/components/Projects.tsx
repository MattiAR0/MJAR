"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
    {
        title: "PremadeGG",
        description: "Plataforma integral para jugadores de Valorant. Facilita la búsqueda de equipos (LFG), creación de estrategias en mapas interactivos y gestión de comunidades.",
        tags: ["Angular", "Node.js", "MongoDB", "SASS", "Socket.io"],
        color: "bg-indigo-100",
        link: "https://github.com/MattiAR0/premade-gg.git",
        liveLink: "https://premade-gg.vercel.app/"
    },
    {
        title: "ClutchData",
        description: "Herramienta avanzada de análisis de datos para eSports. Procesa métricas de partidas para ofrecer estadísticas detalladas y visualización de rendimiento.",
        tags: ["PHP", "SQL", "JavaScript", "HTML/CSS", "APIs"],
        color: "bg-emerald-100",
        link: "https://github.com/MattiAR0/ClutchData.git",
        liveLink: null
    },
]

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Mis Proyectos</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Una selección de trabajos recientes donde he aplicado las mejores prácticas de desarrollo y diseño.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="p-8 flex flex-col h-full relative z-10">
                                <div className={`absolute top-0 left-0 w-2 h-full ${project.color} opacity-80`} />
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Github className="w-24 h-24" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-secondary hover:text-foreground transition-colors">
                                        <Github className="w-4 h-4 mr-1" /> Code
                                    </a>
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-secondary hover:text-foreground transition-colors">
                                            <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    )
}
