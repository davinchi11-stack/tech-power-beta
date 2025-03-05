import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ai from '../../../assets/ai.jpg'

import { Button } from "@/Components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
import { Link } from "react-router-dom";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "Full Stack Software Development",
    title: "Full Stack Software Development",
    description:
    "Master the art of building dynamic web and mobile applications from start to finish. This course covers both frontend and backend development, equipping you with skills in JavaScript, React, Node.js, databases, and cloud deployment. By the end, you'll be ready to develop and launch full-fledged digital products.",
    href: "",
    image:  "https://ik.imagekit.io/llti1cebs/techpower/ct-two.jpg?tr=f-webp"
  },
  {
    id: "Cybersecurity & Ethical Hacking",
    title: "Cybersecurity & Ethical Hacking",
    description:
    "Learn how to protect systems, networks, and data from cyber threats. This program covers penetration testing, threat analysis, encryption, and ethical hacking techniques, preparing you for top cybersecurity certifications like CEH and CISSP.",
    href: "",
    image: "https://ik.imagekit.io/llti1cebs/techpower/laptop.jpg?tr=f-webp"
  },
  {
    id: "Data Science & AI",
    title: "Data Science & AI",
    description:
    "Turn raw data into insights and build AI-powered solutions! This course teaches Python, machine learning, deep learning, and data visualization, preparing you for a career in data analytics, AI development, and automation.",
    href: "",
    image: "https://ik.imagekit.io/llti1cebs/techpower/data-sci.jpg?tr=f-webp"
  },
  {
    id: "Web Design & Development",
    title: "Web Design & Development",
    description:
    "Learn to design, develop, and launch responsive websites using modern tools like HTML, CSS, JavaScript, WordPress, and Webflow. Whether you're starting as a freelancer or joining a creative agency, this course will equip you with the skills to build visually appealing and functional websites.",
    href: "",
    image: "https://ik.imagekit.io/llti1cebs/techpower/webner.jpg?tr=f-webp"
  },
  {
    id: "AI Engineering Masterclass",
    title: "AI Engineering Masterclass",
    description:
          "Advance your AI skills with cutting-edge techniques in Generative AI, Agentic AI, and automation. This course explores LLMs, deep learning architectures, and AI product deployment, preparing you for the next wave of AI innovation.",
    href: "",
    image: ai
  },
];

const Gallery4 = ({
  title = "Enroll in a Course Now",
  description = " Unlock the power of tech skills and transform your career! We offer high-quality, affordable training designed to equip you with in-demand digital skills. Our programs ensure that every student graduates job-ready, with the tools needed to thrive in the global tech industry.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-lg">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {data.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <Link to="/programs" className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,var(--primary)_100%)] mix-blend-multiply" />
                    <div className="text-primary-foreground absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
