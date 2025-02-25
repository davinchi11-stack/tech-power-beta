
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const steps = [
  // {
  //   title: "Age Requirement",
  //   description:
  //     "Applicants must be at least 18 years old or meet the minimum age requirement for the selected course.",
  // },
  {
    title: "Educational Background",
    description:
      "A basic understanding of IT or a high school diploma is required. Some advanced courses may require prior knowledge or experience.",
  },
  {
    title: "Financial Need",
    description:
      " Scholarships are awarded based on financial need, giving priority to those who may not have access to quality education.",
  },
  {
    title: "Commitment to Completion",
    description:
      "Applicants must be dedicated to completing the full course and actively participating in assignments and projects.",
  },
  {
    title: " Residency & Location",
    description:
      "Open to African students looking to advance their careers through technology training.",
  },
];

const AutoSliderEligible = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="auto-slider">
      <div className="step-tracker">
        {steps.map((_, index) => (
          <div key={index} className="step">
            <div
              className={`step-number ${currentStep === index ? "active" : ""}`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <motion.div
                className="progress-bar"
                animate={{
                  backgroundColor: currentStep > index ? "#6f42c1" : "#ccc",
                  width: currentStep > index ? "40px" : "20px",
                }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>
        ))}
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="step-content"
      >
        <h2>{steps[currentStep].title}</h2>
        <p>{steps[currentStep].description}</p>
      </motion.div>
    </div>
  );
};

export default AutoSliderEligible;
