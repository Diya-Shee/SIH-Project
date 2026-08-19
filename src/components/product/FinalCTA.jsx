function FinalCTA() {
  const startConversation = () => {
    window.location.href =
      "mailto:contact@vajrasecurity.com" +
      "?subject=" +
      encodeURIComponent("Let's talk about VAJRA") +
      "&body=" +
      encodeURIComponent(
        "Hi VAJRA team,\n\nI'd like to learn more about your autonomous security system.\n\n"
      );
  };

  return (
    <section 
        id="contact"
        className="final-cta">
      <div className="cta-glow" />

      <div className="eyebrow">
        VAJRA / NEXT GENERATION SECURITY
      </div>

      <h2>
        WHEN SOMETHING
        <br />
        <span>HAPPENS.</span>
      </h2>

      <p>
        Don't just know about it.
        <br />
        Be ready to respond.
      </p>

      <button
        className="cta-button"
        onClick={startConversation}
      >
        Start a conversation →
      </button>
    </section>
  );
}

export default FinalCTA;