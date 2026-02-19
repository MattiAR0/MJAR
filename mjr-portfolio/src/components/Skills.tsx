"use client"

import { motion } from "framer-motion"

const skills = {
    "Lenguajes & Core": ["Java", "JavaScript", "Go", "SQL", "PHP", "C#"],
    "Web & Frameworks": ["Angular", "HTML5", "CSS3", "Node.js", "Tailwind CSS"],
    "Herramientas & DevOps": ["Git/GitHub", "Docker", "Coolify", "PostgreSQL", "SQL Server"]
}

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Stack tecnológico que utilizo para construir soluciones robustas y escalables.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 text-indigo-400">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm font-medium bg-white/10 rounded-full text-gray-200 hover:bg-white/20 transition-colors cursor-default"
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
