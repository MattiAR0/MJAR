"use client"

import { motion } from "framer-motion"

const skills = {
    "Lenguajes & Core": ["Java", "JavaScript", "Go", "SQL", "PHP", "C#"],
    "Web & Frameworks": ["Angular", "HTML5", "CSS3", "Node.js", "Tailwind CSS"],
    "Herramientas & DevOps": ["Git/GitHub", "Docker", "Coolify", "PostgreSQL", "SQL Server"],
}

export default function Skills() {
    return (
        <section id="skills" className="py-24 border-t border-zinc-800/60">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-3">
                        Stack Técnico
                    </h2>
                    <p className="text-zinc-500 max-w-xl">
                        Tecnologías que utilizo para construir soluciones robustas y escalables.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-xl p-6 bg-surface border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                        >
                            <h3 className="text-base font-bold mb-5 text-primary">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm font-medium bg-zinc-800 rounded-full text-zinc-300 border border-zinc-700/40"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
