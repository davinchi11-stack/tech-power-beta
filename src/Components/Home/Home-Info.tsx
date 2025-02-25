

export function HomeInfo() {
  const features = [
    {
      title: "Future-Ready Learning",
      description:
        "At TechPower, we don’t just teach tech—we empower you with the skills and opportunities needed to thrive in the digital economy.",
      image: "https://img.icons8.com/?size=100&id=16Ne6ZK7nvPI&format=png&color=000000",
    },
    {
      title: "Cutting-Edge Training",
      description:
        "Our programs offer hands-on learning, supported by expert instructors and high-speed tools to keep you ahead in tech.",
      image: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
    },
    {
      title: "Industry Mentors",
      description:
        "Learn from professionals who are passionate about guiding the next generation of tech innovators.",
      image: "https://cdn-icons-png.flaticon.com/512/1089/1089129.png",
    },
    {
      title: "Global Job Placement",
      description:
        "We connect our graduates with top global tech companies and career mentorship to land dream roles.",
      image: "https://cdn-icons-png.flaticon.com/512/1040/1040256.png",
    },
    {
      title: "Certifications",
      description:
        "Earn globally recognized certifications that showcase your skills and expertise to employers.",
      image: "https://img.icons8.com/?size=100&id=zfpbxzdOhFY8&format=png&color=000000",
    },
    {
      title: "Hands-on Projects",
      description:
        "Get real-world experience by working on tech projects that simulate actual industry challenges.",
      image: " https://cdn-icons-png.flaticon.com/512/1106/1106933.png",
    },
  ];

  return (
    <section className="home-info">
       <div className="home-info_main wrapper medium">
       <h2 data-animation='scale-para' className="heading">Why <span>TechPower?</span></h2>
        <div className="features">
            {features.map((feature, index) => (
            <div className="card" key={index}>
                <img src={feature.image} alt={feature.title} className="icon" />
                <h3 data-animation='header'>{feature.title}</h3>
                <p data-animation='para' >{feature.description}</p>
            </div>
            ))}
        </div>
       </div>
    </section>
  );
}


