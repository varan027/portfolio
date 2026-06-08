import { useEffect, useRef } from "react";
import "../styles/about.css";

const statement =
  "I design visuals that earn attention. Every poster, campaign and composition begins with the same question. What makes someone stop and look?";

export default function About() {
  const wordsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    wordsRef.current.forEach((word) => {
      if (word) observer.observe(word);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about">

      <div className="about-label">
        ABOUT
      </div>

      <div className="about-content">

        <h2>
          {statement
            .split(" ")
            .map((word, index) => (
              <span
                key={index}
                ref={(el) =>
                  (wordsRef.current[index] = el)
                }
                className="reveal-word"
              >
                {word}
              </span>
            ))}
        </h2>

        <div className="about-side">

          <p>
            My work lives between
            cinematic storytelling and
            visual communication.
          </p>

          <p>
            Inspired by film posters,
            editorial design and modern
            campaign art direction.
          </p>

        </div>

      </div>

    </section>
  );
}