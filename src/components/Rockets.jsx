import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rocketSVG from "../assets/rocket.svg";

gsap.registerPlugin(ScrollTrigger);

const Rockets = () => {
  const skills = [
    { name: "AWS", level: 90 },
    { name: "JavaScript & TypeScript", level: 85 },
    { name: "HTML/CSS/Tailwind", level: 95 },
    { name: "Databases (PostgreSQL, MySQL, OpenSearch)", level: 80 },
    { name: "Tools", level: 75 },
    { name: "3D Libraries", level: 70 },
  ];

  const barsRef = useRef([]);
  const containerRef = useRef(null); // Reference for the whole component

  useEffect(() => {
    const sortedIndices = [...skills]
      .map((skill, index) => ({ ...skill, index }))
      .sort((a, b) => b.level - a.level);

    gsap.to(
      sortedIndices.map((item) => barsRef.current[item.index]),
      {
        height: (i) => `${sortedIndices[i].level}%`,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current, // Trigger the animation when the whole component scrolls into view
          start: "top 80%", // Adjust when the animation starts (80% from the top of the viewport)
          toggleActions: "play none none none", // Play once when in view
        },
      }
    );
  }, [skills]);

  return (
    <div ref={containerRef} className="w-screen h-[50vh] bg-[#121316] text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-8">Technical Skills</h1>
      <div className="grid grid-cols-6 gap-6 w-3/4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-4 bg-transparent relative h-64 overflow-hidden">
              <div
                ref={(el) => (barsRef.current[index] = el)}
                className="absolute bottom-0 w-full flex flex-col"
                style={{ height: "0%" }}
              >
                <img
                  src={rocketSVG}
                  className="h-8 w-12 mb-[-8px] z-20 overflow-visible transition-all"
                  alt="rocket"
                />
                <div
                  className="w-full"
                  style={{
                    height: "100%",
                    background: `linear-gradient(
                      to top,
                      rgba(107, 114, 128, 1) 30%,
                      rgba(239, 68, 68, 1) 45%,
                      rgba(249, 115, 22, 1) 90%,
                      rgba(59, 130, 246, 1) 100%
                    )`,
                  }}
                ></div>
              </div>
            </div>
            <p className="mt-2 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
