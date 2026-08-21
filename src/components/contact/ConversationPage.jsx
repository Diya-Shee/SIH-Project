import { useRef, useState } from "react";
import "./ConversationPage.css";
import Navbar from "../navigation/Navbar";

function ConversationPage({ onBack }) {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    organisation: "",
    role: "",
    protection: "",
  });

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

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = new FormData();

  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("_replyto", formData.email);
  form.append(
    "_subject",
    `New VAJRA ${selectedData.title} Request`
  );

  if (selectedInterest === "reserve") {
    form.append("phone", formData.phone);
    form.append("city", formData.city);
    form.append(
      "what_are_you_protecting",
      formData.protection
    );
  }

  if (selectedInterest === "partner") {
    form.append(
      "organisation",
      formData.organisation
    );
    form.append("role", formData.role);
  }

  form.append("message", formData.message);

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/gayatridey7044@gmail.com",
      {
        method: "POST",
        body: form,
      }
    );

    if (response.ok) {
      setSubmitted(true);

      setTimeout(() => {
        document
          .querySelector(".submission-message")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 100);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Unable to send your request. Please try again.");
  }
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
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="form-field">
              <label>CITY</label>

              <input
                type="text"
                placeholder="Your city"
                value={formData.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    city: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="form-field full-width">
              <label>WHAT ARE YOU PROTECTING?</label>

              <select
                value={formData.protection}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    protection: e.target.value,
                  })
                }
                required
              >
                <option value="">
                  Select an option
                </option>

                <option value="Home">Home</option>
                <option value="Family">Family</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
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
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
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
                value={formData.organisation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    organisation: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="form-field">
              <label>YOUR ROLE</label>

              <input
                type="text"
                placeholder="Your role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    role: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="form-field full-width">
              <label>HOW WOULD YOU LIKE TO PARTNER?</label>

              <textarea
                rows="5"
                placeholder="Tell us about your idea."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
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
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
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

      <Navbar
        onHome={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        onBack={onBack}
      />

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
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form-field">
                  <label>EMAIL ADDRESS</label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
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