"use client";

import { AnimatedText } from "./AnimatedText";

export function SectionHeading({
    number,
    title,
}: {
    number: string;
    title: string;
}) {
    return (
        <div className="flex items-center gap-4 mb-16 max-w-4xl mx-auto w-full group">
            <AnimatedText
                text={number}
                type="words"
                className="text-accent font-mono text-xl md:text-2xl pt-2"
            />
            <AnimatedText
                text={title}
                type="words"
                className="text-text-primary text-3xl md:text-4xl lg:text-5xl font-heading font-bold"
                delay={0.1}
            />
            <div className="h-[1px] bg-border flex-1 max-w-[300px] mt-2 group-hover:bg-accent-subtle transition-colors duration-500"></div>
        </div>
    );
}
