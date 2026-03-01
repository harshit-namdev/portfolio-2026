"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash on mobile
    const { x, y } = useMousePosition();

    useEffect(() => {
        // Check if device is touch capable or has small screen
        const checkMobile = () => {
            const isTouch =
                "ontouchstart" in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 768;
            setIsMobile(isTouch || isSmallScreen);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("magnetic-item") ||
                target.getAttribute("role") === "button" ||
                target.closest("[role=\"button\"]")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Hide custom cursor entirely on mobile devices
    if (isMobile) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: x - 4,
                    y: y - 4,
                    scale: isHovering ? 0 : 1,
                    opacity: 1,
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.1,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-text-secondary rounded-full pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center"
                animate={{
                    x: x - 20,
                    y: y - 20,
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(0,0,0,0)",
                    borderColor: isHovering ? "transparent" : "var(--text-secondary)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5,
                }}
            >
                {isHovering && (
                    <span className="text-[6px] text-black font-bold uppercase tracking-widest relative z-10 transition-opacity duration-300">
                        Click
                    </span>
                )}
            </motion.div>
        </>
    );
}
