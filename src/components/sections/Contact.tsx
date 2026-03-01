"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";

import MagneticButton from "../MagneticButton";
import { Check, Loader2 } from "lucide-react";

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset after a while
            setTimeout(() => setIsSuccess(false), 3000);
        }, 1500);
    };

    return (
        <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative min-h-[80vh] flex flex-col justify-center">

            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

            <div className="max-w-3xl mx-auto px-6 w-full relative z-10">
                <div className="text-center mb-16 contact-reveal">
                    <p className="font-mono text-accent text-sm md:text-base tracking-[3px] uppercase mb-4">05. What&apos;s Next?</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-text-primary mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        I&apos;m currently open to new opportunities, whether it&apos;s a full-time role, internship, or freelance project.
                        If you have a question or just want to connect, my inbox is always open!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto contact-reveal">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group">
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full bg-bg-card border border-border rounded-xl px-5 pt-7 pb-3 outline-none text-text-primary focus:border-accent focus:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 peer"
                                placeholder=" "
                            />
                            <label htmlFor="name" className="absolute left-5 top-5 text-text-muted text-sm transition-all duration-300 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
                                Your Name
                            </label>
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-bg-card border border-border rounded-xl px-5 pt-7 pb-3 outline-none text-text-primary focus:border-accent focus:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 peer"
                                placeholder=" "
                            />
                            <label htmlFor="email" className="absolute left-5 top-5 text-text-muted text-sm transition-all duration-300 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
                                Email Address
                            </label>
                        </div>
                    </div>

                    <div className="relative group">
                        <input
                            type="text"
                            id="subject"
                            required
                            className="w-full bg-bg-card border border-border rounded-xl px-5 pt-7 pb-3 outline-none text-text-primary focus:border-accent focus:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 peer"
                            placeholder=" "
                        />
                        <label htmlFor="subject" className="absolute left-5 top-5 text-text-muted text-sm transition-all duration-300 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
                            Subject
                        </label>
                    </div>

                    <div className="relative group">
                        <textarea
                            id="message"
                            required
                            rows={5}
                            className="w-full bg-bg-card border border-border rounded-xl px-5 pt-7 pb-3 outline-none text-text-primary focus:border-accent focus:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 peer resize-none"
                            placeholder=" "
                        ></textarea>
                        <label htmlFor="message" className="absolute left-5 top-5 text-text-muted text-sm transition-all duration-300 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
                            Your Message
                        </label>
                    </div>

                    <div className="flex justify-center pt-4">
                        <MagneticButton>
                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                className="flex items-center justify-center gap-2 bg-accent text-bg-primary px-10 py-4 rounded-full font-semibold hover:brightness-110 shadow-[0_10px_30px_rgba(100,255,218,0.2)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="animate-spin w-5 h-5" />
                                ) : isSuccess ? (
                                    <>
                                        <Check className="w-5 h-5" /> Sent Successfully
                                    </>
                                ) : (
                                    "Say Hello 👋"
                                )}
                            </button>
                        </MagneticButton>
                    </div>
                </form>
            </div>
        </section>
    );
}
