"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroName() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate dash letters (draw stroke)
        gsap.to(".hero-dash-path", {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.15,
            delay: 0.3,
        });

        // Animate spin letter - rotate continuously then stop
        const spinTl = gsap.timeline({ repeat: 2, repeatDelay: 1, delay: 0.5 });
        spinTl.to(".hero-spin-path", {
            rotation: 360,
            transformOrigin: "50% 50%",
            duration: 0.8,
            ease: "power1.inOut",
        }).to(".hero-spin-path", {
            rotation: 0,
            duration: 0.4,
            ease: "back.out(2)",
        });

        // Float effect on all letters
        gsap.to(".hero-name-letter", {
            y: -6,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.1,
            delay: 2,
        });
    }, []);

    return (
        <div ref={containerRef} className="flex flex-wrap gap-0 items-center mb-4">
            {/* Hidden SVG defs - must be outside viewBox-less SVGs */}
            <svg height="0" width="0" viewBox="0 0 64 64" className="absolute pointer-events-none">
                <defs>
                    <linearGradient id="hn-gradient1" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#973BED" />
                        <stop stopColor="#007CFF" offset="1" />
                    </linearGradient>
                    <linearGradient id="hn-gradient2" x1="0" y1="64" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFC800" />
                        <stop stopColor="#FF00FF" offset="1" />
                        <animateTransform
                            attributeName="gradientTransform"
                            type="rotate"
                            values="0 32 32;-270 32 32;-540 32 32;-810 32 32;-1080 32 32"
                            keyTimes="0;0.25;0.5;0.75;1"
                            dur="8s"
                            repeatCount="indefinite"
                        />
                    </linearGradient>
                    <linearGradient id="hn-gradient3" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00E0ED" />
                        <stop stopColor="#00DA72" offset="1" />
                    </linearGradient>
                </defs>
            </svg>

            {/* H */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-14 md:h-14 hero-name-letter">
                <path
                    strokeLinejoin="round" strokeLinecap="round" strokeWidth="8"
                    stroke="url(#hn-gradient1)" fill="none"
                    d="M16 12 L16 52 M48 12 L48 52 M16 32 L48 32"
                    className="hero-dash-path"
                    pathLength="360"
                    style={{ strokeDasharray: 360, strokeDashoffset: 360 }}
                />
            </svg>

            {/* A */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-14 md:h-14 hero-name-letter">
                <path
                    strokeLinejoin="round" strokeLinecap="round" strokeWidth="8"
                    stroke="url(#hn-gradient2)" fill="none"
                    d="M32 12 L12 52 L20 52 L28 36 L36 36 L44 52 L52 52 Z M24 40 L40 40"
                    className="hero-spin-path"
                    pathLength="360"
                />
            </svg>

            {/* R */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-14 md:h-14 hero-name-letter">
                <path
                    strokeLinejoin="round" strokeLinecap="round" strokeWidth="8"
                    stroke="url(#hn-gradient3)" fill="none"
                    d="M16 12 L16 52 M16 12 L40 12 C48 12 48 32 40 32 L16 32 M40 32 L52 52"
                    className="hero-dash-path"
                    pathLength="360"
                    style={{ strokeDasharray: 360, strokeDashoffset: 360 }}
                />
            </svg>

            {/* S */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-14 md:h-14 hero-name-letter">
                <path
                    strokeLinejoin="round" strokeLinecap="round" strokeWidth="8"
                    stroke="url(#hn-gradient1)" fill="none"
                    d="M48 16 C48 8 40 8 32 8 C24 8 16 8 16 16 C16 24 24 28 32 32 C40 36 48 40 48 48 C48 56 40 56 32 56 C24 56 16 56 16 48"
                    className="hero-dash-path"
                    pathLength="360"
                    style={{ strokeDasharray: 360, strokeDashoffset: 360 }}
                />
            </svg>

            {/* H */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-14 md:h-14 hero-name-letter">
                <path
                    strokeLinejoin="round" strokeLinecap="round" strokeWidth="8"
                    stroke="url(#hn-gradient2)" fill="none"
                    d="M16 12 L16 52 M48 12 L48 52 M16 32 L48 32"
                    className="hero-spin-path"
                    pathLength="360"
                />
            </svg>

            {/* I */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-14 md:h-14 hero-name-letter">
                <path
                    strokeLinejoin="round" strokeLinecap="round" strokeWidth="8"
                    stroke="url(#hn-gradient3)" fill="none"
                    d="M32 12 L32 52 M20 12 L44 12 M20 52 L44 52"
                    className="hero-dash-path"
                    pathLength="360"
                    style={{ strokeDasharray: 360, strokeDashoffset: 360 }}
                />
            </svg>

            {/* T */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-14 md:h-14 hero-name-letter">
                <path
                    strokeLinejoin="round" strokeLinecap="round" strokeWidth="8"
                    stroke="url(#hn-gradient1)" fill="none"
                    d="M16 12 L48 12 M32 12 L32 52"
                    className="hero-dash-path"
                    pathLength="360"
                    style={{ strokeDasharray: 360, strokeDashoffset: 360 }}
                />
            </svg>

            <span className="sr-only">HARSHIT</span>
        </div>
    );
}
