function LiveSystem() {
  return (
    <section className="live-section">
      {/* SYSTEM DESCRIPTION */}

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

      {/* RADAR */}

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
  );
}

export default LiveSystem;