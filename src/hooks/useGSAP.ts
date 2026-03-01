"use client";

import { useEffect, useLayoutEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface UseGSAPOptions {
    scope?: RefObject<HTMLElement | null>;
    dependencies?: any[];
}

export function useGSAP(
    callback: (context: gsap.Context) => void,
    options: UseGSAPOptions | any[] = []
) {
    const isOptionsObject = !Array.isArray(options);
    const dependencies = isOptionsObject ? (options as UseGSAPOptions).dependencies || [] : options as any[];
    const scope = isOptionsObject ? (options as UseGSAPOptions).scope : undefined;

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context((context) => {
            callback(context);
        }, scope || undefined);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, dependencies);
}
