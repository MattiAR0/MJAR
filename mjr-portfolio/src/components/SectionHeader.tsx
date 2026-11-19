"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
    index: string
    label: string
    title: React.ReactNode
    description?: string
}

export default function SectionHeader({ index, label, title, description }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 md:mb-20 grid gap-6 md:grid-cols-12 md:items-end"
        >
            <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    <span className="text-primary">{index}</span>
                    <span className="h-px w-10 bg-border" />
                    <span>{label}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.035em] leading-[0.95] text-foreground text-balance">
                    {title}
                </h2>
            </div>
            {description && (
                <p className="md:col-span-5 text-secondary text-base md:text-lg leading-relaxed md:pb-2">
                    {description}
                </p>
            )}
        </motion.div>
    )
}
