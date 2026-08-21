import { useState } from "react";
import "./App.css";

import { scenarios } from "./data/experienceData";

import SystemBar from "./components/SystemBar";

import IntroScreen from "./components/onboarding/IntroScreen";
import ConcernScreen from "./components/onboarding/ConcernScreen";
import ScenarioScreen from "./components/onboarding/ScenarioScreen";
import ProblemScreen from "./components/onboarding/ProblemScreen";

import VajraReveal from "./components/reveal/VajraReveal";

import Navbar from "./components/navigation/Navbar";

import ProductHero from "./components/product/ProductHero";
import Capabilities from "./components/product/Capabilities";
import LiveSystem from "./components/product/LiveSystem";
import Deployment from "./components/product/Deployment";
import FinalCTA from "./components/product/FinalCTA";
import Footer from "./components/product/Footer";
import ConversationPage from "./components/contact/ConversationPage";

function App() {
  const [stage, setStage] = useState("intro");

  const [concern, setConcern] = useState(null);

  const [scenarioChoice, setScenarioChoice] = useState(null);

  const [hoveredConcern, setHoveredConcern] = useState(null);


  /* -------------------------------------------------------
     CONCERN
  ------------------------------------------------------- */

  const selectConcern = (item) => {
  setConcern(item);
  setHoveredConcern(null);

  window.scrollTo({
    top: 0,
    behavior: "auto",
  });

  setStage("scenario");
};


  /* -------------------------------------------------------
     SCENARIO
  ------------------------------------------------------- */

  const selectScenario = (option) => {
  setScenarioChoice(option);

  window.scrollTo({
    top: 0,
    behavior: "auto",
  });

  setStage("problem");
};

  /* -------------------------------------------------------
   BACK NAVIGATION
------------------------------------------------------- */

const goBack = () => {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });

  if (stage === "concerns") {
    setStage("intro");
  }

  else if (stage === "scenario") {
    setScenarioChoice(null);
    setStage("concerns");
  }

  else if (stage === "problem") {
    setScenarioChoice(null);
    setStage("scenario");
  }

  else if (stage === "reveal") {
    setStage("problem");
  }
};

  /* -------------------------------------------------------
     RESET
  ------------------------------------------------------- */

  const resetExperience = () => {
    setConcern(null);
    setScenarioChoice(null);
    setHoveredConcern(null);

    setStage("intro");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  /* -------------------------------------------------------
     ENTER VAJRA SYSTEM
  ------------------------------------------------------- */

  const enterSystem = () => {
    setStage("experience");
     window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };


  /* -------------------------------------------------------
     CURRENT SCENARIO
  ------------------------------------------------------- */

  const currentScenario = concern
    ? scenarios[concern.id]
    : null;


  return (
    <main
      className={`app stage-${stage}`}
      data-concern={
        hoveredConcern ||
        concern?.id ||
        ""
      }
    >

      {/* GLOBAL ATMOSPHERE */}

      <div className="noise" />

      <div className="grid-background" />

      <div className="ambient-orb orb-one" />

      <div className="ambient-orb orb-two" />


      {/* SYSTEM BAR */}

      <SystemBar
        stage={stage}
        onReset={resetExperience}
      />


      {/* =================================================
          ONBOARDING
      ================================================= */}

      {stage === "intro" && (
        <IntroScreen
          onBegin={() =>
            setStage("concerns")
          }
        />
      )}


      {stage === "concerns" && (
        <ConcernScreen
          hoveredConcern={hoveredConcern}
          onHover={setHoveredConcern}
          onLeave={() =>
            setHoveredConcern(null)
          }
          onSelect={selectConcern}
          onBack={goBack}
        />
      )}


      {stage === "scenario" && currentScenario && (
        <ScenarioScreen
          concern={concern}
          onSelectScenario={selectScenario}
          onBack={goBack}
        />
      )}


     {stage === "problem" && (
  <ProblemScreen
    scenarioChoice={scenarioChoice}
    onContinue={() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      setStage("reveal");
    }}
    onBack={goBack}
  />
)}


      {/* =================================================
          VAJRA REVEAL
      ================================================= */}

      {stage === "reveal" && (
        <VajraReveal
          onEnterSystem={enterSystem}
          onBack={goBack}
        />
      )}


      {/* =================================================
          PRODUCT EXPERIENCE
      ================================================= */}

     {stage === "experience" && (
  <div className="product-site">
    <Navbar
      onHome={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      onBack={() => setStage("reveal")}
    />

    <ProductHero
      onExplore={() =>
        document
          .getElementById("capabilities")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      onRequestInfo={() =>
        document
          .getElementById("contact")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
      }
    />

    <Capabilities />
    <LiveSystem />
    <Deployment />
    <FinalCTA
  onStartConversation={() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    setStage("contact");
  }}
/>

          <Footer />

        </div>
      )}
      {stage === "contact" && (
        <ConversationPage 
          onBack={() => setStage("experience")}
        />
      )}

    </main>
  );
}


export default App;