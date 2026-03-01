"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { SectionHeading } from "../SectionHeading";

const EXPERIENCE_DATA = [
    {
        date: "Mar 2025 — Apr 2025",
        role: "IT/Infrastructure Support & Web Security Support",
        company: "Daily News 24",
        description: "Assisted in diagnosing performance degradation and service interruptions on production websites during DDoS incidents. Updated Cloudflare configurations (WAF rules & filters) to block malicious patterns (reduced by 94%) and stabilize uptime. Used Wireshark/log checks to isolate anomalies.",
        tech: ["Wireshark", "Cloudflare WAF", "Incident Response"],
    },
    {
        date: "Dec 2025",
        role: "Technical & Security Operations Support",
        company: "Confidential Government Project",
        description: "Investigated email routing issue by validating DNS delegation and MX record paths. Corrected nameserver entries and validated service recovery. Created RCA summary and configuration notes to avoid recurrence and improve reliability.",
        tech: ["DNS Records", "nslookup", "dig", "WHOIS"],
    },
    {
        date: "2024",
        role: "Web Developer Intern",
        company: "HMJ Fire Safety Services",
        description: "Designed and developed the official company website with a focus on responsive design and user experience. Enforced front-end security basics and safe input handling.",
        tech: ["HTML/CSS/JS", "Responsive Design", "Frontend Security"],
    },
    {
        date: "2023",
        role: "Cyber Security Virtual Experience Program",
        company: "Deloitte, Forage",
        description: "Completed a hands-on virtual job simulation in cyber security. Gained practical experience in identifying and responding to security threats, enhancing skills in threat analysis.",
        tech: ["Threat Analysis", "Security Audits"],
    },
];

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Draw the vertical line on scroll
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

        // Reveal each timeline entry
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
                                    <div className={`ml-16 md:ml-0 md:w-5/12 bg-bg-card border border-border p-8 rounded-2xl group hover:-translate-y-2 hover:border-border-accent hover:shadow-[0_15px_40px_rgba(0,0,0,0.2),_0_0_20px_var(--accent-glow)] transition-all duration-400 ${isEven ? 'md:mr-8 text-left' : 'md:ml-8 text-left'}`}>
                                        <div className="font-mono text-xs md:text-sm text-accent mb-3">{item.date}</div>
                                        <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">{item.role}</h3>
                                        <h4 className="text-base text-text-secondary font-medium mb-4">{item.company}</h4>

                                        <p className="text-text-muted text-sm leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-text-dim">
                                            {item.tech.map((t, i) => <li key={i} className="group-hover:text-text-secondary transition-colors">{t}</li>)}
                                        </ul>
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
