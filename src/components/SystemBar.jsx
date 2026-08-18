function SystemBar({
  stage,
  onReset,
}) {
  const stageIndex = {
    intro: "00 / 05",
    concerns: "01 / 05",
    scenario: "02 / 05",
    problem: "03 / 05",
    reveal: "04 / 05",
    experience: "05 / 05",
  };

  return (
    <header className="system-bar">
      <button
        className="brand-mini"
        onClick={onReset}
        aria-label="Restart VAJRA experience"
      >
        V
      </button>

      <div className="system-status">
        <span className="status-dot" />
        <span>VAJRA / SYSTEM EXPERIENCE</span>
      </div>

      <div className="system-index">
        {stageIndex[stage]}
      </div>
    </header>
  );
}

export default SystemBar;