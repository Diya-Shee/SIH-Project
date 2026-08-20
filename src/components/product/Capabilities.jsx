const capabilities = [
  {
    number: "01",
    title: "PERCEIVE",
    description:
      "Continuously sense, observe, and understand what is happening around you.",
    icon: "◎",
  },
  {
    number: "02",
    title: "DECIDE",
    description:
      "Analyse real-time situations and determine when attention or action is required.",
    icon: "◇",
  },
  {
    number: "03",
    title: "RESPOND",
    description:
      "Move beyond alerts with intelligent, autonomous physical response.",
    icon: "↯",
  },
];

function Capabilities() {
  return (
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
          SEE.
          THINK.
           <br />
           <span>ACT.</span>
         </h2>
        </div>

        <p>
          VAJRA is designed to close the gap between
          detection and action.
        </p>
      </div>

      <div className="capability-grid">
        {capabilities.map((capability) => (
          <CapabilityCard
            key={capability.number}
            {...capability}
          />
        ))}
      </div>
    </section>
  );
}

function CapabilityCard({
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

export default Capabilities;