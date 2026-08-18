import { scenarios } from "../../data/experienceData";

function ScenarioScreen({
  concern,
  onSelectScenario,
}) {
  const currentScenario = concern
    ? scenarios[concern.id]
    : null;

  if (!currentScenario) {
    return null;
  }

  return (
    <section className="experience-screen scenario-screen">
      <div className="scenario-content">

        <div className="scenario-topline">
          <div className="eyebrow">
            {currentScenario.eyebrow}
          </div>

          <div className="scenario-selected">
            YOU SELECTED / {concern.tag}
          </div>
        </div>

        <h2 className="scenario-title">
          {currentScenario.title}
        </h2>

        <p className="scenario-text">
          {currentScenario.text}
        </p>

        {/* ALERT PANEL */}

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
              <strong>
                {currentScenario.location}
              </strong>
            </div>

            <div>
              <span>CONFIDENCE</span>
              <strong>
                {currentScenario.confidence}
              </strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>
                UNRESOLVED
              </strong>
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

        {/* QUESTION */}

        <div className="scenario-question">

          <p>
            {currentScenario.question}
          </p>

          <div className="scenario-options">

            {currentScenario.options.map(
              (option, index) => (
                <button
                  key={option}
                  className="scenario-option"
                  onClick={() =>
                    onSelectScenario(option)
                  }
                >
                  <span>
                    0{index + 1}
                  </span>

                  <em>
                    {option}
                  </em>

                  <b>
                    →
                  </b>
                </button>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ScenarioScreen;