"use client"

import { motion } from "framer-motion"
import { Code2, Layers, Server } from "lucide-react"
import SectionHeader from "@/components/SectionHeader"
import { cn } from "@/components/ui/button"

const groups = [
    {
        title: "Lenguajes & Core",
        icon: Code2,
        note: "Base sólida en tipado fuerte y backend.",
        items: ["Java", "JavaScript", "TypeScript", "Go", "SQL", "PHP", "C#"],
        span: "md:col-span-7",
    },
    {
        title: "Web & Frameworks",
        icon: Layers,
        note: "Interfaces y APIs de principio a fin.",
        items: ["Angular", "Next.js", "Node.js", "Express", "Tailwind CSS", "HTML5", "CSS3"],
        span: "md:col-span-5",
    },
    {
        title: "Herramientas & DevOps",
        icon: Server,
        note: "Del commit al contenedor en producción.",
        items: ["Git / GitHub", "Docker", "Coolify", "PostgreSQL", "MongoDB", "SQL Server", "Vercel"],
        span: "md:col-span-12",
    },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Skills() {
    return (
        <section id="skills" className="relative py-28 md:py-36 border-t border-border">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeader
                    index="02"
                    label="Stack"
                    title={
                        <>
                            Herramientas que{" "}
                            <span className="font-serif-display italic text-primary">domino</span>
                        </>
                    }
                    description="Tecnologías con las que construyo soluciones robustas, mantenibles y listas para escalar."
                />

                <div className="grid md:grid-cols-12 gap-4">
                    {groups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, ease, delay: index * 0.08 }}
                            className={cn(
                                "group relative rounded-[24px] border border-border bg-surface p-7 md:p-8 overflow-hidden transition-colors hover:border-white/15",
                                group.span
                            )}
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-1.5">
                                        {group.title}
                                    </h3>
                                    <p className="text-sm text-muted">{group.note}</p>
                                </div>
                                <span className="grid place-items-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-ink">
                                    <group.icon className="w-5 h-5" />
                                </span>
                            </div>
                            <ul className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <li
                                        key={skill}
                                        className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm font-medium text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
