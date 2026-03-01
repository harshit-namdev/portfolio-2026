"use client";

import { useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "../SectionHeading";
import { AnimatedText } from "../AnimatedText";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Reveal image from right
        gsap.fromTo(
            imageRef.current,
            { x: 80, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            }
        );

        // Reveal frame slightly after
        gsap.fromTo(
            frameRef.current,
            { x: 80, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <section id="about" ref={sectionRef} className="py-24 md:py-32 relative">
            {/* Background glow */}
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading number="01." title="About Me" />

                <div className="flex flex-col md:flex-row gap-16 md:gap-12 lg:gap-24 items-center md:items-start mt-10">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6 text-text-secondary text-lg leading-relaxed max-w-2xl">
                        <AnimatedText
                            type="lines"
                            text="Cybersecurity professional specializing in penetration testing, web security, and ethical hacking. I combine advanced technical knowledge with hands-on expertise to identify vulnerabilities and strengthen digital infrastructures against evolving threats."
                        />
                        <AnimatedText
                            type="lines"
                            delay={0.1}
                            text="President of the Cybersecurity Technical Club — led and organized 10+ state and national-level technical events, demonstrating strong leadership and a commitment to excellence. I implement proactive security measures and continuously expand my expertise in the rapidly evolving cybersecurity landscape."
                        />
                        <AnimatedText
                            type="lines"
                            delay={0.2}
                            text="Open to internships, contract roles, part-time positions, and freelance opportunities in cybersecurity. Ready to collaborate on challenging projects, apply advanced skills, and drive professional growth in dynamic environments."
                        />

                        <div className="pt-4">
                            <AnimatedText type="words" delay={0.3} text="Here are a few technologies I've been working with recently:" className="mb-4 font-mono text-sm text-accent" />
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm text-text-muted">
                                {["Penetration Testing", "Python / Bash", "Cloudflare WAF", "Network Analysis (Nmap)", "Burp Suite", "Web Security"].map((tech, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="text-accent text-xs">▹</span> {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Image Container with 3D Frame Effect */}
                    <div className="relative w-full max-w-[300px] md:max-w-sm shrink-0 md:mt-4 group mt-10 md:mt-0 mx-auto">
                        {/* The Accent Frame Setup */}
                        <div
                            ref={frameRef}
                            className="absolute top-4 left-4 w-full h-full border-2 border-accent rounded-xl z-0 transition-transform duration-500 ease-out group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]"
                        />

                        {/* Image Setup */}
                        <div
                            ref={imageRef}
                            className="relative z-10 w-full aspect-[4/5] bg-bg-card rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:-translate-x-2"
                        >
                            {/* Tint overlay that fades on hover */}
                            <div className="absolute inset-0 bg-accent/20 z-20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />

                            <div className="w-full h-full grayscale-[50%] contrast-125 brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 bg-bg-elevated flex items-center justify-center relative">
                                {/* Fallback pattern / image */}
                                {/* User instructions specify to extract original image - we will use a next/image or a styled div if image missing */}
                                <svg className="w-24 h-24 text-text-dim absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <Image
                                    src="/images/my-photos/harshit.png"
                                    alt="Harshit Namdev"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover relative z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
