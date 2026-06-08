import { useRef, useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const buttonRef = useRef(null);
  const [cinemaMode, setCinemaMode] = useState(false);

  const handleMove = (e) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    button.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const reset = () => {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform =
      "translate(0px,0px)";
  };

  return (
    <section
      className={`contact ${
        cinemaMode ? "cinema-mode" : ""
      }`}
    >
      <div className="contact-noise" />

      <span className="contact-label">
        FINAL FRAME
      </span>

      <h2>
        LET'S
        <br />
        CREATE
        <br />
        SOMETHING
        <br />
        MEMORABLE.
      </h2>

      <p>
        Available for design,
        campaigns, visual storytelling
        and creative collaborations.
      </p>

      <div className="contact-actions">

        <a
          href="mailto:varandabbeta@gmail.com"
          ref={buttonRef}
          className="contact-button"
          onMouseMove={handleMove}
          onMouseLeave={reset}
        >
          START A PROJECT
        </a>

      </div>

      <div className="contact-links">

        <a href="#">
          LinkedIn
        </a>

        <a href="#">
          Resume
        </a>

      </div>

      <button
        className="cinema-toggle"
        onClick={() =>
          setCinemaMode(!cinemaMode)
        }
      >
        {cinemaMode
          ? "EXIT CINEMA MODE"
          : "ENTER CINEMA MODE"}
      </button>
    </section>
  );
}