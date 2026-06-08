import { motion } from "framer-motion";
import "../styles/syllarc-case-study.css";
import syllarcPreview from "../assets/dashboard-preview.png";

const EXPO = [0.16, 1, 0.3, 1];

const links = {
  github: "https://github.com/varundabbeta/syllarc",
  live: "https://syllarc.vercel.app",
};

const stack = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Gemini AI",
  "YouTube API",
  "JWT",
];

const metrics = [
  { label: "Product type", value: "AI learning platform" },
  { label: "Role", value: "Full-stack developer" },
  { label: "Core workflow", value: "Goal to structured path" },
  { label: "External systems", value: "Gemini + YouTube" },
];

const existingSolutions = [
  {
    title: "Search gives options, not direction.",
    copy: "A learner can search for React, DSA, or backend development and get thousands of results, but no clear order, scope, or next step.",
  },
  {
    title: "Course platforms assume the path is already known.",
    copy: "They are useful once a learner chooses a course. They are weaker at helping someone decide what sequence of topics fits their goal.",
  },
  {
    title: "AI chat alone is too temporary.",
    copy: "A chat response can be helpful, but it disappears into the conversation unless the product turns it into a saved, trackable learning plan.",
  },
];

const architecture = [
  {
    layer: "Frontend",
    detail: "React interface for goal capture, generated paths, module browsing, and progress-oriented learning states.",
  },
  {
    layer: "API layer",
    detail: "Node and Express routes coordinate authentication, learning path requests, saved resources, and integration responses.",
  },
  {
    layer: "Data layer",
    detail: "MongoDB stores users, generated paths, selected resources, and reusable learning state so the path survives beyond one AI response.",
  },
  {
    layer: "AI service",
    detail: "Gemini turns learner intent into structured topics, milestones, explanations, and resource-search terms.",
  },
  {
    layer: "Resource service",
    detail: "YouTube API maps generated topics to real learning videos and keeps the product connected to usable material.",
  },
];

const flowSteps = [
  {
    name: "Learner goal",
    copy: "The user enters what they want to learn, their current level, and the kind of outcome they care about.",
  },
  {
    name: "Prompt shaping",
    copy: "The app converts the raw goal into a constrained Gemini request with expected structure, topic order, and output rules.",
  },
  {
    name: "Path generation",
    copy: "Gemini returns a staged learning path with modules, topic summaries, and suggested resource queries.",
  },
  {
    name: "Resource matching",
    copy: "The YouTube integration searches for relevant videos per module and attaches usable learning material to each step.",
  },
  {
    name: "Persisted plan",
    copy: "The final path is saved so the learner can return to it, review modules, and continue from a stable product state.",
  },
];

const challenges = [
  "Keeping AI output structured enough for the UI instead of treating the model response as plain text.",
  "Designing the product around a repeatable learning workflow instead of a one-off prompt result.",
  "Balancing useful automation with user trust, especially when the app suggests what to learn next.",
  "Making third-party API responses feel like part of one product experience.",
];

const decisions = [
  {
    title: "Structured AI output over free-form answers",
    copy: "The product needed predictable modules, descriptions, and resource queries. That pushed the implementation toward constrained prompts and UI-ready response shapes.",
  },
  {
    title: "Persist generated paths",
    copy: "A learning roadmap is only useful if it can be revisited. Saving the path made Syllarc feel like a product, not a prompt wrapper.",
  },
  {
    title: "Use YouTube as a resource layer",
    copy: "Instead of pretending to own all learning content, Syllarc focuses on path generation and connects each step to existing public learning material.",
  },
  {
    title: "Keep the interface quiet",
    copy: "The workflow favors clarity, module order, and readable content over visual novelty because the user is already dealing with uncertainty.",
  },
];

const learnings = [
  "AI features need product constraints. The model is powerful, but the product becomes useful only when the output is shaped, validated, and made repeatable.",
  "Integration work is mostly state and edge cases: loading, missing resources, inconsistent responses, and making external data feel coherent.",
  "A strong frontend is not only visual polish. It is also knowing when to expose complexity and when to hide it behind a calmer flow.",
];

const improvements = [
  "Add progress tracking across modules and topics.",
  "Let learners regenerate individual modules without replacing the full path.",
  "Add quality filters for YouTube resources such as duration, channel trust, and recency.",
  "Introduce saved notes and reflection prompts inside each learning step.",
  "Add tests around path parsing, resource matching, and empty-state behavior.",
];

const fadeUp = (delay = 0, y = 18) => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: EXPO, delay } },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut", delay } },
});

function Rule({ delay = 0 }) {
  return (
    <motion.div
      className="sy-rule"
      variants={{
        hidden: { scaleX: 0, originX: "0%" },
        visible: { scaleX: 1, transition: { duration: 0.82, ease: EXPO, delay } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    />
  );
}

function SectionLabel({ number, title }) {
  return (
    <div className="sy-label" aria-hidden="true">
      <span className="sy-label-num">{number}</span>
      <span className="sy-label-sep">--</span>
      <span className="sy-label-text">{title}</span>
    </div>
  );
}

function CaseSection({ number, title, kicker, children }) {
  return (
    <motion.section
      className="sy-section"
      variants={fadeUp()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      aria-labelledby={`sy-section-${number}`}
    >
      <SectionLabel number={number} title={title} />
      <Rule delay={0.05} />
      <div className="sy-section-grid">
        <div>
          <h2 id={`sy-section-${number}`} className="sy-section-title">
            {title}
          </h2>
          {kicker && <p className="sy-section-kicker">{kicker}</p>}
        </div>
        <div className="sy-section-content">{children}</div>
      </div>
    </motion.section>
  );
}

function ExternalLink({ href, children, primary = false }) {
  return (
    <a
      className={primary ? "sy-link sy-link-primary" : "sy-link"}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M2 7h10M7 2l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function SyllarcCaseStudy() {
  return (
    <main className="sy-root">
      <div className="sy-grid" aria-hidden="true" />
      <div className="sy-watermark" aria-hidden="true">S</div>

      <nav className="sy-nav" aria-label="Case study navigation">
        <a className="sy-mark" href="/">VD</a>
        <a className="sy-back" href="/#work">Back to work</a>
      </nav>

      <section className="sy-hero" aria-labelledby="sy-hero-title">
        <motion.div
          className="sy-hero-copy"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeIn()} className="sy-hero-label">
            <span>Case Study</span>
            <span>01</span>
          </motion.div>
          <motion.h1 id="sy-hero-title" className="sy-title" variants={fadeUp(0.05, 22)}>
            Syllarc
          </motion.h1>
          <motion.p className="sy-thesis" variants={fadeUp(0.12, 18)}>
            An AI-powered learning platform that turns an uncertain learning goal into a structured path with modules, explanations, and usable resources.
          </motion.p>
          <motion.div className="sy-meta-grid" variants={fadeUp(0.18, 14)}>
            {metrics.map((item) => (
              <div className="sy-meta-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </motion.div>
          <motion.div className="sy-stack" variants={fadeUp(0.24, 12)}>
            {stack.map((item) => <span key={item}>{item}</span>)}
          </motion.div>
          <motion.div className="sy-actions" variants={fadeUp(0.3, 12)}>
            <ExternalLink href={links.live} primary>Live demo</ExternalLink>
            <ExternalLink href={links.github}>GitHub</ExternalLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="sy-preview"
          variants={fadeUp(0.22, 24)}
          initial="hidden"
          animate="visible"
        >
          <div className="sy-preview-shell">
            <div className="sy-preview-chrome" aria-hidden="true">
              <span />
              <span />
              <span />
              <div />
            </div>
            <img src={syllarcPreview} alt="Syllarc product dashboard preview" />
          </div>
        </motion.div>
      </section>

      <CaseSection
        number="01"
        title="Problem"
        kicker="The user does not need more content first. They need direction."
      >
        <p>
          Syllarc started from a familiar learning problem: when someone wants to learn a technical subject, the hardest part is often not motivation. It is knowing what to learn next, what order to follow, and which resources are worth using.
        </p>
        <p>
          The product goal was to turn a vague learning intent into a practical roadmap that feels specific enough to start and stable enough to revisit.
        </p>
      </CaseSection>

      <CaseSection
        number="02"
        title="Why existing solutions failed"
        kicker="Most tools solve content discovery. Syllarc focuses on path clarity."
      >
        <div className="sy-card-list">
          {existingSolutions.map((item) => (
            <article className="sy-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        number="03"
        title="Product overview"
        kicker="A learner enters a goal. Syllarc turns it into a productized plan."
      >
        <div className="sy-overview-grid">
          <div className="sy-overview-main">
            <p>
              The core experience is simple: capture the learner's goal, generate a staged learning path, attach relevant resources, and preserve that path so it can become an ongoing workspace.
            </p>
            <p>
              The important product choice was to make AI output actionable. Syllarc is not only a chat interface. It converts the response into modules and resource blocks that can be displayed, saved, and extended.
            </p>
          </div>
          <div className="sy-fact-panel">
            <span>Core product promise</span>
            <strong>From "I want to learn this" to "Here is where to begin."</strong>
          </div>
        </div>
      </CaseSection>

      <CaseSection
        number="04"
        title="Architecture"
        kicker="The system separates interface, data, AI generation, and resource discovery."
      >
        <div className="sy-architecture">
          {architecture.map((item, index) => (
            <div className="sy-arch-row" key={item.layer}>
              <span>0{index + 1}</span>
              <h3>{item.layer}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        number="05"
        title="Learning path generation flow"
        kicker="The main workflow is designed as a chain, not a single model call."
      >
        <ol className="sy-flow">
          {flowSteps.map((step, index) => (
            <li key={step.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.name}</h3>
                <p>{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </CaseSection>

      <CaseSection
        number="06"
        title="Gemini AI integration"
        kicker="The AI layer exists to structure uncertainty into usable learning steps."
      >
        <p>
          Gemini powers the generation step, but the implementation goal was control. The app needs topic names, descriptions, ordering, and search-ready resource terms that can be rendered by the frontend.
        </p>
        <p>
          That means the prompt has to ask for a useful shape, the backend has to treat the response as application data, and the UI has to handle loading, empty, and inconsistent states without making the user feel stuck.
        </p>
      </CaseSection>

      <CaseSection
        number="07"
        title="YouTube integration"
        kicker="Generated paths become more useful when each module connects to real resources."
      >
        <p>
          The YouTube integration gives each generated module a practical next action. Instead of leaving users with abstract topics, Syllarc searches for relevant videos that map to the generated learning steps.
        </p>
        <p>
          The challenge is translation: AI-generated topics need to become focused queries, API results need to be filtered into readable resource cards, and missing or weak results need graceful handling.
        </p>
      </CaseSection>

      <CaseSection
        number="08"
        title="Technical challenges"
        kicker="The difficult parts were around reliability, structure, and product coherence."
      >
        <ul className="sy-bullet-list">
          {challenges.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </CaseSection>

      <CaseSection
        number="09"
        title="Key engineering decisions"
        kicker="The strongest decisions were about making the product repeatable."
      >
        <div className="sy-card-list">
          {decisions.map((item) => (
            <article className="sy-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        number="10"
        title="What I learned"
        kicker="The project clarified how AI products need both imagination and restraint."
      >
        <div className="sy-learning-list">
          {learnings.map((item, index) => (
            <p key={item}>
              <span>0{index + 1}</span>
              {item}
            </p>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        number="11"
        title="Future improvements"
        kicker="The next version would deepen the learning loop after path generation."
      >
        <ul className="sy-bullet-list sy-two-col">
          {improvements.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </CaseSection>

      <motion.section
        className="sy-final"
        variants={fadeUp()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        aria-labelledby="sy-final-title"
      >
        <SectionLabel number="12" title="Links" />
        <Rule delay={0.05} />
        <div className="sy-final-inner">
          <h2 id="sy-final-title">Inspect the build.</h2>
          <p>
            The live product and repository are the fastest way to evaluate the implementation behind the case study.
          </p>
          <div className="sy-actions">
            <ExternalLink href={links.live} primary>Live demo</ExternalLink>
            <ExternalLink href={links.github}>GitHub repository</ExternalLink>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
