"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Trayectoria</h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Mi camino profesional y formación académica.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-zinc-900 rounded-xl mr-4 shadow-lg shadow-primary/20">
                                <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Experiencia</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-zinc-200 ml-4 pl-8 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative group"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-zinc-900 border-4 border-zinc-200 rounded-full group-hover:border-primary transition-colors" />

                                <h4 className="text-xl font-bold text-foreground">Desarrollador Junior (Prácticas)</h4>
                                <p className="text-primary font-bold mb-1">Proyectos Informáticos Levante S.L.</p>
                                <p className="text-sm text-secondary mb-4">Marzo 2025 - Junio 2025 | Valencia</p>

                                <ul className="space-y-2 text-secondary text-sm leading-relaxed">
                                    <li>• Desarrollo y mantenimiento de proyectos internos.</li>
                                    <li>• Automatización de procesos mediante scripts y herramientas DevOps.</li>
                                    <li>• Redacción de documentación técnica detallada.</li>
                                    <li>• Aplicación de Metodologías Ágiles (Scrum/Kanban) en el flujo de trabajo.</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-zinc-100 rounded-xl mr-4 border border-zinc-200">
                                <GraduationCap className="w-6 h-6 text-zinc-900" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Formación</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-zinc-200 ml-4 pl-8 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative group"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white border-4 border-zinc-300 rounded-full group-hover:border-primary transition-colors" />
                                <h4 className="text-xl font-bold text-foreground">Desarrollo de Aplicaciones Web (DAW)</h4>
                                <p className="text-zinc-600 font-medium mb-1">Instituto de Cheste</p>
                                <p className="text-sm text-secondary">2025 - Actualidad</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white border-4 border-zinc-300 rounded-full group-hover:border-primary transition-colors" />
                                <h4 className="text-xl font-bold text-foreground">Desarrollo de Aplicaciones Multiplataforma (DAM)</h4>
                                <p className="text-zinc-600 font-medium mb-1">Instituto de Cheste</p>
                                <p className="text-sm text-secondary">2022 - 2025</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
