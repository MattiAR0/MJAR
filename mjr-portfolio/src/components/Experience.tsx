"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
    return (
        <section id="experience" className="py-24 border-t border-zinc-800/60">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-3">Trayectoria</h2>
                    <p className="text-zinc-500 max-w-xl">
                        Mi camino profesional y formación académica.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experiencia */}
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-zinc-800 rounded-xl mr-4 border border-zinc-700/50">
                                <Briefcase className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-100">Experiencia</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-zinc-800 ml-4 pl-8 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative group"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-zinc-900 border-4 border-zinc-700 rounded-full group-hover:border-primary transition-colors" />

                                <h4 className="text-lg font-bold text-zinc-100">Desarrollador Junior (Prácticas)</h4>
                                <p className="text-primary font-semibold mb-1 text-sm">Proyectos Informáticos Levante S.L.</p>
                                <p className="text-xs text-zinc-500 mb-4">Marzo 2025 – Junio 2025 | Valencia</p>

                                <ul className="space-y-1.5 text-zinc-400 text-sm leading-relaxed">
                                    <li>• Desarrollo y mantenimiento de proyectos internos.</li>
                                    <li>• Automatización de procesos mediante scripts y herramientas DevOps.</li>
                                    <li>• Redacción de documentación técnica detallada.</li>
                                    <li>• Aplicación de Metodologías Ágiles (Scrum/Kanban) en el flujo de trabajo.</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Formación */}
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-zinc-800 rounded-xl mr-4 border border-zinc-700/50">
                                <GraduationCap className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-100">Formación</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-zinc-800 ml-4 pl-8 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative group"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-zinc-900 border-4 border-zinc-700 rounded-full group-hover:border-primary transition-colors" />
                                <h4 className="text-lg font-bold text-zinc-100">Desarrollo de Aplicaciones Web (DAW)</h4>
                                <p className="text-zinc-400 font-medium mb-1 text-sm">Instituto de Cheste</p>
                                <p className="text-xs text-zinc-500">2025 – Actualidad</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-zinc-900 border-4 border-zinc-700 rounded-full group-hover:border-primary transition-colors" />
                                <h4 className="text-lg font-bold text-zinc-100">Desarrollo de Aplicaciones Multiplataforma (DAM)</h4>
                                <p className="text-zinc-400 font-medium mb-1 text-sm">Instituto de Cheste</p>
                                <p className="text-xs text-zinc-500">2022 – 2025</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
