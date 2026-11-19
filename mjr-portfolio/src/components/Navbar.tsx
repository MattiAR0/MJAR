"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { cn } from "@/components/ui/button"

const navLinks = [
    { name: "Proyectos", href: "#projects" },
    { name: "Stack", href: "#skills" },
    { name: "Trayectoria", href: "#experience" },
    { name: "Contacto", href: "#contact" },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [active, setActive] = useState<string>("")

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24)
        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const sections = navLinks
            .map((l) => document.querySelector(l.href))
            .filter((el): el is Element => el !== null)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`)
                })
            },
            { rootMargin: "-45% 0px -50% 0px" }
        )
        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    return (
        <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4 md:pt-5">
            <nav
                className={cn(
                    "mx-auto max-w-6xl flex items-center justify-between rounded-full border pl-5 pr-2 py-2 transition-all duration-300",
                    isScrolled || isMobileMenuOpen
                        ? "bg-[#0d0d0e]/80 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)]"
                        : "bg-transparent border-transparent"
                )}
            >
                <Link href="/" className="group flex items-center gap-2.5" aria-label="Inicio">
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-primary text-primary-ink font-mono text-[11px] font-bold tracking-tight transition-transform group-hover:rotate-[-8deg]">
                        MJ
                    </span>
                    <span className="font-semibold tracking-tight text-foreground">
                        MJAR<span className="text-primary">.</span>
                    </span>
                </Link>

                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                                    active === link.href ? "text-foreground" : "text-secondary hover:text-foreground"
                                )}
                            >
                                {active === link.href && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] border border-white/10"
                                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                    />
                                )}
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <a
                        href="/cv.pdf"
                        download
                        className="hidden sm:inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-foreground text-background text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-ink"
                    >
                        CV
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                        className="md:hidden grid place-items-center w-9 h-9 rounded-full border border-white/10 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden mx-auto max-w-6xl mt-2 rounded-3xl border border-white/10 bg-[#0d0d0e]/95 backdrop-blur-xl p-3"
                    >
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-medium text-foreground hover:bg-white/5"
                            >
                                {link.name}
                                <span className="font-mono text-xs text-muted">0{i + 1}</span>
                            </Link>
                        ))}
                        <a
                            href="/cv.pdf"
                            download
                            className="mt-2 flex items-center justify-center gap-2 h-12 rounded-2xl bg-primary text-primary-ink font-semibold"
                        >
                            Descargar CV <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
