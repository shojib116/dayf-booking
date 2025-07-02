import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function HotelDetails() {
  return (
    <section className="container max-sm:px-4 mb-7.5">
      <div className="flex justify-between">
        <div className="min-w-162 min-h-71">
          <Tabs defaultValue="over-view">
            <TabsList className="flex gap-7.5 items-center text-grey-500 mb-6.5">
              <TabsTrigger value="over-view">Over View</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger
                value="message"
                className="flex items-center gap-1.5 text-white bg-blue-500 px-2.5 py-1 h-full rounded-[20px]"
                applyStyle={false}
              >
                <Image
                  src="/notification-bubble-blank.svg"
                  alt="notification icon"
                  height={26}
                  width={26}
                />
                Message
              </TabsTrigger>
            </TabsList>
            <TabsContent value="over-view">
              <div className="!font-urbanist">
                <div className="flex gap-5 max-w-89 flex-wrap">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Property Type
                    </h3>
                    <Attributes
                      src="/house.svg"
                      alt="house icon"
                      text="Resorts"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Property Size
                    </h3>
                    <Attributes
                      src="/home.svg"
                      alt="home icon"
                      text="12000 sqft"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Features</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      <Attributes src="/wifi.svg" alt="wifi icon" text="Wifi" />
                      <Attributes
                        src="/dining.svg"
                        alt="dining icon"
                        text="Dining"
                      />
                      <Attributes
                        src="/swimming.svg"
                        alt="swimming icon"
                        text="Swimming Pool"
                      />
                      <Attributes
                        src="/air-cond.svg"
                        alt="air conditioner icon"
                        text="Air Conditioning"
                      />
                      <Attributes
                        src="/gym-weight.svg"
                        alt="gym weight icon"
                        text="Gym"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex items-center justify-center grow">
          <div className="flex flex-col justify-center border w-67 h-60 px-7.75 rounded-xl border-blue-400">
            <p>1 week, 2 adults, 1 child</p>
            <h3 className="font-bold text-xl mt-2 mb-5">USD $6,112</h3>
            <button className="p-2 bg-blue-500 text-white rounded-3xl text-sm">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Attributes({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}) {
  return (
    <p className="flex items-center gap-2">
      <Image src={src} alt={alt} height={36} width={36} /> {text}
    </p>
  );
}
