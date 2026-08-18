import vajraImage from "../../assets/vajra.png";

function VajraReveal({ onEnterSystem }) {
  return (
    <section className="reveal-screen">
      <div className="reveal-grid" />

      <div className="reveal-light" />

      <div className="reveal-content">

        {/* REVEAL LABEL */}

        <div className="reveal-label">
          <span />
          AUTONOMOUS SECURITY SYSTEM
          <span />
        </div>

        {/* TITLE */}

        <h1 className="reveal-title">
          MEET
          <br />
          <span>VAJRA.</span>
        </h1>

        {/* ROBOT */}

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

        {/* DESCRIPTION */}

        <p className="reveal-description">
          A mobile autonomous security system
          designed to{" "}
          <strong>
            perceive, decide, and respond.
          </strong>
        </p>

        {/* CTA */}

        <button
          className="discover-button"
          onClick={onEnterSystem}
        >
          <span>
            Enter the VAJRA system
          </span>

          <b>
            →
          </b>
        </button>

      </div>
    </section>
  );
}

export default VajraReveal;