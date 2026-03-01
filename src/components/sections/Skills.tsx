"use client";

import { useRef } from "react";
import { SectionHeading } from "../SectionHeading";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
// Using lucide-react for some generic icons since we can't easily npm install devicons right now without adding more heavy packages, 
// though we can use simple colored text or native SVGs for them. We will use simple placeholders for now.
import { Code2, Server, Wrench, Database, Globe, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
    {
        title: "Frontend",
        icon: <Globe className="w-5 h-5" />,
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Backend",
        icon: <Server className="w-5 h-5" />,
        skills: ["Node.js", "Express", "Python", "Flask", "Django", "C++"],
    },
    {
        title: "Tools & Others",
        icon: <Wrench className="w-5 h-5" />,
        skills: ["Git & GitHub", "AWS Basics", "Kali Linux", "Wireshark", "Burp Suite", "Cloudflare WAF"],
    },
];

const ALL_SKILLS = SKILL_CATEGORIES.flatMap((c) => c.skills);

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Reveal categories
        const categories = gsap.utils.toArray(".skill-category");
        categories.forEach((cat: any) => {
            gsap.fromTo(
                cat,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cat,
                        start: "top 85%",
                    },
                }
            );
        });

        // Reveal skill cards with stagger
        const cards = gsap.utils.toArray(".skill-card");
        gsap.fromTo(
            cards,
            { y: 60, opacity: 0, rotateX: 8 },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            }
        );

    }, { scope: sectionRef });

    return (
        <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-20">
                <SectionHeading number="02." title="Skills & Technologies" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                    {SKILL_CATEGORIES.map((category, idx) => (
                        <div key={idx} className="skill-category">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-accent">{category.icon}</span>
                                <h3 className="uppercase tracking-[3px] text-accent font-mono text-sm font-semibold">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="skill-card flex flex-col items-center justify-center p-4 h-[100px] bg-bg-card border border-border rounded-2xl group transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-2 hover:border-border-accent hover:shadow-[0_15px_40px_rgba(0,0,0,0.2),_0_0_20px_var(--accent-glow)] hover:bg-[length:100%_100%] hover:brightness-110"
                                    >
                                        <Code2 className="w-8 h-8 text-text-muted mb-2 group-hover:text-accent group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300" />
                                        <span className="text-xs text-text-secondary font-medium text-center">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Infinite Marquee Strip */}
            <div className="w-full relative py-6 bg-bg-card border-y border-border overflow-hidden flex whitespace-nowrap">
                {/* Creating two exact copies that animate to the left */}
                <div ref={marqueeRef} className="flex whitespace-nowrap animate-marquee">
                    {[...ALL_SKILLS, ...ALL_SKILLS, ...ALL_SKILLS].map((skill, idx) => (
                        <div key={idx} className="flex items-center mx-8">
                            <span className="text-text-muted font-heading text-xl md:text-2xl uppercase tracking-wider font-bold">
                                {skill}
                            </span>
                            <span className="mx-8 text-accent">|</span>
                        </div>
                    ))}
                </div>
                <div className="flex whitespace-nowrap animate-marquee absolute top-6 left-full">
                    {[...ALL_SKILLS, ...ALL_SKILLS, ...ALL_SKILLS].map((skill, idx) => (
                        <div key={`dup-${idx}`} className="flex items-center mx-8">
                            <span className="text-text-muted font-heading text-xl md:text-2xl uppercase tracking-wider font-bold">
                                {skill}
                            </span>
                            <span className="mx-8 text-accent">|</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
