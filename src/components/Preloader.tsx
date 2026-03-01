"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@/hooks/useGSAP";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);
    const matrixRef = useRef<HTMLDivElement>(null);
    const line1Ref = useRef<HTMLDivElement>(null);
    const line2Ref = useRef<HTMLDivElement>(null);
    const line3Ref = useRef<HTMLDivElement>(null);
    const line4Ref = useRef<HTMLDivElement>(null);
    const progressFillRef = useRef<HTMLDivElement>(null);

    // Matrix rain (client-side only)
    useEffect(() => {
        const matrixContainer = matrixRef.current;
        if (!matrixContainer) return;

        const characters = "01ABCDEF<>{}[]|\\/@#$%^&*!?";
        const columns = Math.floor(window.innerWidth / 22);

        for (let i = 0; i < columns; i++) {
            const col = document.createElement("div");
            col.style.cssText = `
                position: absolute;
                left: ${i * 22}px;
                top: 0;
                color: #4facfe;
                font-size: 13px;
                font-family: monospace;
                opacity: 0.5;
                animation: matrixFall ${2 + Math.random() * 3}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
                white-space: pre;
                line-height: 1.4;
            `;
            let text = "";
            for (let j = 0; j < 25; j++) {
                text += characters[Math.floor(Math.random() * characters.length)] + "\n";
            }
            col.textContent = text;
            matrixContainer.appendChild(col);
        }
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => setIsLoading(false), 300);
            },
        });

        // All terminal lines start hidden
        gsap.set([line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current], {
            opacity: 0,
        });
        gsap.set(progressFillRef.current, { width: "0%" });

        tl
            // Terminal appears
            .from(terminalRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
            })
            // Line 1 types in
            .to(line1Ref.current, { opacity: 1, duration: 0.1 }, "+=0.2")
            // Progress bar fills
            .to(progressFillRef.current, { width: "100%", duration: 1.8, ease: "power2.inOut" }, "<")
            // Line 2 appears
            .to(line2Ref.current, { opacity: 1, duration: 0.1 }, "+=0.3")
            // Line 3 appears
            .to(line3Ref.current, { opacity: 1, duration: 0.1 }, "+=0.4")
            // Line 4 appears
            .to(line4Ref.current, { opacity: 1, duration: 0.1 }, "+=0.3")
            // Glitch effect
            .to(terminalRef.current, {
                x: gsap.utils.random(-4, 4),
                y: gsap.utils.random(-4, 4),
                duration: 0.05,
                repeat: 5,
                yoyo: true,
                ease: "none",
            }, "+=0.3")
            // Fade out overlay
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
            }, "+=0.4");

    }, { scope: containerRef });

    if (!isLoading) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#030303] overflow-hidden"
        >
            {/* Matrix rain background */}
            <div
                ref={matrixRef}
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ opacity: 0.15 }}
            />

            {/* Terminal */}
            <div
                ref={terminalRef}
                className="relative w-[90%] max-w-[500px] rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] shadow-[0_0_60px_rgba(0,0,0,0.9),0_0_20px_rgba(79,172,254,0.1)] overflow-hidden"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-[#1e1e1e]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-[#555] text-xs font-mono tracking-widest font-medium">SITE ACCESS</span>
                    <div className="w-12" />
                </div>

                {/* Body */}
                <div className="p-6 font-mono flex flex-col gap-4 min-h-[160px]">
                    <div ref={line1Ref} className="flex gap-2 items-center text-sm">
                        <span className="text-[#4facfe]">root@security:~$</span>
                        <span className="text-[#64ffda]">accessing_site...</span>
                    </div>
                    <div ref={line2Ref} className="text-sm">
                        <span className="text-red-400 font-bold tracking-wider">SITE HACKED</span>
                        <span className="text-red-500 animate-pulse">...</span>
                    </div>
                    <div ref={line3Ref} className="flex items-center gap-2 text-sm">
                        <span className="text-red-400 tracking-wider">ACCESS COMPLETE</span>
                        <span className="text-green-400 font-bold">✓</span>
                    </div>
                    <div ref={line4Ref} className="flex items-center gap-2 text-sm">
                        <span className="text-yellow-400 tracking-wider">SITE UNLOCKED</span>
                        <span>🔓</span>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="mx-6 mb-6 h-[3px] bg-[#1e1e1e] rounded-full overflow-hidden">
                    <div
                        ref={progressFillRef}
                        className="h-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full shadow-[0_0_8px_rgba(79,172,254,0.8)]"
                        style={{ width: "0%" }}
                    />
                </div>
            </div>

            <style>{`
                @keyframes matrixFall {
                    0% { transform: translateY(-100vh); }
                    100% { transform: translateY(110vh); }
                }
            `}</style>
        </div>
    );
}
