import { useState } from "react";
import "./App.css";
import vajraImage from "./assets/vajra.png";

const concerns = [
  {
    id: "intrusion",
    icon: "◉",
    title: "Someone entering",
    subtitle: "You don't know who's there.",
    tag: "SECURITY",
  },
  {
    id: "incident",
    icon: "△",
    title: "Something going wrong",
    subtitle: "Fire. Smoke. An unexpected event.",
    tag: "INCIDENT",
  },
  {
    id: "family",
    icon: "○",
    title: "Family",
    subtitle: "You want to know they're safe.",
    tag: "PEOPLE",
  },
  {
    id: "pets",
    icon: "⌁",
    title: "Pets",
    subtitle: "They're home. You're not.",
    tag: "CARE",
  },
  {
    id: "unknown",
    icon: "?",
    title: "Not knowing",
    subtitle: "The uncertainty is the problem.",
    tag: "AWARENESS",
  },
];

const scenarios = {
  intrusion: {
    eyebrow: "SCENARIO 01 / INTRUSION",
    title: "YOU'RE AWAY.",
    text: "Your phone suddenly lights up.",
    alert: "UNUSUAL ACTIVITY DETECTED",
    location: "NORTH ENTRY",
    confidence: "94%",
    question: "What would you do?",
    options: [
      "Check the camera",
      "Call someone nearby",
      "Wait for more information",
    ],
  },

  incident: {
    eyebrow: "SCENARIO 02 / INCIDENT",
    title: "SOMETHING IS WRONG.",
    text: "You're kilometres away. An alert appears.",
    alert: "ENVIRONMENTAL ANOMALY DETECTED",
    location: "MAIN FLOOR",
    confidence: "91%",
    question: "What's your first instinct?",
    options: [
      "Check the cameras",
      "Call for help",
      "Try to understand what happened",
    ],
  },

  family: {
    eyebrow: "SCENARIO 03 / FAMILY",
    title: "THEY'RE HOME.",
    text: "But you're not.",
    alert: "UNEXPECTED ACTIVITY DETECTED",
    location: "LIVING AREA",
    confidence: "96%",
    question: "What would give you peace of mind?",
    options: [
      "See what's happening",
      "Get an immediate alert",
      "Know someone can respond",
    ],
  },

  pets: {
    eyebrow: "SCENARIO 04 / PETS",
    title: "THEY'RE HOME ALONE.",
    text: "Something happens while you're away.",
    alert: "UNEXPECTED ACTIVITY",
    location: "GROUND FLOOR",
    confidence: "89%",
    question: "What would you want?",
    options: [
      "See what happened",
      "Receive an alert",
      "Have something respond",
    ],
  },

  unknown: {
    eyebrow: "SCENARIO 05 / UNCERTAINTY",
    title: "YOU DON'T KNOW.",
    text: "And that's exactly what makes it uncomfortable.",
    alert: "SITUATION REQUIRES ATTENTION",
    location: "UNRESOLVED",
    confidence: "87%",
    question: "What would actually help?",
    options: [
      "More information",
      "A faster warning",
      "Someone to respond",
    ],
  },
};

function App() {
  const [stage, setStage] = useState("intro");
  const [concern, setConcern] = useState(null);
  const [scenarioChoice, setScenarioChoice] = useState(null);
  const [hoveredConcern, setHoveredConcern] = useState(null);

  const selectConcern = (item) => {
    setConcern(item);
    setHoveredConcern(null);
    setStage("scenario");
  };

  const selectScenario = (option) => {
    setScenarioChoice(option);
    setStage("problem");
  };

  const resetExperience = () => {
    setConcern(null);
    setScenarioChoice(null);
    setHoveredConcern(null);
    setStage("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const enterSystem = () => {
    setStage("experience");

    setTimeout(() => {
      document
        .getElementById("capabilities")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };

  const currentScenario = concern ? scenarios[concern.id] : null;

  return (
    <main
      className={`app stage-${stage}`}
      data-concern={hoveredConcern || concern?.id || ""}
    >
      <div className="noise" />
      <div className="grid-background" />
      <div className="ambient-orb orb-one" />
      <div className="ambient-orb orb-two" />

      {/* SYSTEM BAR */}

      <header className="system-bar">
        <button className="brand-mini" onClick={resetExperience}>
          V
        </button>

        <div className="system-status">
          <span className="status-dot" />
          <span>VAJRA / SYSTEM EXPERIENCE</span>
        </div>

        <div className="system-index">
          {stage === "intro" && "00 / 05"}
          {stage === "concerns" && "01 / 05"}
          {stage === "scenario" && "02 / 05"}
          {stage === "problem" && "03 / 05"}
          {stage === "reveal" && "04 / 05"}
          {stage === "experience" && "05 / 05"}
        </div>
      </header>

      {/* INTRO */}

      {stage === "intro" && (
        <section className="experience-screen intro-screen">
          <div className="intro-grid-lines" />

          <div className="intro-content">
            <div className="eyebrow fade-up">
              BEFORE YOU MEET THE SYSTEM
            </div>

            <h1 className="hero-question fade-up delay-one">
              YOU'RE
              <br />
              <span>LEAVING HOME.</span>
            </h1>

            <p className="hero-description fade-up delay-two">
              And for a moment, everything you care about
              is outside your reach.
            </p>

            <div className="question-block fade-up delay-three">
              <p className="question-label">
                LET'S START WITH ONE QUESTION
              </p>

              <button
                className="begin-button"
                onClick={() => setStage("concerns")}
              >
                <span>What worries you?</span>
                <span className="arrow">→</span>
              </button>
            </div>
          </div>

          <div className="intro-meta">
            <span>VAJRA / 2026</span>
            <span>AUTONOMOUS SECURITY SYSTEM</span>
          </div>

          <div className="scroll-hint">
            <span>INTERACTIVE EXPERIENCE</span>
            <div className="scroll-line">
              <span />
            </div>
          </div>
        </section>
      )}

      {/* CONCERNS */}

      {stage === "concerns" && (
        <section className="experience-screen choice-screen">
          <div className="section-intro">
            <div className="eyebrow">01 / YOUR CONCERN</div>

            <h2>
              WHAT STAYS
              <br />
              <span>ON YOUR MIND?</span>
            </h2>

            <p>
              Choose the one that feels most familiar.
              <br />
              We'll take it from here.
            </p>
          </div>

          <div
            className={`concern-grid ${
              hoveredConcern ? "has-focus" : ""
            }`}
          >
            {concerns.map((item, index) => (
              <button
                key={item.id}
                className={`concern-card ${
                  hoveredConcern === item.id ? "is-active" : ""
                }`}
                style={{ "--delay": `${index * 80}ms` }}
                onMouseEnter={() => setHoveredConcern(item.id)}
                onMouseLeave={() => setHoveredConcern(null)}
                onFocus={() => setHoveredConcern(item.id)}
                onClick={() => selectConcern(item)}
              >
                <div className="card-top">
                  <span className="card-number">0{index + 1}</span>
                  <span className="card-tag">{item.tag}</span>
                </div>

                <div className="card-icon">
                  {item.icon}
                </div>

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>

                <div className="card-arrow">↗</div>

                <div className="card-progress">
                  <span />
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* SCENARIO */}

      {stage === "scenario" && currentScenario && (
        <section className="experience-screen scenario-screen">
          <div className="scenario-content">
            <div className="scenario-topline">
              <div className="eyebrow">
                {currentScenario.eyebrow}
              </div>

              <div className="scenario-selected">
                YOU SELECTED / {concern?.tag}
              </div>
            </div>

            <h2 className="scenario-title">
              {currentScenario.title}
            </h2>

            <p className="scenario-text">
              {currentScenario.text}
            </p>

            <div className="alert-panel">
              <div className="alert-header">
                <div className="live-indicator">
                  <span className="alert-pulse" />
                  LIVE EVENT
                </div>

                <span className="alert-time">
                  NOW
                </span>
              </div>

              <div className="alert-message">
                {currentScenario.alert}
              </div>

              <div className="alert-details">
                <div>
                  <span>LOCATION</span>
                  <strong>{currentScenario.location}</strong>
                </div>

                <div>
                  <span>CONFIDENCE</span>
                  <strong>{currentScenario.confidence}</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong>UNRESOLVED</strong>
                </div>
              </div>

              <div className="alert-scan">
                <span />
              </div>

              <div className="alert-corner corner-one" />
              <div className="alert-corner corner-two" />
              <div className="alert-corner corner-three" />
              <div className="alert-corner corner-four" />
            </div>

            <div className="scenario-question">
              <p>{currentScenario.question}</p>

              <div className="scenario-options">
                {currentScenario.options.map((option, index) => (
                  <button
                    key={option}
                    className="scenario-option"
                    onClick={() => selectScenario(option)}
                  >
                    <span>0{index + 1}</span>
                    <em>{option}</em>
                    <b>→</b>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PROBLEM */}

      {stage === "problem" && (
        <section className="problem-screen">
          <div className="problem-grid" />

          <div className="problem-content">
            <div className="eyebrow">
              THE LIMITATION
            </div>

            <div className="problem-lines">
              <p className="problem-line muted">
                Cameras can <span>see.</span>
              </p>

              <p className="problem-line muted">
                Alarms can <span>alert.</span>
              </p>

              <div className="problem-divider" />

              <p className="problem-line main">
                But who actually
                <br />
                <strong>responds?</strong>
              </p>
            </div>

            <div className="chosen-response">
              YOUR RESPONSE
              <strong>{scenarioChoice}</strong>
            </div>

            <button
              className="continue-button"
              onClick={() => setStage("reveal")}
            >
              <span>There has to be more</span>
              <span>→</span>
            </button>
          </div>
        </section>
      )}

      {/* VAJRA REVEAL */}

      {stage === "reveal" && (
        <section className="reveal-screen">
          <div className="reveal-grid" />
          <div className="reveal-light" />

          <div className="reveal-content">
            <div className="reveal-label">
              <span />
              AUTONOMOUS SECURITY SYSTEM
              <span />
            </div>

            <h1 className="reveal-title">
              MEET
              <br />
              <span>VAJRA.</span>
            </h1>

            <div className="robot-reveal">
              <div className="robot-aura" />

              <div className="robot-orbit orbit-a" />
              <div className="robot-orbit orbit-b" />

              <img
                src={vajraImage}
                alt="VAJRA autonomous security robot"
              />

              <div className="robot-scan-line">
                <span />
              </div>
            </div>

            <p className="reveal-description">
              A mobile autonomous security system
              designed to{" "}
              <strong>perceive, decide, and respond.</strong>
            </p>

            <button
              className="discover-button"
              onClick={enterSystem}
            >
              <span>Enter the VAJRA system</span>
              <b>→</b>
            </button>
          </div>
        </section>
      )}

      {/* PRODUCT EXPERIENCE */}

      {stage === "experience" && (
        <div className="product-site">

          {/* PRODUCT HERO */}

          <section className="product-hero">
            <div className="hero-ambient" />

            <div className="product-hero-copy">
              <div className="eyebrow">
                VAJRA / AUTONOMOUS SECURITY
              </div>

              <h1>
                SECURITY
                <br />
                <span>THAT MOVES.</span>
              </h1>

              <p>
                VAJRA brings perception, intelligence and
                autonomous response into one mobile security system.
              </p>

              <div className="hero-actions">
                <button
                  onClick={() =>
                    document
                      .getElementById("capabilities")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore VAJRA →
                </button>

                <button className="ghost-button">
                  Request information
                </button>
              </div>
            </div>

            <div className="product-robot">
              <div className="robot-hud hud-top">
                <span>UNIT</span>
                <strong>VJ-01</strong>
              </div>

              <div className="robot-hud hud-bottom">
                <span>STATUS</span>
                <strong>OPERATIONAL</strong>
              </div>

              <div className="robot-ring ring-one" />
              <div className="robot-ring ring-two" />

              <div className="robot-status">
                <span />
                SYSTEM ONLINE
              </div>

              <img
                src={vajraImage}
                alt="VAJRA robot"
              />
            </div>
          </section>

          {/* CAPABILITIES */}

          <section
            id="capabilities"
            className="capabilities-section"
          >
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  01 / CORE INTELLIGENCE
                </div>

                <h2>
                  THREE THINGS.
                  <br />
                  <span>ONE SYSTEM.</span>
                </h2>
              </div>

              <p>
                VAJRA is designed to close the gap between
                detection and action.
              </p>
            </div>

            <div className="capability-grid">
              <Capability
                number="01"
                title="PERCEIVE"
                description="Understand the environment through sensors and real-time observation."
                icon="◎"
              />

              <Capability
                number="02"
                title="DECIDE"
                description="Evaluate situations and determine when something requires attention."
                icon="◇"
              />

              <Capability
                number="03"
                title="RESPOND"
                description="Move beyond passive monitoring with autonomous physical response."
                icon="↯"
              />
            </div>
          </section>

          {/* LIVE SYSTEM */}

          <section className="live-section">
            <div className="live-copy">
              <div className="eyebrow">
                02 / LIVE SYSTEM
              </div>

              <h2>
                NOT JUST A
                <br />
                <span>CAMERA.</span>
              </h2>

              <p>
                Traditional security systems are fixed.
                VAJRA is mobile, aware and designed to operate
                within the environment.
              </p>

              <div className="system-stats">
                <div>
                  <span>STATUS</span>
                  <strong>ACTIVE</strong>
                </div>

                <div>
                  <span>MODE</span>
                  <strong>AUTONOMOUS</strong>
                </div>

                <div>
                  <span>THREAT</span>
                  <strong>MONITORING</strong>
                </div>
              </div>
            </div>

            <div className="radar">
              <div className="radar-grid" />

              <div className="radar-cross horizontal" />
              <div className="radar-cross vertical" />

              <div className="radar-circle circle-one" />
              <div className="radar-circle circle-two" />
              <div className="radar-circle circle-three" />

              <div className="radar-sweep" />

              <div className="radar-point point-one" />
              <div className="radar-point point-two" />
              <div className="radar-point point-three" />

              <div className="radar-center">
                V
              </div>

              <div className="radar-label label-top">
                ENVIRONMENT
              </div>

              <div className="radar-label label-bottom">
                SCANNING / ACTIVE
              </div>
            </div>
          </section>

          {/* DEPLOYMENT */}

          <section className="deployment-section">
            <div className="eyebrow">
              03 / DEPLOYMENT
            </div>

            <h2>
              WHERE SECURITY
              <br />
              <span>NEEDS TO MOVE.</span>
            </h2>

            <div className="deployment-grid">
              <Deployment
                title="HOMES"
                text="Monitor spaces when you're away."
              />

              <Deployment
                title="FACILITIES"
                text="Extend security across large environments."
              />

              <Deployment
                title="CAMPUSES"
                text="Add mobile intelligence to existing infrastructure."
              />

              <Deployment
                title="INDUSTRY"
                text="Monitor environments where awareness matters."
              />
            </div>
          </section>

          {/* CTA */}

          <section className="final-cta">
            <div className="cta-glow" />

            <div className="eyebrow">
              VAJRA / NEXT GENERATION SECURITY
            </div>

            <h2>
              WHEN SOMETHING
              <br />
              <span>HAPPENS.</span>
            </h2>

            <p>
              Don't just know about it.
              <br />
              Be ready to respond.
            </p>

            <button className="cta-button">
              Start a conversation →
            </button>
          </section>

          {/* FOOTER */}

          <footer className="footer">
            <div className="footer-brand">
              VAJRA<span>®</span>
            </div>

            <div>
              AUTONOMOUS SECURITY SYSTEMS
            </div>

            <div>
              © 2026 VAJRA
            </div>
          </footer>
        </div>
      )}
    </main>
  );
}

function Capability({
  number,
  title,
  description,
  icon,
}) {
  return (
    <div className="capability-card">
      <div className="capability-top">
        <span>{number}</span>
        <strong>{icon}</strong>
      </div>

      <div className="capability-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="capability-line" />
    </div>
  );
}

function Deployment({ title, text }) {
  return (
    <div className="deployment-card">
      <div className="deployment-icon">+</div>

      <h3>{title}</h3>

      <p>{text}</p>

      <span className="deployment-arrow">
        ↗
      </span>
    </div>
  );
}

export default App;