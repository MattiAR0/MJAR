"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code } from "lucide-react"

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gray-900 text-white">
            {/* Dynamic Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center justify-center py-1 px-3 mb-8 bg-gray-800 rounded-full border border-gray-700 shadow-lg">
                        <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-300">Disponible para nuevos proyectos</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
                >
                    Creando soluciones eficientes <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">y código limpio.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    Soy <span className="font-semibold text-white">Matti Ahola Rivas</span>, Desarrollador de Aplicaciones Web Multiplataforma y Full Stack.
                    <br /><br className="hidden md:block" />
                    <span className="text-lg text-gray-400 block max-w-2xl mx-auto">
                        Me caracterizo por ser competitivo y autodidacta, con un fuerte interés en arquitectura moderna, despliegue automatizado e IA.
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="#booking">
                        <Button size="lg" className="group">
                            Agendar Cita
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="#projects">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
                        >
                            <Code className="mr-2 w-4 h-4" />
                            Ver mis proyectos
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
