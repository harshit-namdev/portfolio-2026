"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Handle transparent to glassmorphism background
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Handle hide on scroll down, show on scroll up
            if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    useGSAP(() => {
        if (isMobileMenuOpen && menuRef.current) {
            const links = menuRef.current.querySelectorAll(".mobile-link");
            gsap.fromTo(
                links,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power3.out", delay: 0.1 }
            );
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out px-5 md:px-[10%] flex items-center justify-between
          ${isScrolled ? "h-16 bg-[rgba(5,5,5,0.85)] backdrop-blur-[20px] saturate-150 border-b border-[var(--border)] shadow-[0_10px_30px_rgba(0,0,0,0.2)]" : "h-20 bg-transparent"}
        `}
                animate={{ y: isHidden && !isMobileMenuOpen ? "-100%" : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="flex-1">
                    <Link href="#home" className="flex items-center gap-1 group">
                        <span className="text-accent text-xl md:text-2xl font-extrabold tracking-tight uppercase">HARSHIT</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-accent text-xl md:text-2xl font-extrabold tracking-tight uppercase">NAMDEV</span>
                        <span className="w-2 h-2 rounded-full bg-accent ml-1 group-hover:shadow-[0_0_10px_var(--accent)] transition-shadow duration-300" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <MagneticButton key={link.name} className="relative group">
                            <a href={link.href} className="text-text-secondary hover:text-white transition-colors text-sm font-medium tracking-wide">
                                {link.name}
                            </a>
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </MagneticButton>
                    ))}
                    <MagneticButton>
                        <a
                            href="/resume/gen web/Harshit Namdev Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-5 py-2 rounded-full border border-accent text-accent text-sm font-medium hover:bg-[var(--accent-subtle)] hover:border-accent hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 transform -translate-y-0.5 inline-block"
                        >
                            Resume
                        </a>
                    </MagneticButton>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[101]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-8 h-0.5 bg-accent transition-all duration-300 ease-out ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : "-translate-y-1"}`}></span>
                    <span className={`block w-8 h-0.5 bg-accent transition-all duration-300 ease-out my-1 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`block w-8 h-0.5 bg-accent transition-all duration-300 ease-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : "translate-y-1"}`}></span>
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99] bg-[rgba(5,5,5,0.98)] backdrop-blur-[30px] flex flex-col items-center justify-center pt-20"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="overflow-hidden">
                                    <a
                                        href={link.href}
                                        className="mobile-link text-3xl font-heading font-bold text-white hover:text-accent transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </div>
                            ))}
                            <div className="overflow-hidden mt-8">
                                <a
                                    href="/resume/gen web/Harshit Namdev Resume.pdf"
                                    target="_blank"
                                    className="mobile-link px-8 py-3 rounded-full border border-accent text-accent text-lg font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Resume
                                </a>
                            </div>
                        </div>

                        <div className="absolute bottom-12 flex gap-6 mt-12">
                            <a href="https://github.com/harshit-namdev" className="text-text-muted hover:text-accent transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/harshit-namdev" className="text-text-muted hover:text-accent transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:harshitnamdev86@gmail.com" className="text-text-muted hover:text-accent transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
