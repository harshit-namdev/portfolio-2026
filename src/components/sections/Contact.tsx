"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";
import MagneticButton from "../MagneticButton";

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            ".contact-reveal",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <>
            {/* Contact Section */}
            <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none z-0" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 contact-reveal">
                        <p className="font-mono text-accent text-sm md:text-base tracking-[3px] uppercase mb-4">05. What&apos;s Next?</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-text-primary mb-6">
                            Get In Touch
                        </h2>
                        <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                            Ready to bring your ideas to life? Let&apos;s connect and discuss how we can work together.
                        </p>
                    </div>

                    {/* Contact Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                        {/* Email */}
                        <a href="mailto:harshitnamdev86@gmail.com" className="contact-reveal group bg-bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <Mail className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-text-primary font-heading font-bold text-lg">Email</h3>
                            <p className="text-text-muted text-sm font-mono">harshitnamdev86@gmail.com</p>
                        </a>

                        {/* Phone */}
                        <a href="tel:+917987251569" className="contact-reveal group bg-bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <Phone className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-text-primary font-heading font-bold text-lg">Phone</h3>
                            <p className="text-text-muted text-sm font-mono">+91 798 725 1569</p>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/harshit-namdev" target="_blank" rel="noopener noreferrer" className="contact-reveal group bg-bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <Linkedin className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-text-primary font-heading font-bold text-lg">LinkedIn</h3>
                            <p className="text-text-muted text-sm font-mono">Connect with me</p>
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 contact-reveal">
                        <MagneticButton>
                            <a
                                href="mailto:harshitnamdev86@gmail.com"
                                className="group flex items-center justify-center gap-2 bg-accent text-bg-primary px-10 py-4 rounded-full font-semibold hover:brightness-110 shadow-[0_10px_30px_rgba(100,255,218,0.2)] transition-all duration-300"
                            >
                                Say Hello 👋
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a
                                href="/resume/gen web/Harshit Namdev Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2 border border-accent text-accent px-10 py-4 rounded-full font-semibold hover:bg-accent-subtle transition-all duration-300"
                            >
                                <Download size={18} />
                                Download Resume
                            </a>
                        </MagneticButton>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border bg-bg-secondary py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        {/* Brand */}
                        <div>
                            <h3 className="text-2xl font-heading font-extrabold text-text-primary mb-3">HARSHIT NAMDEV</h3>
                            <p className="text-text-muted text-sm mb-4">Cybersecurity Professional</p>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Passionate about protecting digital assets and creating secure systems. Specializing in penetration testing, web security, and ethical hacking.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-text-primary font-heading font-bold text-lg mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase()}`} className="text-text-muted text-sm hover:text-accent transition-colors flex items-center gap-2">
                                            <span className="text-accent text-xs">▹</span> {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-text-primary font-heading font-bold text-lg mb-4">Contact Info</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-text-muted text-sm">
                                    <Mail size={16} className="text-accent shrink-0" />
                                    harshitnamdev86@gmail.com
                                </li>
                                <li className="flex items-center gap-3 text-text-muted text-sm">
                                    <Phone size={16} className="text-accent shrink-0" />
                                    +91 798 725 1569
                                </li>
                                <li className="flex items-center gap-3 text-text-muted text-sm">
                                    <MapPin size={16} className="text-accent shrink-0" />
                                    Bhopal, MP, India
                                </li>
                            </ul>

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-6">
                                <a href="https://github.com/harshit-namdev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-all">
                                    <Github size={18} />
                                </a>
                                <a href="https://linkedin.com/in/harshit-namdev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-all">
                                    <Linkedin size={18} />
                                </a>
                                <a href="mailto:harshitnamdev86@gmail.com" className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-all">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-text-dim text-xs font-mono">
                            © 2025 HARSHIT NAMDEV. All rights reserved.
                        </p>
                        <p className="text-text-dim text-xs font-mono">
                            Designed & Developed by Harshit
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
