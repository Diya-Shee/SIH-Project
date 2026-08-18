// =========================================================
// VAJRA EXPERIENCE DATA
// =========================================================

export const concerns = [
  {
    id: "intrusion",
    icon: "◉",
    title: "Someone entering",
    subtitle: "You don't know who's there.",
    tag: "SECURITY",
  },
  {
    id: "incident",
    icon: "△",
    title: "Something going wrong",
    subtitle: "Fire. Smoke. An unexpected event.",
    tag: "INCIDENT",
  },
  {
    id: "family",
    icon: "○",
    title: "Family",
    subtitle: "You want to know they're safe.",
    tag: "PEOPLE",
  },
  {
    id: "pets",
    icon: "⌁",
    title: "Pets",
    subtitle: "They're home. You're not.",
    tag: "CARE",
  },
  {
    id: "unknown",
    icon: "?",
    title: "Not knowing",
    subtitle: "The uncertainty is the problem.",
    tag: "AWARENESS",
  },
];

export const scenarios = {
  intrusion: {
    eyebrow: "SCENARIO 01 / INTRUSION",
    title: "YOU'RE AWAY.",
    text: "Your phone suddenly lights up.",
    alert: "UNUSUAL ACTIVITY DETECTED",
    location: "NORTH ENTRY",
    confidence: "94%",
    question: "What would you do?",
    options: [
      "Check the camera",
      "Call someone nearby",
      "Wait for more information",
    ],
  },

  incident: {
    eyebrow: "SCENARIO 02 / INCIDENT",
    title: "SOMETHING IS WRONG.",
    text: "You're kilometres away. An alert appears.",
    alert: "ENVIRONMENTAL ANOMALY DETECTED",
    location: "MAIN FLOOR",
    confidence: "91%",
    question: "What's your first instinct?",
    options: [
      "Check the cameras",
      "Call for help",
      "Try to understand what happened",
    ],
  },

  family: {
    eyebrow: "SCENARIO 03 / FAMILY",
    title: "THEY'RE HOME.",
    text: "But you're not.",
    alert: "UNEXPECTED ACTIVITY DETECTED",
    location: "LIVING AREA",
    confidence: "96%",
    question: "What would give you peace of mind?",
    options: [
      "See what's happening",
      "Get an immediate alert",
      "Know someone can respond",
    ],
  },

  pets: {
    eyebrow: "SCENARIO 04 / PETS",
    title: "THEY'RE HOME ALONE.",
    text: "Something happens while you're away.",
    alert: "UNEXPECTED ACTIVITY",
    location: "GROUND FLOOR",
    confidence: "89%",
    question: "What would you want?",
    options: [
      "See what happened",
      "Receive an alert",
      "Have something respond",
    ],
  },

  unknown: {
    eyebrow: "SCENARIO 05 / UNCERTAINTY",
    title: "YOU DON'T KNOW.",
    text: "And that's exactly what makes it uncomfortable.",
    alert: "SITUATION REQUIRES ATTENTION",
    location: "UNRESOLVED",
    confidence: "87%",
    question: "What would actually help?",
    options: [
      "More information",
      "A faster warning",
      "Someone to respond",
    ],
  },
};