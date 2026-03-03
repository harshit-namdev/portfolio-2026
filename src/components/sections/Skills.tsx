"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { Globe, Server, Wrench, Shield, Terminal, Code, Database, Wifi, Bug, Lock, Cpu, FileCode } from "lucide-react";

// Map skill names to unique icons
const SKILL_ICON_MAP: Record<string, React.ReactNode> = {
    "HTML5": <FileCode className="w-7 h-7" />,
    "CSS3": <Code className="w-7 h-7" />,
    "JavaScript": <Terminal className="w-7 h-7" />,
    "TypeScript": <FileCode className="w-7 h-7" />,
    "React": <Cpu className="w-7 h-7" />,
    "Next.js": <Globe className="w-7 h-7" />,
    "Tailwind CSS": <Code className="w-7 h-7" />,
    "Node.js": <Server className="w-7 h-7" />,
    "Express": <Server className="w-7 h-7" />,
    "Python": <Terminal className="w-7 h-7" />,
    "Flask": <Database className="w-7 h-7" />,
    "Django": <Database className="w-7 h-7" />,
    "C++": <Cpu className="w-7 h-7" />,
    "Git & GitHub": <Code className="w-7 h-7" />,
    "AWS Basics": <Globe className="w-7 h-7" />,
    "Kali Linux": <Shield className="w-7 h-7" />,
    "Wireshark": <Wifi className="w-7 h-7" />,
    "Burp Suite": <Bug className="w-7 h-7" />,
    "Cloudflare WAF": <Lock className="w-7 h-7" />,
};

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
        title: "Tools & Security",
        icon: <Wrench className="w-5 h-5" />,
        skills: ["Git & GitHub", "AWS Basics", "Kali Linux", "Wireshark", "Burp Suite", "Cloudflare WAF"],
    },
];

const ALL_SKILLS = SKILL_CATEGORIES.flatMap((c) => c.skills);

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const categories: HTMLElement[] = gsap.utils.toArray(".skill-category");
        categories.forEach((cat) => {
            gsap.fromTo(cat,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: cat, start: "top 85%" } }
            );
        });

        const cards = gsap.utils.toArray(".skill-card");
        gsap.fromTo(cards,
            { y: 60, opacity: 0, rotateX: 8 },
            { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
        );
    }, { scope: sectionRef });

    return (
        <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-[300px] h-[300px] bg-[#7c3aed]/5 blur-[100px] rounded-full pointer-events-none" />

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
                                    <motion.div
                                        key={sIdx}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="skill-card flex flex-col items-center justify-center p-4 h-[100px] bg-bg-card border border-border rounded-2xl group transition-colors duration-300 hover:border-accent/50 hover:shadow-[0_10px_30px_rgba(100,255,218,0.15)] cursor-pointer"
                                    >
                                        <span className="text-text-muted mb-2 group-hover:text-accent transition-colors duration-300">
                                            {SKILL_ICON_MAP[skill] || <Code className="w-7 h-7" />}
                                        </span>
                                        <span className="text-xs text-text-secondary font-medium text-center">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Infinite Marquee Strip */}
            <div className="w-full py-6 bg-bg-card border-y border-border overflow-hidden select-none">
                <div
                    className="flex items-center"
                    style={{
                        width: "max-content",
                        animation: "marquee-scroll 40s linear infinite",
                    }}
                >
                    {[...ALL_SKILLS, ...ALL_SKILLS].map((skill, idx) => (
                        <span key={idx} className="flex items-center shrink-0">
                            <span className="text-text-muted font-heading text-xl md:text-2xl uppercase tracking-wider font-bold whitespace-nowrap px-6 md:px-10">
                                {skill}
                            </span>
                            <span className="text-accent text-xl flex-shrink-0">|</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
