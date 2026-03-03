"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import Image from "next/image";

const ACHIEVEMENTS_DATA = [
    {
        title: "Cybersecurity Club President",
        description: "Led the Cybersecurity Technical Club as President, successfully organizing and managing over 10 state and national-level technical events, workshops, and competitions.",
        image: "/images/achieve/president-citac.jpg"
    },
    {
        title: "Top 5 Finalist — Cyber Safety Hackathon",
        description: "Selected as a Top 5 finalist out of numerous participants in the Cyber Safety Hackathon organized by MP State Police, demonstrating advanced problem-solving in cybersecurity.",
        image: "/images/achieve/mp-cyber-cell-hackathon.jpg"
    },
    {
        title: "News24 DDoS Incident Response",
        description: "Successfully mitigated a live DDoS attack on News24 production systems, reducing malicious traffic by 94% through Cloudflare WAF rule adjustments and real-time traffic analysis.",
        image: "/images/achieve/news24ddos.png"
    }
];

export default function Achievements() {
    const sectionRef = useRef<HTMLElement>(null);
    const [[page, direction], setPage] = useState([0, 0]);

    const activeIndex = Math.abs(page % ACHIEVEMENTS_DATA.length);
    const activeItem = ACHIEVEMENTS_DATA[activeIndex];

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useGSAP(() => {
        gsap.fromTo(
            ".achievements-content",
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
            }
        );
    }, { scope: sectionRef });

    const variants = {
        enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
    };

    return (
        <section id="achievements" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7c3aed]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6">
                <div className="flex justify-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary text-center">
                        Achievements
                        <div className="h-1 w-16 bg-accent mx-auto mt-4 rounded-full"></div>
                    </h2>
                </div>

                <div className="achievements-content relative mx-auto max-w-4xl bg-bg-card rounded-3xl border border-border overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">

                    {/* Carousel Container */}
                    <div className="relative h-[350px] md:h-[450px] w-full flex items-center justify-center overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={page}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute inset-0 flex flex-col"
                            >
                                {/* Image — full landscape view */}
                                <div className="relative h-[65%] md:h-[60%] w-full bg-bg-card flex items-center justify-center">
                                    <Image
                                        src={activeItem.image}
                                        alt={activeItem.title}
                                        fill
                                        className="object-cover md:object-contain"
                                        sizes="(max-width: 768px) 100vw, 800px"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-card to-transparent" />
                                </div>

                                {/* Text */}
                                <div className="relative h-[35%] md:h-[40%] bg-bg-card w-full flex flex-col items-center justify-center p-6 md:p-8 text-center">
                                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">{activeItem.title}</h3>
                                    <p className="text-text-secondary text-sm md:text-base max-w-2xl leading-relaxed">
                                        {activeItem.description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="absolute bottom-[42%] md:bottom-[38%] w-full flex justify-between px-4 z-20 pointer-events-none">
                            <button
                                className="w-10 h-10 rounded-full bg-bg-primary/60 border border-border flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-colors pointer-events-auto backdrop-blur-md"
                                onClick={() => paginate(-1)}
                                aria-label="Previous achievement"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                className="w-10 h-10 rounded-full bg-bg-primary/60 border border-border flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-colors pointer-events-auto backdrop-blur-md"
                                onClick={() => paginate(1)}
                                aria-label="Next achievement"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 pb-4">
                        {ACHIEVEMENTS_DATA.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setPage([idx, idx > activeIndex ? 1 : -1])}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-accent w-6' : 'bg-text-dim hover:bg-text-muted'}`}
                                aria-label={`Go to achievement ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
