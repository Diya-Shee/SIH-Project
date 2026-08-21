import vajraImage from "../../assets/vajra.png";

function ProductHero({ onExplore, onRequestInfo }) {
  return (
    <section className="product-hero">
      <div className="hero-ambient" />

      {/* HERO COPY */}

      <div className="product-hero-copy">
        <div className="eyebrow">
          VAJRA / AUTONOMOUS SECURITY
        </div>

        <h1>
          SECURITY
          <br />
          <span>THAT MOVES.</span>
        </h1>

        <p>
          VAJRA brings perception, intelligence and
          autonomous response into one mobile security system.
        </p>

        <div className="hero-actions">
          <button onClick={onExplore}>
            Explore VAJRA →
          </button>

          <button
            className="ghost-button"
            onClick={onRequestInfo}
          >
            Request information
          </button>
        </div>
      </div>

      {/* ROBOT */}

      <div className="product-robot">

        <div className="robot-hud hud-top">
          <span>UNIT</span>
          <strong>VJ-01</strong>
        </div>

        <div className="robot-hud hud-bottom">
          <span>STATUS</span>
          <strong>OPERATIONAL</strong>
        </div>

        <div className="robot-ring ring-one" />
        <div className="robot-ring ring-two" />

        <div className="robot-status">
          <span />
          SYSTEM ONLINE
        </div>

        <img
          src={vajraImage}
          alt="VAJRA autonomous security robot"
        />

      </div>
    </section>
  );
}

export default ProductHero;