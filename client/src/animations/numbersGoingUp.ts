import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function numbersGoingUp(ref: HTMLElement, from: number, to: number, decimals: boolean, dataType: string) {
    const startNumb = { value: from };
    gsap.to(startNumb, {
        value: to,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ref,
            start: "top 90%",
            toggleActions: "play none none none",
        },
        onUpdate: () => {
            if(decimals){
                ref.textContent = `${startNumb.value.toFixed(1)} ${dataType}`;
            }else{
                ref.textContent = `${Math.floor(startNumb.value)} ${dataType}`;
            }
            
        },
    });
}