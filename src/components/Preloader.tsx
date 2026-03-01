"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@/hooks/useGSAP";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsLoading(false);
            },
        });

        // Step 1: Initials pulse and line expansion
        tl.to(textRef.current, {
            scale: 1.1,
            duration: 1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
        })
            .to(
                progressRef.current,
                {
                    width: "200px",
                    duration: 2,
                    ease: "power2.inOut",
                },
                "<"
            )
            // Step 2: Exit animations
            .to(
                [textRef.current, progressRef.current],
                {
                    y: -50,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.in",
                },
                "+=0.2"
            )
            .to(containerRef.current, {
                yPercent: -100,
                duration: 0.8,
                ease: "power4.inOut",
            });
    }, { scope: containerRef }); // Use scope for better clean up

    if (!isLoading) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
        >
            <h1
                ref={textRef}
                className="text-4xl md:text-5xl font-heading font-bold text-accent tracking-widest mb-6"
            >
                HN
            </h1>
            <div className="h-[2px] w-0 bg-accent relative overflow-hidden rounded-full">
                <div
                    ref={progressRef}
                    className="absolute inset-0 bg-white opacity-50 shadow-[0_0_10px_var(--accent)]"
                />
            </div>
        </div>
    );
}
