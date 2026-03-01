"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <footer className="w-full py-10 relative mt-20 border-t border-[var(--border)] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center">

                <div className="flex items-center gap-6 mb-8 mt-4">
                    <a href="https://github.com/harshit-namdev" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/harshit-namdev" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:harshitnamdev86@gmail.com" className="text-text-muted hover:text-accent transition-colors">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>

                <div className="text-center font-mono text-sm text-text-muted flex flex-col items-center relative">
                    <p
                        className="mb-2 relative cursor-help inline-block group"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <span className="group-hover:text-accent transition-colors inline-block relative">
                            Designed & Built by Harshit Namdev
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        {showTooltip && (
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-elevated text-text-primary text-xs rounded whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2">
                                Made with ❤️ and lots of ☕
                            </span>
                        )}
                    </p>
                    <p className="text-xs text-text-dim mt-1">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
