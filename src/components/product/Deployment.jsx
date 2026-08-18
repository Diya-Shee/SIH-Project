const deploymentOptions = [
  {
    title: "HOMES",
    text: "Monitor spaces when you're away.",
  },
  {
    title: "FACILITIES",
    text: "Extend security across large environments.",
  },
  {
    title: "CAMPUSES",
    text: "Add mobile intelligence to existing infrastructure.",
  },
  {
    title: "INDUSTRY",
    text: "Monitor environments where awareness matters.",
  },
];

function Deployment() {
  return (
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
        {deploymentOptions.map((option) => (
          <DeploymentCard
            key={option.title}
            {...option}
          />
        ))}
      </div>
    </section>
  );
}

function DeploymentCard({ title, text }) {
  return (
    <div className="deployment-card">
      <div className="deployment-icon">
        +
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <span className="deployment-arrow">
        ↗
      </span>
    </div>
  );
}

export default Deployment;