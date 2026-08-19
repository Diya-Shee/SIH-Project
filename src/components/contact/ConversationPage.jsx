import { useRef, useState } from "react";
import "./ConversationPage.css";

function ConversationPage() {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);

  const interests = [
    {
      id: "reserve",
      number: "01",
      title: "RESERVE VAJRA",
      description:
        "Bring autonomous protection to your space.",
    },
    {
      id: "explore",
      number: "02",
      title: "EXPLORE THE SYSTEM",
      description:
        "Learn more about how VAJRA works.",
    },
    {
      id: "partner",
      number: "03",
      title: "PARTNER WITH US",
      description:
        "Explore opportunities to build something together.",
    },
    {
      id: "question",
      number: "04",
      title: "ASK A QUESTION",
      description:
        "Tell us what you'd like to know.",
    },
  ];

  const selectedData = interests.find(
    (interest) => interest.id === selectedInterest
  );

  const handleInterestSelect = (id) => {
    setSelectedInterest(id);
    setSubmitted(false);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      document
        .querySelector(".submission-message")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  };

  const renderDynamicFields = () => {
    switch (selectedInterest) {

      case "reserve":
        return (
          <>
            <div className="form-field">
              <label>PHONE NUMBER</label>
              <input
                type="tel"
                placeholder="+91"
                required
              />
            </div>

            <div className="form-field">
              <label>CITY</label>
              <input
                type="text"
                placeholder="Your city"
                required
              />
            </div>

            <div className="form-field full-width">
              <label>WHAT ARE YOU PROTECTING?</label>

              <select required>
                <option value="">
                  Select an option
                </option>

                <option>Home</option>
                <option>Family</option>
                <option>Business</option>
                <option>Other</option>
              </select>
            </div>
          </>
        );

      case "explore":
        return (
          <div className="form-field full-width">
            <label>WHAT WOULD YOU LIKE TO KNOW?</label>

            <textarea
              rows="5"
              placeholder="Tell us what you'd like to explore."
              required
            />
          </div>
        );

      case "partner":
        return (
          <>
            <div className="form-field">
              <label>ORGANISATION</label>

              <input
                type="text"
                placeholder="Company or organisation name"
                required
              />
            </div>

            <div className="form-field">
              <label>YOUR ROLE</label>

              <input
                type="text"
                placeholder="Your role"
              />
            </div>

            <div className="form-field full-width">
              <label>HOW WOULD YOU LIKE TO PARTNER?</label>

              <textarea
                rows="5"
                placeholder="Tell us about your idea."
                required
              />
            </div>
          </>
        );

      case "question":
        return (
          <div className="form-field full-width">
            <label>YOUR QUESTION</label>

            <textarea
              rows="5"
              placeholder="Ask us anything."
              required
            />
          </div>
        );

      default:
        return null;
    }
  };

  const getButtonText = () => {
    switch (selectedInterest) {
      case "reserve":
        return "SEND RESERVATION";

      case "explore":
        return "SEND ENQUIRY";

      case "partner":
        return "SEND PARTNERSHIP REQUEST";

      case "question":
        return "SEND QUESTION";

      default:
        return "SEND REQUEST";
    }
  };

  return (
    <main className="conversation-page">

      <section className="conversation-hero">

        <div className="eyebrow">
          VAJRA / CONTACT
        </div>

        <h1>
          LET'S
          <br />
          <span>TALK.</span>
        </h1>

        <p className="conversation-intro">
          Every situation is different.
          <br />
          Tell us what brings you here,
          and we'll take it from there.
        </p>

      </section>


      <section className="interest-section">

        <p className="interest-label">
          WHAT BRINGS YOU HERE?
        </p>

        <div className="interest-grid">

          {interests.map((interest) => (
            <button
              key={interest.id}
              className={`interest-card ${
                selectedInterest === interest.id
                  ? "is-selected"
                  : ""
              }`}
              onClick={() =>
                handleInterestSelect(interest.id)
              }
            >

              <span className="interest-number">
                {interest.number}
              </span>

              <div>
                <h2>{interest.title}</h2>

                <p>
                  {interest.description}
                </p>
              </div>

              <span className="interest-arrow">
                →
              </span>

            </button>
          ))}

        </div>

      </section>


      {selectedInterest && (
        <section
          className="conversation-form-section"
          ref={formRef}
        >

          {!submitted ? (
            <>

              <div className="form-heading">

                <div className="eyebrow">
                  {selectedData.title}
                </div>

                <h2>
                  LET'S START
                  <br />
                  <span>HERE.</span>
                </h2>

              </div>


              <form
                className="conversation-form"
                onSubmit={handleSubmit}
              >

                <div className="form-field">
                  <label>FULL NAME</label>

                  <input
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>


                <div className="form-field">
                  <label>EMAIL ADDRESS</label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>


                {renderDynamicFields()}


                <button
                  type="submit"
                  className="conversation-submit"
                >
                  {getButtonText()}
                  <span>→</span>
                </button>

              </form>

            </>
          ) : (

            <div className="submission-message">

              <div className="eyebrow">
                REQUEST RECEIVED
              </div>

              <h2>
                WE'VE GOT
                <br />
                <span>YOU.</span>
              </h2>

              <p>
                Thanks for reaching out.
                Your request has been recorded.
              </p>

              <button
                className="conversation-submit"
                onClick={() => {
                  setSelectedInterest(null);
                  setSubmitted(false);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                START AGAIN
                <span>↗</span>
              </button>

            </div>

          )}

        </section>
      )}

    </main>
  );
}

export default ConversationPage;