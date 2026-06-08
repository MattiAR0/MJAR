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
        <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
                    <p className="text-gray-400 text-lg">
                        Disponible para incorporaci&oacute;n inmediata. No dudes en contactarme.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
                >
                    <div className="flex items-center text-gray-300">
                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                        Torrent, Valencia
                    </div>
                    {socialLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            className="flex items-center text-gray-300 hover:text-white transition-colors"
                        >
                            <link.icon className="w-5 h-5 mr-2 text-primary" />
                            {link.label}
                        </a>
                    ))}
                </motion.div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Matti Ahola Rivas</p>
                </div>
            </div>
        </footer>
    )
}
