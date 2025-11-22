import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const slideDown = (ref: HTMLElement, duration: number) => {
    gsap.from(ref, {
        y: -100,
        opacity: 0,
        duration: duration,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
}