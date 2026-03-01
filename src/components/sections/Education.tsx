"use client";

import { useRef } from "react";
import { SectionHeading } from "../SectionHeading";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { GraduationCap } from "lucide-react";

const EDUCATION_DATA = [
    {
        date: "2022 — 2026",
        degree: "B.Tech in CSE — Cyber Security",
        institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
        description: "Focusing on ethical hacking, network protocols, and web security. Served as President of the Cyber Security Technical Club (CITAC) for two consecutive terms, organizing 10+ state and national-level events.",
    },
    {
        date: "2020 — 2022",
        degree: "Higher Secondary (12th)",
        institution: "MP Board",
        description: "Completed higher secondary education with a focus on science and mathematics, building a strong analytical foundation for cybersecurity studies.",
    },
];

export default function Education() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cards: HTMLElement[] = gsap.utils.toArray(".edu-card");
        cards.forEach((card) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: card, start: "top 85%" },
                }
            );
        });
    }, { scope: sectionRef });

    return (
        <section id="education" ref={sectionRef} className="py-24 md:py-32 relative">
            {/* Background glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <SectionHeading number="05." title="Education" />

                <div className="mt-16 space-y-8">
                    {EDUCATION_DATA.map((item, idx) => (
                        <div key={idx} className="edu-card group bg-bg-card border border-border rounded-2xl p-8 hover:border-accent/50 hover:shadow-[0_10px_40px_rgba(100,255,218,0.1)] transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <GraduationCap className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <span className="font-mono text-xs text-accent mb-2 block">{item.date}</span>
                                    <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary mb-1">{item.degree}</h3>
                                    <h4 className="text-base text-text-secondary font-medium mb-4">{item.institution}</h4>
                                    <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
