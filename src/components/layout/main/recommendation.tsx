import Card from "@/components/ui/card";
import Image from "next/image";
import { Slider, SliderSlide, SliderTrack } from "@/components/ui/slider";
import { InfoIcon } from "lucide-react";

export default function Recommendation() {
  return (
    <section className="container max-sm:px-4 mb-7.5">
      <h3 className="text-xl font-bold text-grey-800 mb-3">
        You may also like
      </h3>
      <Slider autoSlide scrollAmount={150} interval={3000} className="mb-10">
        <SliderTrack className="gap-7.5">
          {[...Array(10)].map((_, idx) => (
            <RecommendationSlide key={idx} />
          ))}
        </SliderTrack>
      </Slider>

      <Slider autoSlide scrollAmount={150} interval={3000}>
        <SliderTrack className="gap-7.5">
          {[...Array(10)].map((_, idx) => (
            <RecommendationSlide key={idx} />
          ))}
        </SliderTrack>
      </Slider>
    </section>
  );
}

function RecommendationSlide() {
  return (
    <SliderSlide>
      <Card className="border-0 max-w-81.5 !p-0">
        <div>
          <Image
            src="/sofitel.svg"
            alt="image of sofitel garden"
            width={326}
            height={243}
          />
        </div>
        <Card.Title className="mt-3 mb-2">
          Sofitel Algiers Hamma Garden
        </Card.Title>
        <Card.Description className="!mb-2">
          Sofitel Algiers Hamma Garden offers luxurious accommodations
          overlooking the stunning Botanical Garden of Hamma.
        </Card.Description>
        <div className="text-lg mb-2">
          699 <sub>Per Night</sub>
        </div>
        <div className="flex justify-between px-1.75 items-center mb-3">
          <div className="text-sm flex items-center gap-1 text-grey-800">
            <Image src="/door.svg" alt="door icon" width={20.5} height={20.5} />
            <span>
              2 <sub>Bedroom</sub>
            </span>
          </div>

          <div className="text-sm flex items-center gap-1 text-grey-800">
            <Image
              src="/bathtub.svg"
              alt="bathtub icon"
              width={20}
              height={20}
            />
            <span>
              2 <sub>Bathroom</sub>
            </span>
          </div>

          <div className="text-sm flex items-center gap-1 text-grey-800">
            <Image
              src="/full-screen-corner.svg"
              alt="full screen corner icon"
              width={20}
              height={20}
            />
            <span>
              1200 <sub>sq ft</sub>
            </span>
          </div>
        </div>
        <Card.Footer>
          <div className="flex gap-8.75">
            <button className="bg-blue-500 py-2.5 text-white text-xl font-semibold rounded-[2.25rem] grow">
              Book Now
            </button>
            <button className="bg-blue-500/10 w-11.5 h-11.5 rounded-full flex items-center justify-center">
              <InfoIcon size={24} className="text-blue-500" strokeWidth={1} />
            </button>
          </div>
        </Card.Footer>
      </Card>
    </SliderSlide>
  );
}
