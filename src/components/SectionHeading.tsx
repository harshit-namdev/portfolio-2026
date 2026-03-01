"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";

export function SectionHeading({
    number,
    title,
}: {
    number: string;
    title: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const numberRef = useRef<HTMLSpanElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Number slides in from left
        gsap.fromTo(numberRef.current,
            { x: -30, opacity: 0 },
            {
                x: 0, opacity: 1, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: containerRef.current, start: "top 90%" },
            }
        );

        // Title letters reveal with stagger
        const spans = containerRef.current.querySelectorAll("[data-hchar]");
        if (spans.length > 0) {
            gsap.fromTo(spans,
                { opacity: 0, y: 30, rotateX: 60 },
                {
                    opacity: 1, y: 0, rotateX: 0,
                    duration: 0.4, ease: "back.out(1.2)", stagger: 0.02,
                    scrollTrigger: { trigger: containerRef.current, start: "top 90%" },
                }
            );
        }

        // Line grows from left
        gsap.fromTo(lineRef.current,
            { scaleX: 0 },
            {
                scaleX: 1, duration: 0.8, ease: "power3.out", delay: 0.2,
                scrollTrigger: { trigger: containerRef.current, start: "top 90%" },
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex items-center gap-4 mb-16 max-w-4xl mx-auto w-full group">
            <span
                ref={numberRef}
                className="text-accent font-mono text-xl md:text-2xl pt-2 opacity-0"
            >
                {number}
            </span>
            <h2
                ref={titleRef}
                className="text-text-primary text-3xl md:text-4xl lg:text-5xl font-heading font-bold"
                style={{ perspective: "600px" }}
            >
                {title.split("").map((char, i) => (
                    <span
                        key={i}
                        data-hchar
                        className="inline-block opacity-0"
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h2>
            <div
                ref={lineRef}
                className="h-[1px] bg-accent/30 flex-1 max-w-[300px] mt-2 origin-left scale-x-0"
            ></div>
        </div>
    );
}
