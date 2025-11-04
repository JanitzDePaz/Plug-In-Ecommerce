import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function numbersGoingUp(ref: HTMLElement, to: number) {
    const hz = { value: 0 };
        gsap.to(hz, {
        value: to,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none none",
        },
        onUpdate: () => {
            ref.textContent = `${Math.floor(hz.value)} Hz`;
        },
        });
}