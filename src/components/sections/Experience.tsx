"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { SectionHeading } from "../SectionHeading";
import { Newspaper, Building2, Globe, Award } from "lucide-react";

const EXPERIENCE_DATA = [
    {
        date: "Dec 2025",
        role: "Technical & Security Operations Support",
        company: "Confidential Government Project",
        icon: <Building2 className="w-6 h-6" />,
        iconBg: "bg-accent/20",
        iconColor: "text-accent",
        description: "Investigated email routing issue by validating DNS delegation and MX record paths.",
        highlights: [
            "Corrected nameserver entries and validated service recovery",
            "Created RCA summary and configuration notes to avoid recurrence",
        ],
        tech: ["DNS Records", "nslookup", "dig", "WHOIS"],
    },
    {
        date: "Mar 2025 — Apr 2025",
        role: "IT/Infrastructure Support & Web Security Support",
        company: "Daily News 24",
        icon: <Newspaper className="w-6 h-6" />,
        iconBg: "bg-[#7c3aed]/20",
        iconColor: "text-[#7c3aed]",
        description: "Responded to an active DDoS attack and implemented 86 custom firewall rules via Cloudflare to mitigate the threat and protect the platform.",
        highlights: [
            "Improved incident response and hardened overall server configuration",
            "Successfully prevented further attacks and improved platform resilience",
            "Implemented comprehensive security measures for ongoing protection",
        ],
        tech: ["Wireshark", "Cloudflare WAF", "Incident Response"],
    },
    {
        date: "2024",
        role: "Web Developer Intern",
        company: "HMJ Fire Safety Services",
        icon: <Globe className="w-6 h-6" />,
        iconBg: "bg-[#F48120]/20",
        iconColor: "text-[#F48120]",
        description: "Designed and developed the official company website with a focus on responsive design and user experience.",
        highlights: [
            "Enforced front-end security basics and safe input handling",
            "Optimized website performance and cross-browser compatibility",
        ],
        tech: ["HTML/CSS/JS", "Responsive Design", "Frontend Security"],
    },
    {
        date: "2023",
        role: "Cyber Security Virtual Experience Program",
        company: "Deloitte, Forage",
        icon: <Award className="w-6 h-6" />,
        iconBg: "bg-[#86BC25]/20",
        iconColor: "text-[#86BC25]",
        description: "Completed a hands-on virtual job simulation in cyber security.",
        highlights: [
            "Gained practical experience in identifying and responding to security threats",
            "Enhanced skills in threat analysis and security audits",
        ],
        tech: ["Threat Analysis", "Security Audits"],
    },
];

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            }
        );

        const entries: HTMLElement[] = gsap.utils.toArray(".timeline-entry");
        entries.forEach((entry, i) => {
            const isOdd = i % 2 !== 0;
            gsap.fromTo(
                entry,
                { x: isOdd ? 50 : -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: entry,
                        start: "top 85%",
                    },
                }
            );
        });
    }, { scope: sectionRef });

    return (
        <section id="experience" ref={sectionRef} className="py-24 md:py-32 relative">
            <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#7c3aed]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6">
                <SectionHeading number="04." title="Experience" />

                <div className="relative mt-20">
                    {/* Central Line */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border origin-top transform md:-translate-x-1/2">
                        <div ref={lineRef} className="w-full h-full bg-accent origin-top scale-y-0 shadow-[0_0_15px_var(--accent-glow)]"></div>
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {EXPERIENCE_DATA.map((item, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className={`timeline-entry relative flex flex-col md:flex-row items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-[30px] md:left-1/2 w-4 h-4 rounded-full bg-accent transform -translate-x-[7px] md:-translate-x-1/2 mt-6 shadow-[0_0_10px_var(--accent)] z-10 border-4 border-bg-primary"></div>

                                    {/* Content Card */}
                                    <div className={`ml-16 md:ml-0 md:w-5/12 bg-bg-card border border-border rounded-2xl group hover:-translate-y-2 hover:border-border-accent hover:shadow-[0_15px_40px_rgba(0,0,0,0.2),_0_0_20px_var(--accent-glow)] transition-all duration-400 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>

                                        {/* Header with icon */}
                                        <div className="p-6 pb-0 flex items-start gap-4">
                                            <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 ${item.iconColor}`}>
                                                {item.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="text-lg md:text-xl font-bold text-text-primary leading-tight">{item.role}</h3>
                                                <h4 className="text-sm text-accent font-medium mt-1">{item.company}</h4>
                                                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono">{item.date}</span>
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="p-6 pt-4">
                                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                                {item.description}
                                            </p>

                                            {/* Highlights */}
                                            <ul className="space-y-2 mb-5">
                                                {item.highlights.map((h, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-text-muted text-sm">
                                                        <span className="text-accent text-xs mt-1.5 shrink-0">●</span>
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Tech tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {item.tech.map((t, i) => (
                                                    <span key={i} className="px-3 py-1 rounded-full bg-bg-primary border border-border text-text-dim text-xs font-mono group-hover:text-text-secondary group-hover:border-accent/20 transition-colors">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
