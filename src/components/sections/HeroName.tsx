"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";

export default function HeroName() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Dash animation for SVGs
        gsap.to(".dash", {
            strokeDashoffset: 0,
            duration: 2.5,
            ease: "power2.inOut",
            stagger: 0.15,
        });

        // Subtle float effect after drawing
        gsap.to(".name-letter", {
            y: -5,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.1,
            delay: 2.5,
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-wrap gap-1 md:gap-3 items-center mb-6 max-w-full">
            <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
                <defs>
                    <linearGradient id="grad-h1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="grad-r" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    <linearGradient id="grad-s" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="grad-h2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="grad-i" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="grad-t" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                </defs>
            </svg>

            {/* H */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#grad-h1)" fill="none" d="M16 12 L16 52 M48 12 L48 52 M16 32 L48 32" className="dash" pathLength="360" style={{ strokeDasharray: 360, strokeDashoffset: 360 }}></path>
            </svg>

            {/* A (Stylized like the image, left leg disconnected or similar layout) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#grad-a)" fill="none" d="M16 52 L32 16 L48 52 M24 38 L32 38" className="dash" pathLength="360" style={{ strokeDasharray: 360, strokeDashoffset: 360 }}></path>
            </svg>

            {/* R */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#grad-r)" fill="none" d="M16 52 L16 12 L36 12 A 12 12 0 0 1 36 36 L16 36 M30 36 L44 52" className="dash" pathLength="360" style={{ strokeDasharray: 360, strokeDashoffset: 360 }}></path>
            </svg>

            {/* S */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#grad-s)" fill="none" d="M46 20 A 12 12 0 0 0 16 26 C 16 40 46 32 46 44 A 12 12 0 0 1 18 50" className="dash" pathLength="360" style={{ strokeDasharray: 360, strokeDashoffset: 360 }}></path>
            </svg>

            {/* H */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#grad-h2)" fill="none" d="M16 12 L16 52 M48 12 L48 52 M16 32 L48 32" className="dash" pathLength="360" style={{ strokeDasharray: 360, strokeDashoffset: 360 }}></path>
            </svg>

            {/* I */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#grad-i)" fill="none" d="M32 12 L32 52 M20 12 L44 12 M20 52 L44 52" className="dash" pathLength="360" style={{ strokeDasharray: 360, strokeDashoffset: 360 }}></path>
            </svg>

            {/* T */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#grad-t)" fill="none" d="M16 12 L48 12 M32 12 L32 52" className="dash" pathLength="360" style={{ strokeDasharray: 360, strokeDashoffset: 360 }}></path>
            </svg>

            <span className="sr-only">HARSHIT</span>
        </div>
    );
}
