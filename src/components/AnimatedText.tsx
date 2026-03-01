"use client";

import { useRef } from "react";
import SplitType from "split-type";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";

export function AnimatedText({
    text,
    className = "",
    type = "words",
    delay = 0,
}: {
    text: string;
    className?: string;
    type?: "words" | "lines" | "chars";
    delay?: number;
}) {
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!textRef.current) return;

        // Split the text
        const splitText = new SplitType(textRef.current, { types: type });

        // Ensure we are targeting the right elements based on type
        let targetElements: HTMLElement[] | null = null;
        if (type === "words") targetElements = splitText.words;
        if (type === "lines") targetElements = splitText.lines;
        if (type === "chars") targetElements = splitText.chars;

        if (targetElements) {
            // Set initial styles for animation
            gsap.set(targetElements, { opacity: 0, y: type === "lines" ? 40 : 60 });
            gsap.set(textRef.current, { visibility: "visible" });

            // Animate
            gsap.to(targetElements, {
                opacity: 1,
                y: 0,
                duration: type === "lines" ? 0.6 : 0.8,
                stagger: type === "lines" ? 0.06 : 0.04,
                ease: type === "lines" ? "power2.out" : "power3.out",
                delay: delay,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: type === "lines" ? "top 85%" : "top 80%",
                },
            });
        }

        return () => {
            splitText.revert();
        };
    }, [text, type]);

    // Use visibility hidden initially to prevent FOUC (Flash of Unstyled Content) before GSAP takes over
    return (
        <div ref={textRef} className={`invisible ${className}`}>
            {text}
        </div>
    );
}
