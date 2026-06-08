import { useEffect, useRef, useState } from "react";
import "../styles/hero.css";

import article370 from "../assets/article-370.png";
import devara from "../assets/devara-fear-song.png";
import ncert from "../assets/ncert-poster.png";
import xplorepro from "../assets/tech_event_poster.png";

const works = [
  {
    title: "Article 370",
    image: article370,
  },
  {
    title: "Devara",
    image: devara,
  },
  {
    title: "NCERT Physics",
    image: ncert,
  },
  {
    title: "XplorePro",
    image: xplorepro,
  },
];

export default function Hero() {
  const canvasRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
      }));
    };

    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;

        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(255,255,255,0.08)";

        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-vignette" />

      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-name">VARAN DABBETA</span>

          <h1>
            VISUALS
            <br />
            THAT
            <br />
            DEMAND
            <br />
            ATTENTION.
          </h1>

          <p>
            Visual Storyteller
            <span> • </span>
            Creative Designer
          </p>

          <div className="hero-mobile-hint">4 Selected Works ↓</div>
        </div>

        <div className="hero-right">
          <div className="hero-preview">
            <img key={activeIndex} src={works[activeIndex].image} alt="" />

            <div className="hero-work-info">
              <span>Featured Work</span>

              <h3>{works[activeIndex].title}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">SCROLL TO EXPLORE</div>
    </section>
  );
}
