
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://ik.imagekit.io/llti1cebs/techpower/Jumia-Logo-768x432.png?updatedAt=1741704839239",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://www.wemabank.com/assets/wemaFull-55brX0lO.svg",
      className: "h-28 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://ik.imagekit.io/llti1cebs/techpower/to-desk-removebg-preview.png?updatedAt=1741704548792",
      className: "h-28 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://www.fidelitybank.ng/wp-content/uploads/2020/07/Fidelity_Bank_Plc_Main_Logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://ik.imagekit.io/llti1cebs/techpower/omeg-2-removebg-preview.png?updatedAt=1741705203194",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://www.liviasoft.com/wp-content/uploads/2015/12/logo.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://ik.imagekit.io/llti1cebs/techpower/nation-ass.png?updatedAt=1741705914856",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://ik.imagekit.io/llti1cebs/techpower/lg.png?updatedAt=1741706072198",
      className: "h-7 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section style={{background: "#fff"}} className="py-64">
      <div className="container flex flex-col items-center text-center">
        <h1 style={{color: "#082a5e"}} className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                         
                        src={logo.image}
                        alt={logo.description}
                        className={`scroll-img`}
                      />
                      {/* <img src={logo.image} alt={logo.description} className="h-6 w-auto max-w-[100px]" /> */}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
