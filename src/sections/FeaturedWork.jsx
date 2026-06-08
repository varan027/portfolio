import { useState } from "react";
import "../styles/featured-work.css";

import article370 from "../assets/article-370.png";
import devara from "../assets/devara-fear-song.png";
import ncert from "../assets/ncert-poster.png";
import tech from "../assets/tech_event_poster.png";

const projects = [
  {
    id: "01",
    title: "ARTICLE 370",
    category: "Movie Poster",
    image: article370,
    color: "#d18b35",
  },
  {
    id: "02",
    title: "DEVARA",
    category: "Campaign Design",
    image: devara,
    color: "#c44a2f",
  },
  {
    id: "03",
    title: "NCERT PHYSICS",
    category: "Educational Campaign",
    image: ncert,
    color: "#4e8dff",
  },
  {
    id: "04",
    title: "XPLOREPRO",
    category: "Marketing Campaign",
    image: tech,
    color: "#FFF500",
  },
];

export default function FeaturedWork() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section
      className="archive"
      style={{
        "--active-color": active.color,
      }}
    >
      <div className="archive-noise" />

      <div className="archive-header">
        <span>SELECTED WORK</span>

        <h2>
          Visual
          <br />
          Archive
        </h2>
      </div>

      <div className="archive-layout">

        <div className="archive-list">

          {projects.map((project) => (
            <div
              key={project.id}
              className={`archive-item ${
                active.id === project.id
                  ? "active"
                  : ""
              }`}
              onMouseEnter={() =>
                setActive(project)
              }
            >
              <span className="archive-number">
                {project.id}
              </span>

              <div>
                <h3>{project.title}</h3>

                <p>
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="archive-preview">

          <div className="preview-glow" />

          <img
            key={active.title}
            src={active.image}
            alt={active.title}
          />

        </div>
      </div>
    </section>
  );
}