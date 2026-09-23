"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Download } from "lucide-react"

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-[80vh] flex items-center pt-24 pb-16 relative overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-indigo-700/8 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-sm text-zinc-300">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        Disponible para incorporación inmediata
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.1] mb-6"
                >
                    Matti Ahola Rivas
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-4"
                >
                    Desarrollador Full Stack con formación en DAM y DAW.
                    Construyo aplicaciones completas con TypeScript, Angular, Node.js y Docker.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-base text-zinc-500 max-w-2xl leading-relaxed mb-10"
                >
                    Competitivo y autodidacta, con experiencia real en entornos profesionales y metodologías ágiles.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-start gap-4"
                >
                    <Link
                        href="#projects"
                        className="group inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        <ArrowDown className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                        Ver proyectos
                    </Link>
                    <a
                        href="/cv.pdf"
                        download
                        className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-700 px-8 text-lg font-medium text-zinc-300 transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        <Download className="mr-2 w-4 h-4" />
                        Descargar CV
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
