"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@/hooks/useGSAP";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);
    const line1Ref = useRef<HTMLParagraphElement>(null);
    const line2Ref = useRef<HTMLParagraphElement>(null);
    const line3Ref = useRef<HTMLParagraphElement>(null);
    const line4Ref = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => setIsLoading(false), 500);
            },
        });

        // Initialize terminal text as hidden
        gsap.set([line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current], {
            opacity: 0,
            display: "none"
        });

        // Hacker terminal sequence
        tl.to(terminalRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)"
        })
            .set(line1Ref.current, { display: "block", opacity: 1 }, "+=0.3")
            .fromTo(line1Ref.current, { width: 0 }, { width: "100%", duration: 0.8, ease: "steps(20)" })

            .set(line2Ref.current, { display: "block", opacity: 1 }, "+=0.5")
            .fromTo(line2Ref.current, { opacity: 0 }, { opacity: 1, duration: 0.1 })

            .set(line3Ref.current, { display: "block", opacity: 1 }, "+=0.6")
            .fromTo(line3Ref.current, { opacity: 0 }, { opacity: 1, duration: 0.1 })

            .set(line4Ref.current, { display: "block", opacity: 1 }, "+=0.4")
            .fromTo(line4Ref.current, { opacity: 0 }, { opacity: 1, duration: 0.1 })

            // Optional glitch effect at the end
            .to(terminalRef.current, {
                x: () => Math.random() * 10 - 5,
                y: () => Math.random() * 10 - 5,
                duration: 0.05,
                repeat: 5,
                yoyo: true,
                ease: "none"
            }, "+=0.5")

            // Exit
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
            }, "+=0.5");

    }, { scope: containerRef });

    if (!isLoading) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
        >
            <div
                ref={terminalRef}
                className="w-[90%] max-w-[500px] border border-[#1a1a1a] rounded-xl bg-[#0a0a0a] shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden opacity-0 scale-95"
            >
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#1a1a1a] bg-[#111]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-[#444] text-xs font-mono font-medium tracking-widest">SITE ACCESS</div>
                    <div className="w-12"></div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm md:text-base flex flex-col gap-4">
                    <p ref={line1Ref} className="text-[#3b82f6] whitespace-nowrap overflow-hidden">
                        root@security:~$ <span className="text-[#64ffda]">accessing_site...</span>
                    </p>
                    <p ref={line2Ref} className="text-red-500 font-bold tracking-wider">
                        SITE HACKED ...
                    </p>
                    <p ref={line3Ref} className="text-red-500 tracking-wider">
                        ACCESS COMPLETE <span className="text-green-500">✓</span>
                    </p>
                    <p ref={line4Ref} className="text-[#1a1a1a] font-bold textShadow-matrix tracking-widest mt-2 terminal-glitch relative">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">SITE UNLOCKED 🔓</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
