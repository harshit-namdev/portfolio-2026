"use client";

import { useRef } from "react";
import Image from "next/image";
import { Github, ExternalLink, ShieldCheck, Cloud, Search, Shield, FlaskConical, Radar } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";

const FEATURED_PROJECTS = [
    {
        title: "StagnoLab",
        description: "Developing a secure data-hiding platform for images, docs, and pdf files. Features include drag & drop interface, password-protected encryption, and retrieval validation. Includes history tracking and advanced analysis for tamper detection.",
        tech: ["Flask", "Python", "Cryptography", "Steganography"],
        github: "https://github.com/harshit-namdev/StagnoLab",
        url: "https://stagno-lab.vercel.app",
        image: "/images/projects/stagno-lab-project.png",
        icon: <FlaskConical className="w-6 h-6" />,
        iconBg: "bg-[#7c3aed]/20",
        iconColor: "text-[#7c3aed]",
    },
    {
        title: "VulScan: Vulnerability & Network Scanner",
        description: "An application that enables users to identify security vulnerabilities, discover network hosts, and generate comprehensive reports about potential security issues. Scanned 50 systems in a classroom test; vulnerabilities identified on 48 machines with varied severity. Output included categorized reports for targeted patching.",
        tech: ["Python", "Nmap", "Network Security", "Vulnerability Assessment"],
        github: "https://github.com/harshit-namdev",
        url: "",
        image: "/images/projects/vulscan-project.jpg",
        icon: <Radar className="w-6 h-6" />,
        iconBg: "bg-[#F48120]/20",
        iconColor: "text-[#F48120]",
    },
    {
        title: "Anti-DDoS Tool for Websites",
        description: "Developed a comprehensive tool to enhance website protection by mitigating DDoS attacks and ensuring uninterrupted service. Uses rate limiting, IP filtering, traffic analysis, and automated response techniques to block malicious traffic.",
        tech: ["Bash", "Linux", "Traffic Analysis", "IP Filtering"],
        github: "https://github.com/harshit-namdev/storm-bloker-anti-ddos-tool",
        url: "",
        image: "/images/projects/antiddos-tool.png",
        icon: <Shield className="w-6 h-6" />,
        iconBg: "bg-accent/20",
        iconColor: "text-accent",
    }
];

const OTHER_PROJECTS = [
    {
        title: "PhishGuard Pro",
        description: "Detected suspicious redirects and malicious URLs using third-party reputation APIs. Designed alert prompts for suspicious redirects, certificate issues, and domains.",
        tech: ["JavaScript", "APIs", "Security"],
        github: "https://github.com/harshit-namdev",
        url: "",
        icon: <ShieldCheck size={36} className="text-accent stroke-1" />,
    },
    {
        title: "Cloudflare WAF Automator",
        description: "Scripted automated deployments of WAF rules for rapid DDoS response, filtering bad actors across multiple network scopes.",
        tech: ["Python", "Cloudflare API", "Automation"],
        github: "https://github.com/harshit-namdev",
        url: "",
        icon: <Cloud size={36} className="text-[#F48120] stroke-1" />,
    },
    {
        title: "DNS Delegation Monitor",
        description: "Tool to investigate email service outages caused by DNS failure and MX resolution errors. Traces name server paths to warn administrators.",
        tech: ["Bash", "dig", "nslookup", "Networking"],
        github: "https://github.com/harshit-namdev",
        url: "",
        icon: <Search size={36} className="text-[#7c3aed] stroke-1" />,
    }
];

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cards: HTMLElement[] = gsap.utils.toArray(".project-card");
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                }
            );
        });

        const archiveCards = gsap.utils.toArray(".archive-card");
        gsap.fromTo(
            archiveCards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".archive-grid",
                    start: "top 80%",
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <section id="projects" ref={sectionRef} className="py-24 md:py-32 relative">
            {/* Background glow */}
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#7c3aed]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading number="03." title="Featured Projects" />

                {/* Featured Project Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                    {FEATURED_PROJECTS.map((project, idx) => (
                        <div
                            key={idx}
                            className="project-card bg-bg-card border border-border rounded-2xl overflow-hidden group hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),_0_0_30px_var(--accent-glow)] transition-all duration-400"
                        >
                            {/* Image */}
                            <div className="relative aspect-video w-full overflow-hidden bg-bg-primary">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                {/* Header with icon */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-11 h-11 rounded-xl ${project.iconBg} flex items-center justify-center shrink-0 ${project.iconColor}`}>
                                        {project.icon}
                                    </div>
                                    <div>
                                        <p className="text-accent font-mono text-xs uppercase tracking-wider mb-1">Featured Project</p>
                                        <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary">{project.title}</h3>
                                    </div>
                                </div>

                                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-bg-primary border border-border text-text-dim text-xs font-mono group-hover:text-text-secondary group-hover:border-accent/20 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm">
                                            <Github size={18} /> Code
                                        </a>
                                    )}
                                    {project.url && (
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm">
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Projects */}
                <div className="mt-32">
                    <div className="flex flex-col items-center mb-12">
                        <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">Other Noteworthy Projects</h3>
                        <a href="https://github.com/harshit-namdev" className="text-accent font-mono text-sm hover:underline underline-offset-4 flex items-center gap-2">
                            View full archive <ExternalLink size={14} />
                        </a>
                    </div>

                    <div className="archive-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {OTHER_PROJECTS.map((project, idx) => (
                            <div
                                key={idx}
                                className="archive-card bg-bg-card border border-border p-8 rounded-2xl flex flex-col h-full group hover:-translate-y-2 hover:border-border-accent hover:shadow-[0_15px_40px_rgba(0,0,0,0.2),_0_0_20px_var(--accent-glow)] transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    {project.icon}
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.url && (
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h4>

                                <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-text-muted mt-auto">
                                    {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
