function IntroScreen({ onBegin }) {
  return (
    <section className="experience-screen intro-screen">
      
      {/* Background atmosphere */}
      <div className="intro-grid-lines" />
      <div className="intro-glow" />
      <div className="intro-noise" />

      {/* System status */}
      <div className="system-status fade-up">
        <span className="status-dot" />
        <span>SYSTEM ONLINE</span>
      </div>

      {/* Main content */}
      <div className="intro-content">
        
        <div className="eyebrow fade-up">
          <span className="eyebrow-line" />
          BEFORE YOU MEET THE SYSTEM
        </div>

        <h1 className="hero-question fade-up delay-one">
          YOU'RE
          <br />
          <span>LEAVING HOME.</span>
        </h1>

        

        <div className="question-block fade-up delay-three">
          <p className="question-label">
            LET'S START WITH ONE QUESTION
          </p>

          <button
            className="begin-button"
            onClick={onBegin}
            aria-label="Begin the security experience"
          >
            <span className="button-text">
              What worries you?
            </span>

            <span className="button-circle">
              <span className="arrow">→</span>
            </span>
          </button>

          <p className="interaction-note">
            CLICK TO BEGIN THE EXPERIENCE
          </p>
        </div>
      </div>

      {/* Footer metadata */}
      <div className="intro-meta">
        <span>VAJRA / 2026</span>

        <div className="meta-divider" />

        <span>AUTONOMOUS SECURITY SYSTEM</span>
      </div>

      {/* Scroll / interaction indicator */}
      <div className="scroll-hint">
        <span>INTERACTIVE EXPERIENCE</span>

        <div className="scroll-line">
          <span />
        </div>
      </div>

      {/* Decorative coordinates */}
      <div className="screen-coordinates">
        <span>22.5726° N</span>
        <span>88.3639° E</span>
      </div>

    </section>
  );
}

export default IntroScreen;