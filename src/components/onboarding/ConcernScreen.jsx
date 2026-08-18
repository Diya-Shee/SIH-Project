import { concerns } from "../../data/experienceData";

function ConcernScreen({
  hoveredConcern,
  onHover,
  onLeave,
  onSelect,
}) {
  return (
    <section className="experience-screen choice-screen">
      <div className="section-intro">
        <div className="eyebrow">
          01 / YOUR CONCERN
        </div>

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
            style={{
              "--delay": `${index * 80}ms`,
            }}
            onMouseEnter={() => onHover(item.id)}
            onMouseLeave={onLeave}
            onFocus={() => onHover(item.id)}
            onClick={() => onSelect(item)}
          >
            <div className="card-top">
              <span className="card-number">
                0{index + 1}
              </span>

              <span className="card-tag">
                {item.tag}
              </span>
            </div>

            <div className="card-icon">
              {item.icon}
            </div>

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>

            <div className="card-arrow">
              ↗
            </div>

            <div className="card-progress">
              <span />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ConcernScreen;