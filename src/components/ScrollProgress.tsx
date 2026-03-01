"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";

export default function ScrollProgress() {
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(progressRef.current, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.2, // Small scrub for smooth catching up
            },
        });
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] origin-left bg-gradient-1 scale-x-0 pointer-events-none" ref={progressRef}>
            <div className="w-full h-full bg-white opacity-20 blur-[2px]"></div>
        </div>
    );
}
