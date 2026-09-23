"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

const socialLinks = [
    {
        icon: Mail,
        label: "mattirivas4@gmail.com",
        href: "mailto:mattirivas4@gmail.com",
    },
    {
        icon: Linkedin,
        label: "linkedin.com/in/matti-rivas",
        href: "https://linkedin.com/in/matti-rivas",
    },
    {
        icon: Github,
        label: "github.com/MattiAR0",
        href: "https://github.com/MattiAR0",
    },
]

export default function Contact() {
    return (
        <footer id="contact" className="border-t border-zinc-800/60 pt-20 pb-10">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
                        Hablemos
                    </h2>
                    <p className="text-zinc-500 text-lg">
                        Disponible para incorporación inmediata. No dudes en contactarme por cualquiera de estos canales.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
                >
                    <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-surface border border-zinc-800/80 text-zinc-300">
                        <MapPin className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">Torrent, Valencia</span>
                    </div>
                    {socialLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            className="flex items-center gap-3 px-5 py-4 rounded-xl bg-surface border border-zinc-800/80 text-zinc-300 hover:border-zinc-700 hover:text-zinc-100 transition-colors"
                        >
                            <link.icon className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-sm truncate">{link.label}</span>
                        </a>
                    ))}
                </motion.div>

                <div className="border-t border-zinc-800/60 pt-8 text-center text-xs text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} Matti Ahola Rivas</p>
                </div>
            </div>
        </footer>
    )
}
