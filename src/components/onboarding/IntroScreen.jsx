function IntroScreen({ onBegin }) {
  return (
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
            onClick={onBegin}
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
  );
}

export default IntroScreen;