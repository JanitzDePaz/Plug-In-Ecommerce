import gsap from "gsap";

export const loading = (dots: string) => {
  const tl = gsap.timeline({ repeat: -1 });

  tl.to(`.${dots}`, {
    y: -8,
    duration: 0.5,
    ease: "power1.inOut",
    stagger: 0.15,
  }).to(`.${dots}`, {
    y: 0,
    duration: 0.5,
    ease: "power1.inOut",
    stagger: 0.15,
  }, "-=0.4");

  return tl
};
