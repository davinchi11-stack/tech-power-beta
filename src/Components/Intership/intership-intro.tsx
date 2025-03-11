import { TrendingUp, UserCheck, Users, Wrench } from "lucide-react";

const feature = [
    {
      title: "Hands-On Learning",
      description:
        "Work on real-world projects, gain industry experience, and build a portfolio that stands out.",
      icon: <Wrench className="size-6" />,
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn from industry leaders who guide, support, and help you unlock your full potential.",
      icon: <UserCheck className="size-6" />,
    },
    {
      title: "Collaborative Environment",
      description:
        "Join a team where ideas matter, innovation thrives, and creativity fuels success.",
      icon: <Users className="size-6" />,
    },
    {
      title: "Career Growth",
      description:
        "Beyond an internship—this is your gateway to networking, job opportunities, and a thriving future.",
      icon: <TrendingUp className="size-6" />,
    },
  ];

const InternshipIntro = () => {
  return (
    <section className="introduction">
      <div >
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <h2 className="text-3xl font-medium md:text-5xl">
            Kickstart Your Career with Our Internship Program!
            </h2>

            <p className="text-muted-foreground md:max-w-2xl">
            Join the <strong>Tech Power Internship Program</strong> and gain real-world experience 
            working alongside industry experts. Whether you're a student, recent graduate, or 
            career switcher, this program is designed to equip you with the skills and mentorship 
            needed to excel in the tech industry.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((feature, idx) => (
            <div
              className="flex flex-col justify-between rounded-lg bg-accent p-6 md:min-h-[300px] md:p-8"
              key={idx}
            >
              <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-lg font-medium md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipIntro;
