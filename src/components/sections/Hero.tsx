"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Download } from "lucide-react";
import MagneticButton from "../MagneticButton";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";

const ROLES = [
    "Cybersecurity Professional",
    "Penetration Tester",
    "Web Security Expert",
    "Ethical Hacker",
];

import HeroName from "./HeroName";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter effect
    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayedRole === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000); // Pause at end of word
        } else if (isDeleting && displayedRole === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
            timeout = setTimeout(() => { }, 500); // Pause before next word
        } else {
            const nextDelay = isDeleting ? 50 : 100; // Speed of typing/deleting
            timeout = setTimeout(() => {
                setDisplayedRole((prev) =>
                    isDeleting
                        ? currentRole.substring(0, prev.length - 1)
                        : currentRole.substring(0, prev.length + 1)
                );
            }, nextDelay + Math.random() * 50);
        }

        return () => clearTimeout(timeout);
    }, [displayedRole, isDeleting, roleIndex]);

    // Entrance animations
    useGSAP(() => {
        const tl = gsap.timeline({ delay: 3.2 }); // Wait for preloader

        tl.fromTo(
            ".hero-greeting",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        )
            .fromTo(
                nameRef.current,
                { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 1,
                    ease: "power4.out"
                },
                "-=0.2"
            )
            .fromTo(
                ".hero-role",
                { opacity: 0 },
                { opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(
                ".hero-desc",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(
                ".hero-cta",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
                "-=0.2"
            )
            .fromTo(
                ".hero-scroll-indicator",
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power2.inOut" },
                "+=0.5"
            );
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
            {/* Aurora Background */}
            <div className="aurora">
                <div className="aurora__item" />
                <div className="aurora__item" />
                <div className="aurora__item" />
                <div className="aurora__item" />
            </div>

            <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <p className="hero-greeting font-mono text-accent tracking-[3px] uppercase text-sm md:text-base mb-4 opacity-0">
                        👋 Hello, I&apos;m
                    </p>

                    <HeroName />
                    {/* SVG Stroke Animated NAMDEV */}
                    <div ref={nameRef} className="mt-2 mb-2">
                        <svg viewBox="0 0 500 80" className="w-full max-w-[400px] h-auto">
                            <symbol id="s-namdev">
                                <text textAnchor="start" x="0" y="70" className="font-heading font-extrabold" style={{ fontSize: '72px' }}>NAMDEV</text>
                            </symbol>
                            <g>
                                <use xlinkHref="#s-namdev" className="svg-stroke-text" />
                                <use xlinkHref="#s-namdev" className="svg-stroke-text" />
                                <use xlinkHref="#s-namdev" className="svg-stroke-text" />
                                <use xlinkHref="#s-namdev" className="svg-stroke-text" />
                                <use xlinkHref="#s-namdev" className="svg-stroke-text" />
                            </g>
                        </svg>
                    </div>

                    <div className="hero-role h-10 md:h-12 mb-6 opacity-0">
                        <h2 className="text-xl md:text-3xl font-medium text-text-secondary">
                            {displayedRole}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-[3px] h-[1em] bg-accent align-middle ml-1"
                            />
                        </h2>
                    </div>

                    <p className="hero-desc text-text-muted text-lg max-w-xl mb-10 leading-relaxed opacity-0">
                        Cybersecurity professional specializing in penetration testing, web security, and ethical hacking.
                        I combine advanced technical knowledge with hands-on expertise to identify vulnerabilities and strengthen digital infrastructures.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-20">
                        <div className="hero-cta opacity-0">
                            <MagneticButton>
                                <a
                                    href="#projects"
                                    className="group flex items-center justify-center gap-2 bg-accent text-bg-primary px-8 py-4 rounded-full font-semibold hover:brightness-110 hover:-translate-y-[2px] hover:shadow-[0_10px_40px_var(--accent-glow)] transition-all duration-300"
                                >
                                    View My Work
                                    <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </MagneticButton>
                        </div>

                        <div className="hero-cta opacity-0">
                            <MagneticButton>
                                <a
                                    href="/resume/gen web/Harshit Namdev Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-2 bg-transparent border border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent-subtle hover:-translate-y-[2px] hover:shadow-[0_10px_40px_var(--accent-glow)] transition-all duration-300"
                                >
                                    Download Resume
                                    <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                                </a>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
                <span className="text-[10px] uppercase tracking-widest text-text-muted font-mono">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
                />
            </div>
        </section>
    );
}
