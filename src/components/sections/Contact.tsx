"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { Github, Linkedin, Mail, Phone, MapPin, Download, Instagram, MessageCircle } from "lucide-react";
import MagneticButton from "../MagneticButton";

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            ".contact-reveal",
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
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
                        <p className="font-mono text-accent text-sm md:text-base tracking-[3px] uppercase mb-4">07. What&apos;s Next?</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-text-primary mb-6">
                            Get In Touch
                        </h2>
                        <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                            Ready to bring your ideas to life? Let&apos;s connect and discuss how we can work together.
                        </p>
                    </div>

                    {/* Contact Cards — Email, Phone, WhatsApp, LinkedIn */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
                        <a href="mailto:harshitnamdev86@gmail.com" className="contact-reveal group bg-bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <Mail className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="text-text-primary font-heading font-bold text-sm">Email</h3>
                            <p className="text-text-muted text-xs font-mono">harshitnamdev86@gmail.com</p>
                        </a>

                        <a href="tel:+917987251569" className="contact-reveal group bg-bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <Phone className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="text-text-primary font-heading font-bold text-sm">Phone</h3>
                            <p className="text-text-muted text-xs font-mono">+91 798 725 1569</p>
                        </a>

                        <a href="https://wa.me/917987251569" target="_blank" rel="noopener noreferrer" className="contact-reveal group bg-bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-[#25D366]/50 hover:shadow-[0_0_30px_rgba(37,211,102,0.1)] transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                            </div>
                            <h3 className="text-text-primary font-heading font-bold text-sm">WhatsApp</h3>
                            <p className="text-text-muted text-xs font-mono">Message me</p>
                        </a>

                        <a href="https://linkedin.com/in/harshit-namdev" target="_blank" rel="noopener noreferrer" className="contact-reveal group bg-bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-[#0A66C2]/50 hover:shadow-[0_0_30px_rgba(10,102,194,0.1)] transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                            </div>
                            <h3 className="text-text-primary font-heading font-bold text-sm">LinkedIn</h3>
                            <p className="text-text-muted text-xs font-mono">Connect with me</p>
                        </a>
                    </div>

                    {/* Social Row — Instagram, GitHub */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12 contact-reveal">
                        <a href="https://instagram.com/harshit_namdev_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-card border border-border text-text-muted text-sm hover:text-[#E4405F] hover:border-[#E4405F]/50 transition-all">
                            <Instagram size={16} /> Instagram
                        </a>
                        <a href="https://github.com/harshit-namdev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-card border border-border text-text-muted text-sm hover:text-accent hover:border-accent/50 transition-all">
                            <Github size={16} /> GitHub
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 contact-reveal">
                        <MagneticButton>
                            <a href="mailto:harshitnamdev86@gmail.com" className="group flex items-center justify-center gap-2 bg-accent text-bg-primary px-10 py-4 rounded-full font-semibold hover:brightness-110 shadow-[0_10px_30px_rgba(100,255,218,0.2)] transition-all duration-300">
                                Say Hello 👋
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href="/resume/soc gen/Harshit Namdev Resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 border border-accent text-accent px-10 py-4 rounded-full font-semibold hover:bg-accent-subtle transition-all duration-300">
                                <Download size={18} /> Download Resume
                            </a>
                        </MagneticButton>
                    </div>
                </div>
            </section>

            {/* Footer — SyncNox Style */}
            <footer className="border-t border-border bg-[#0a0a0a] pt-16 pb-0 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    {/* 4-column grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                        {/* Brand */}
                        <div>
                            <h3 className="text-xl font-heading font-extrabold text-text-primary mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                                HARSHIT NAMDEV
                            </h3>
                            <p className="text-text-muted text-sm leading-relaxed mt-4">
                                Cybersecurity professional specializing in penetration testing, web security, and ethical hacking.
                            </p>
                            {/* Social icons */}
                            <div className="flex gap-3 mt-6">
                                <a href="https://linkedin.com/in/harshit-namdev" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-all">
                                    <Linkedin size={15} />
                                </a>
                                <a href="https://instagram.com/harshit_namdev_" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-text-muted hover:text-[#E4405F] hover:border-[#E4405F]/50 transition-all">
                                    <Instagram size={15} />
                                </a>
                                <a href="mailto:harshitnamdev86@gmail.com" className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-all">
                                    <Mail size={15} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-text-primary font-heading font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {["Home", "About", "Skills", "Projects", "Experience", "Blog", "Contact"].map((link) => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase()}`} className="text-text-muted text-sm hover:text-accent transition-colors flex items-center gap-2">
                                            <span className="text-accent text-[8px]">▸</span> {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-text-primary font-heading font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
                            <ul className="space-y-3">
                                {["Penetration Testing", "Web Security Audits", "Security Consulting", "Vulnerability Assessment", "Ethical Hacking"].map((service) => (
                                    <li key={service} className="text-text-muted text-sm">{service}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h4 className="text-text-primary font-heading font-bold text-sm uppercase tracking-wider mb-6">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-text-muted text-sm">
                                    <Mail size={14} className="text-accent shrink-0 mt-0.5" />
                                    harshitnamdev86@gmail.com
                                </li>
                                <li className="flex items-start gap-3 text-text-muted text-sm">
                                    <Phone size={14} className="text-accent shrink-0 mt-0.5" />
                                    +91 798 725 1569
                                </li>
                                <li className="flex items-start gap-3 text-text-muted text-sm">
                                    <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                                    Bhopal, MP, India
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-text-dim text-xs">© 2025 HARSHIT NAMDEV. All rights reserved.</p>
                        <p className="text-text-dim text-xs">Designed & Developed by Harshit</p>
                    </div>
                </div>

                {/* Large watermark text — SyncNox style */}
                <div className="relative w-full overflow-hidden pointer-events-none select-none" style={{ marginTop: '-20px' }}>
                    <h2 className="text-[10vw] md:text-[8vw] font-heading font-black text-[#ffffff]/[0.03] uppercase leading-none tracking-[0.02em] text-center whitespace-nowrap pb-4">
                        HARSHIT NAMDEV
                    </h2>
                </div>
            </footer>
        </>
    );
}
