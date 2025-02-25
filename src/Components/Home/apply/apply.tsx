import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const steps = [
  {
    title : "Find Your Perfect Tech Path",
    description : "Choosing the right tech course is crucial for your success. Our professional counselors will guide you through your options, helping you make an informed decision before applying"
  },
  {
    title: "Apply",
    description:
      "Start by applying for one of our tech courses that match your interests and career goals. It’s quick, easy, and will set you on the path to success.",
  },
  {
    title: "Get Admitted",
    description:
      "Once we confirm your payment, we’ll reserve your spot in the program. You’ll receive details for your onboarding process, preparing you for an impactful learning journey.",
  },
  {
    title: "Start Classes",
    description:
      "Attend the introductory sessions to lay a strong foundation. From there, you’ll dive into projects, hands-on tasks, and group collaborations that will sharpen your skills and prepare you for real-world opportunities.",
  },
];

const AutoSlider = () => {
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

export default AutoSlider;
