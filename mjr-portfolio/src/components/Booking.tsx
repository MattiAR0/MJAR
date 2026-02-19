"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { motion } from "framer-motion"

export default function Booking() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "mattiar0" });
            cal("ui", {
                styles: { branding: { brandColor: "#000000" } },
                hideEventTypeDetails: false,
                layout: "month_view",
                theme: "light"
            });
        })();
    }, [])

    return (
        <section id="booking" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/3 sticky top-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Agendar Cita
                        </h2>
                        <p className="text-secondary text-lg mb-8 leading-relaxed">
                            Selecciona un horario que te vaya bien. La integración con Cal.com permite gestionar la disponibilidad automáticamente.
                        </p>

                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-foreground mb-2">¿Por qué usar Cal.com?</h3>
                            <ul className="space-y-2 text-sm text-secondary">
                                <li>• Sincronización automática de calendarios</li>
                                <li>• Confirmaciones instantáneas</li>
                                <li>• Re-agendamiento flexible</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Cal.com Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-2/3 w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                    >
                        <Cal
                            calLink="mattiar0"
                            calOrigin="https://cal.com"
                            style={{ width: "100%", height: "100%", minHeight: "600px" }}
                            config={{ layout: "month_view", theme: "light" }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
