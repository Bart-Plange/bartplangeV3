import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook that returns a ref to attach to a DOM element.
 * When the element enters the viewport, the provided animation callback runs.
 */
export const useGsapScroll = (animate: (el: HTMLElement) => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        animate(el);
        // cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [animate]);

    return ref;
};
