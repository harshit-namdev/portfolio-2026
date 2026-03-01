"use client";

import { useRef } from "react";
import Image from "next/image";
import { Github, ExternalLink, Folder } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";

const FEATURED_PROJECTS = [
    {
        title: "StagnoLab",
        description: "Developing a secure data-hiding platform for images, docs, and pdf files. Features include drag & drop interface, password-protected encryption, and retrieval validation. Includes history tracking and advanced analysis for tamper detection.",
        tech: ["Flask", "Python", "Cryptography", "Steganography"],
        github: "https://github.com/harshit-namdev",
        url: "https://harshitnamdev.netlify.app/",
        image: "/images/projects/stagnolab.webp",
    },
    {
        title: "VulScan: Vulnerability & Network Scanner",
        description: "An application enabling users to identify security vulnerabilities, discover network hosts, and generate comprehensive reports. Scanned 50 systems in a classroom test, identifying vulnerabilities on 48 machines to support targeted patching.",
        tech: ["Python", "PyQt5", "Nmap", "Network Security"],
        github: "https://github.com/harshit-namdev",
        url: "",
        image: "/images/projects/vulscan.webp",
    },
    {
        title: "Anti-DDoS Tool for Websites",
        description: "Developed a comprehensive tool to enhance website protection by mitigating DDoS attacks and ensuring uninterrupted service. Uses rate limiting, IP filtering, traffic analysis, and automated response techniques to block malicious traffic.",
        tech: ["Bash", "Linux", "Traffic Analysis", "IP Filtering"],
        github: "https://github.com/harshit-namdev/storm-bloker-anti-ddos-tool",
        url: "",
        image: "/images/projects/ddos.webp",
    }
];

const OTHER_PROJECTS = [
    {
        title: "PhishGuard Pro",
        description: "Detected suspicious redirects and malicious URLs using third-party reputation APIs. Designed alert prompts for suspicious redirects, certificate issues, and domains.",
        tech: ["JavaScript", "APIs", "Security"],
        github: "https://github.com/harshit-namdev",
        url: "",
    },
    // Placeholders for other potential projects
    {
        title: "Cloudflare WAF Automator",
        description: "Scripted automated deployments of WAF rules for rapid DDoS response, filtering bad actors across multiple network scopes.",
        tech: ["Python", "Cloudflare API", "Automation"],
        github: "https://github.com/harshit-namdev",
        url: "",
    },
    {
        title: "DNS Delegation Monitor",
        description: "Tool to investigate email service outages caused by DNS failure and MX resolution errors. Traces name server paths to warn administrators.",
        tech: ["Bash", "dig", "nslookup", "Networking"],
        github: "https://github.com/harshit-namdev",
        url: "",
    }
];

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Reveal Featured Projects
        const featuredBlocks = gsap.utils.toArray(".featured-project");
        featuredBlocks.forEach((block: any, i) => {
            const isOdd = i % 2 !== 0; // Check order for alternating entrance directions
            gsap.fromTo(
                block,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 80%",
                    },
                }
            );

            const imgContainer = block.querySelector(".project-img-container");
            if (imgContainer) {
                gsap.fromTo(
                    imgContainer,
                    { x: isOdd ? 50 : -50, scale: 0.95 },
                    {
                        x: 0,
                        scale: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: block,
                            start: "top 80%",
                        },
                    }
                );
            }
        });

        // Reveal Archive Cards
        const archiveCards = gsap.utils.toArray(".archive-card");
        gsap.fromTo(
            archiveCards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".archive-grid",
                    start: "top 85%",
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <section id="projects" ref={sectionRef} className="py-24 md:py-32 relative">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading number="03." title="Featured Projects" />

                <div className="mt-16 space-y-24 md:space-y-32">
                    {FEATURED_PROJECTS.map((project, idx) => {
                        const isOdd = idx % 2 !== 0;
                        return (
                            <div key={idx} className={`featured-project relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center`}>

                                {/* Image Side */}
                                <div
                                    className={`project-img-container relative md:col-span-7 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl group ${isOdd ? "md:order-2 md:col-start-6" : "md:col-start-1"
                                        }`}
                                >
                                    <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
                                    <div className="w-full h-full bg-bg-card flex items-center justify-center relative grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden cursor-pointer" onClick={() => project.url ? window.open(project.url, "_blank") : project.github ? window.open(project.github, "_blank") : null}>
                                        {/* Try to load Next Image, fallback to SVG if missing */}
                                        <span className="sr-only">Project Image for {project.title}</span>
                                        <div className="absolute inset-0 z-0 bg-bg-elevated flex items-center justify-center">
                                            <span className="text-text-dim text-sm font-mono">Image coming soon</span>
                                        </div>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
                                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                        />
                                    </div>
                                </div>

                                {/* Text Side */}
                                <div
                                    className={`relative md:col-span-6 z-20 ${isOdd ? "md:col-start-1 md:text-left" : "md:col-start-7 md:text-right"
                                        }`}
                                >
                                    <p className="text-accent font-mono text-sm uppercase tracking-wider mb-2">Featured Project</p>
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-6 hover:text-accent transition-colors cursor-pointer" onClick={() => project.url ? window.open(project.url, "_blank") : project.github ? window.open(project.github, "_blank") : null}>
                                        {project.title}
                                    </h3>

                                    <div className="bg-bg-card border border-border p-6 rounded-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] mb-6 hover:border-border-accent transition-colors duration-300">
                                        <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <ul className={`flex flex-wrap gap-4 font-mono text-xs text-text-muted mb-6 ${isOdd ? "justify-start" : "justify-start md:justify-end"}`}>
                                        {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                                    </ul>

                                    <div className={`flex items-center gap-4 ${isOdd ? "justify-start" : "justify-start md:justify-end"}`}>
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="GitHub Link">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.url && (
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="External Link">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>
                        );
                    })}
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
                                    <Folder size={40} className="text-accent stroke-1" />
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
                                    <a href={project.url || project.github} target="_blank" rel="noopener noreferrer" className="relative inset-0 inline-block focus:outline-none focus:ring-2 focus:ring-accent rounded">
                                        {project.title}
                                    </a>
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
