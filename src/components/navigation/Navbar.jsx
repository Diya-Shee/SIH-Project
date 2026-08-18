import "./Navbar.css";

function Navbar({ onHome }) {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <nav className="navbar">

      <button
        className="navbar-logo"
        onClick={onHome}
      >
        VAJRA<span>®</span>
      </button>

      <div className="navbar-links">

        <button onClick={() => scrollToSection("capabilities")}>
          CAPABILITIES
        </button>

        <button onClick={() => scrollToSection("live-system")}>
          LIVE SYSTEM
        </button>

        <button onClick={() => scrollToSection("deployment")}>
          DEPLOYMENT
        </button>

        <button onClick={() => scrollToSection("contact")}>
          CONTACT
        </button>

      </div>

    </nav>
  );
}

export default Navbar;