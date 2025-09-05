import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
  useEffect(() => {
    // Fade-in sections on scroll
    gsap.utils.toArray("section").forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Navbar background change on scroll
    gsap.to("nav", {
      backgroundColor: "rgba(15, 23, 42, 0.95)",
      scrollTrigger: {
        trigger: "body",
        start: "top -100",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
};

export default useGsapAnimations;
