
import { Calendar, MapPinSimple, Timer } from "@phosphor-icons/react";
import { useState } from "react";

const courses = [
  {
    title: "Full Stack Software Development",
    description:
      "Master the art of building dynamic web and mobile applications from start to finish. This course covers both frontend and backend development, equipping you with skills in JavaScript, React, Node.js, databases, and cloud deployment. By the end, you'll be ready to develop and launch full-fledged digital products.",
    location: "Weekday",
    startDate: "Starting Soon",
    duration: "24 Weeks",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description:
      "Learn how to protect systems, networks, and data from cyber threats. This program covers penetration testing, threat analysis, encryption, and ethical hacking techniques, preparing you for top cybersecurity certifications like CEH and CISSP.",
    location: "Weekday",
    startDate: "Starting Soon",
    duration: "24 Weeks",
  },
  {
    title: "Data Science & AI",
    description:
      "Turn raw data into insights and build AI-powered solutions! This course teaches Python, machine learning, deep learning, and data visualization, preparing you for a career in data analytics, AI development, and automation.",
    location: "Weekday",
    startDate: "Starting Soon",
    duration: "24 Weeks",
  },
  {
    title: "Web Design & Development",
    description:
      "Learn to design, develop, and launch responsive websites using modern tools like HTML, CSS, JavaScript, WordPress, and Webflow. Whether you're starting as a freelancer or joining a creative agency, this course will equip you with the skills to build visually appealing and functional websites.",
    location: "Weekday",
    startDate: "Starting Soon",
    duration: "24 Weeks",
  },
  {
    title: "Product (UI/UX) & Graphics Design",
    description:
      "Master the principles of design and user experience (UX) to create stunning digital products. Learn wireframing, prototyping, user research, and branding, using industry-standard tools like Figma, Adobe XD, and Photoshop.",
    location: "Weekday",
    startDate: "Starting Soon",
    duration: "24 Weeks",
  },
  // {
  //   title: "AI Engineering Masterclass (Agentic AI & Generative AI)",
  //   description:
  //     "Advance your AI skills with cutting-edge techniques in Generative AI, Agentic AI, and automation. This course explores LLMs, deep learning architectures, and AI product deployment, preparing you for the next wave of AI innovation.",
  //   location: "Weekday",
  //   startDate: "Mar 12, 2025",
  //   duration: "24 Weeks",
  // },
];

export function HomeCourse () {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < courses.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="home-course">
      <div className="home-course_main wrapper medium">
        <div className="left">
        <h2 data-animation='header' className="title">Enroll in a Course Now!</h2>
        <p data-animation='para' className="description">
          Unlock the power of tech skills and transform your career!
          We offer high-quality, affordable training designed to equip you with in-demand digital skills. 
          Our programs ensure that every student graduates job-ready, with the tools needed to thrive in the global tech industry.
        </p>
        </div>
        <div className="right">
        <div className="course-card">
         <div className="course-details">
         <h3>{courses[currentIndex].title}</h3>
         <p>{courses[currentIndex].description}</p>
         </div>
          <div className="course-info">
            <div className="evn">
              <div className="icon">
              <MapPinSimple size={18} weight="fill" />
              </div>
              <div className="txt">
              <span>{courses[currentIndex].location}</span>
              </div>
            </div>
            <div className="evn">
              <div className="icon">
              <Calendar size={18} weight="fill" />
              </div>
              <div className="txt">
              <span>{courses[currentIndex].startDate}</span>
              </div>
            </div>
            <div className="evn">
              <div className="icon">
              <Timer size={18} weight="fill" />
              </div>
              <div className="txt">
              <span>{courses[currentIndex].duration}</span>
              </div>
            </div>
          </div>
          <div className="btn-enroll">
            <div className="btn btn-en">
              <button>Enroll</button>
            </div>
          <div className="navigation-buttons">
            {currentIndex > 0 && <button onClick={handlePrev}>Prev</button>}
            {currentIndex < courses.length - 1 && <button onClick={handleNext}>Next</button>}
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};




