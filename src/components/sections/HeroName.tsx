"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function HeroName() {
    useEffect(() => {
        const dashPaths = document.querySelectorAll(".hn-dash");
        const spinPaths = document.querySelectorAll(".hn-spin");
        const allPaths = document.querySelectorAll(".hn-dash, .hn-spin");
        const letters = document.querySelectorAll(".hero-name-letter");

        // Initial: strokes hidden
        allPaths.forEach((path) => {
            const el = path as SVGPathElement;
            el.style.strokeDasharray = "360";
            el.style.strokeDashoffset = "360";
        });

        // Looping timeline: draw-in → jumble → hold → draw-out → repeat
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });

        // Phase 1: DRAW IN — strokes animate from 360 to 0 (letters form)
        tl.to(dashPaths, {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: "power2.inOut",
            stagger: 0.08,
        }, 0);
        tl.to(spinPaths, {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: "power2.inOut",
            stagger: 0.08,
        }, 0.04);

        // Phase 2: Jumble/rotate letters while visible
        tl.to(letters, {
            rotation: () => gsap.utils.random(-12, 12),
            y: () => gsap.utils.random(-6, 6),
            scale: () => gsap.utils.random(0.92, 1.08),
            duration: 0.35,
            ease: "power2.out",
            stagger: 0.04,
        }, "+=0.2");

        // Settle back
        tl.to(letters, {
            rotation: 0,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.03,
        }, "+=0.1");

        // Phase 3: Hold (0.6s)
        tl.to({}, { duration: 0.6 });

        // Phase 4: DRAW OUT — mirror of draw-in (strokes animate from 0 to -360)
        tl.to(letters, {
            rotation: () => gsap.utils.random(-15, 15),
            y: () => gsap.utils.random(-8, 8),
            duration: 0.25,
            ease: "power1.in",
            stagger: { each: 0.04, from: "end" },
        });
        tl.to(dashPaths, {
            strokeDashoffset: -360,
            duration: 1.2,
            ease: "power2.inOut",
            stagger: { each: 0.08, from: "end" },
        }, "<");
        tl.to(spinPaths, {
            strokeDashoffset: -360,
            duration: 1.2,
            ease: "power2.inOut",
            stagger: { each: 0.08, from: "end" },
        }, "<0.04");

        // Phase 5: Reset for seamless loop
        tl.set(allPaths, { strokeDashoffset: 360 });
        tl.set(letters, { rotation: 0, y: 0, scale: 1 });

    }, []);

    return (
        <div className="flex flex-wrap gap-0 items-center mb-4">
            <svg height="0" width="0" viewBox="0 0 64 64" className="absolute pointer-events-none">
                <defs>
                    <linearGradient id="hn-gradient1" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#973BED" />
                        <stop stopColor="#007CFF" offset="1" />
                    </linearGradient>
                    <linearGradient id="hn-gradient2" x1="0" y1="64" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFC800" />
                        <stop stopColor="#FF00FF" offset="1" />
                        <animateTransform attributeName="gradientTransform" type="rotate"
                            values="0 32 32;-270 32 32;-540 32 32;-810 32 32;-1080 32 32"
                            keyTimes="0;0.25;0.5;0.75;1" dur="8s" repeatCount="indefinite" />
                    </linearGradient>
                    <linearGradient id="hn-gradient3" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00E0ED" />
                        <stop stopColor="#00DA72" offset="1" />
                    </linearGradient>
                </defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 hero-name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#hn-gradient1)" fill="none" d="M16 12 L16 52 M48 12 L48 52 M16 32 L48 32" className="hn-dash" pathLength="360" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 hero-name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#hn-gradient2)" fill="none" d="M32 12 L12 52 L20 52 L28 36 L36 36 L44 52 L52 52 Z M24 40 L40 40" className="hn-spin" pathLength="360" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 hero-name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#hn-gradient3)" fill="none" d="M16 12 L16 52 M16 12 L40 12 C48 12 48 32 40 32 L16 32 M40 32 L52 52" className="hn-dash" pathLength="360" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 hero-name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#hn-gradient1)" fill="none" d="M48 16 C48 8 40 8 32 8 C24 8 16 8 16 16 C16 24 24 28 32 32 C40 36 48 40 48 48 C48 56 40 56 32 56 C24 56 16 56 16 48" className="hn-dash" pathLength="360" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 hero-name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#hn-gradient2)" fill="none" d="M16 12 L16 52 M48 12 L48 52 M16 32 L48 32" className="hn-spin" pathLength="360" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 hero-name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#hn-gradient3)" fill="none" d="M32 12 L32 52 M20 12 L44 12 M20 52 L44 52" className="hn-dash" pathLength="360" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-10 h-10 md:w-16 md:h-16 hero-name-letter">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#hn-gradient1)" fill="none" d="M16 12 L48 12 M32 12 L32 52" className="hn-dash" pathLength="360" />
            </svg>

            <span className="sr-only">HARSHIT</span>
        </div>
    );
}
