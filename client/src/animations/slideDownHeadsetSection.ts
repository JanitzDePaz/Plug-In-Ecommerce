import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const slideDownHeadsetSection = (elements: string) => {
    const elementsToAnimate = document.querySelectorAll(elements);
    gsap.from(elementsToAnimate, {
        y: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: elementsToAnimate[0],
            start: "top 80%",
        }
    });
}