"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

import { useForm, ValidationError } from "@formspree/react"

export default function Contact() {
    const [state, handleSubmit] = useForm("xzdaazbv");

    return (
        <footer id="contact" className="bg-gray-900 text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 mb-20">

                    {/* Contact Info / Branding */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hablemos.</h2>
                            <p className="text-gray-400 mb-8 text-lg leading-relaxed max-w-md">
                                Estoy disponible para proyectos freelance y consultoría técnica.
                                Si buscas una solución robusta y moderna, contáctame.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center text-gray-300">
                                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                                    Torrent, Valencia
                                </div>
                                <a href="mailto:mattirivas4@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                    <Mail className="w-5 h-5 mr-3 text-primary" />
                                    mattirivas4@gmail.com
                                </a>
                                <a href="tel:+34622015978" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                    <Phone className="w-5 h-5 mr-3 text-primary" />
                                    +34 622 015 978
                                </a>
                                <a href="https://linkedin.com/in/matti-rivas" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                    <Linkedin className="w-5 h-5 mr-3 text-primary" />
                                    linkedin.com/in/matti-rivas
                                </a>
                                <a href="https://github.com/MattiAR0" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                    <Github className="w-5 h-5 mr-3 text-primary" />
                                    github.com/MattiAR0
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700"
                        >
                            {state.succeeded ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                                    <p className="text-gray-400">Gracias por contactarme. Te responderé lo antes posible.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                                            placeholder="Tu nombre"
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                                            placeholder="tu@email.com"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                                        <textarea
                                            required
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500 resize-none"
                                            placeholder="Cuéntame sobre tu proyecto..."
                                        />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors"
                                        disabled={state.submitting}
                                    >
                                        {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Matti Ahola Rivas. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
