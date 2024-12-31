import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { FaMapMarkerAlt, FaCar, FaSmile } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../ui/carousel";

const HowItWorks = () => {
  const steps = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      description: "Pick the location and the date.",
    },
    {
      icon: FaCar,
      title: "Choose A Car",
      description: "Select the car you like.",
    },
    {
      icon: FaSmile,
      title: "Enjoy Your Ride",
      description: "Explore new sights and places with comfort.",
    },
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div >
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-[#970747] text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          How To Rent
        </h1>
        <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold">
          Simple & Easy Steps
        </h2>
        <p className="text-black mt-4 text-sm md:text-base lg:text-lg">
          Choose Location, Car & Enjoy Your Ride
          <br />
          When you finish, return the car to one of our parking stations.
        </p>
      </div>


      {/* Carousel Section for small screens */}
      <div className="md:hidden">
        <div className="mx-auto max-w-xs">
          <Carousel setApi={setApi} className="w-full max-w-xs cursor-pointer">
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index}>
                  <Card className="text-center transition-transform duration-300 hover:scale-105">
                    <CardHeader>
                      <step.icon className="text-[#970747] w-12 h-12 mx-auto mb-4" />
                      <CardTitle className="text-[#970747] text-lg font-semibold">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base">{step.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Step {current} of {count}
          </div>
        </div>
      </div>

      
      <div className="hidden md:flex md:flex-wrap justify-center gap-6 sm:gap-8 cursor-pointer">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="w-full sm:w-[300px] text-center transition-transform duration-300 hover:scale-105"
          >
            <CardHeader>
              <step.icon className="text-[#970747] w-12 h-12 mx-auto mb-4" />
              <CardTitle className="text-[#970747] text-lg font-semibold">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
