"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Removed unused SectionHeading import
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import Image from "next/image";

const ACHIEVEMENTS_DATA = [
    {
        title: "Cybersecurity Club President",
        description: "Led the Cybersecurity Technical Club as President, successfully organizing and managing over 10 state and national-level technical events, workshops, and competitions.",
        image: "/images/achieve/20240904_212130.png"
    },
    {
        title: "Top 5 Finalist - Cyber Safety Hackathon",
        description: "Selected as a Top 5 finalist out of numerous participants in the Cyber Safety Hackathon organized by MP State Police, demonstrating advanced problem-solving in cybersecurity.",
        image: "/images/achieve/news24ddos.png" // Fallback to another image for demo
    },
    {
        title: "College Representative - Shrijan Hackathon",
        description: "Represented the college at the state-level Shrijan Hackathon, collaborating with peers to develop innovative security solutions.",
        image: "/images/achieve/20240904_212130.png"
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
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            }
        );
    }, { scope: sectionRef });

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    return (
        <section id="achievements" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex justify-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary text-center">
                        Achievements
                        <div className="h-1 w-16 bg-accent mx-auto mt-4 rounded-full"></div>
                    </h2>
                </div>

                <div className="achievements-content relative mx-auto max-w-4xl bg-bg-card rounded-3xl border border-border overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">

                    {/* Carousel Container */}
                    <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden bg-bg-elevated">
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
                                {/* Image Half */}
                                <div className="relative h-1/2 md:h-[60%] w-full">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a2456] to-transparent z-10"></div>
                                    <div className="absolute inset-0 bg-bg-primary flex items-center justify-center">
                                        <span className="text-text-muted font-mono text-sm">(Image placeholder)</span>
                                    </div>
                                    <Image
                                        src={activeItem.image}
                                        alt={activeItem.title}
                                        fill
                                        className="object-cover relative z-0"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                    />
                                </div>

                                {/* Text Half */}
                                <div className="relative h-1/2 md:h-[40%] bg-[#1c1a35] w-full flex flex-col items-center justify-center p-8 text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{activeItem.title}</h3>
                                    <p className="text-text-secondary md:text-lg max-w-2xl leading-relaxed">
                                        {activeItem.description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="absolute top-1/2 md:top-[60%] -translate-y-1/2 w-full flex justify-between px-4 z-20 pointer-events-none">
                            <button
                                className="w-12 h-12 rounded-full bg-bg-primary/80 border border-border flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-colors pointer-events-auto backdrop-blur-md"
                                onClick={() => paginate(-1)}
                                aria-label="Previous achievement"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                className="w-12 h-12 rounded-full bg-bg-primary/80 border border-border flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-colors pointer-events-auto backdrop-blur-md"
                                onClick={() => paginate(1)}
                                aria-label="Next achievement"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
