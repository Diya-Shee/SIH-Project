function ProblemScreen({
  scenarioChoice,
  onContinue,
}) {
  return (
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
          <span>YOUR RESPONSE</span>

          <strong>
            {scenarioChoice}
          </strong>
        </div>

        <button
          className="continue-button"
          onClick={onContinue}
        >
          <span>
            There has to be more
          </span>

          <span>
            →
          </span>
        </button>

      </div>
    </section>
  );
}

export default ProblemScreen;