"use client";

import { useEffect, useState } from "react";

export default function NoiseOverlay() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Subtle animated shift to make the noise feel alive
        const interval = setInterval(() => {
            setPosition({
                x: Math.floor(Math.random() * 10),
                y: Math.floor(Math.random() * 10),
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] w-screen h-screen overflow-hidden mix-blend-screen"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                transform: `translate(${position.x}px, ${position.y}px)`,
                width: "calc(100vw + 20px)",
                height: "calc(100vh + 20px)",
                margin: "-10px",
            }}
            aria-hidden="true"
        />
    );
}
