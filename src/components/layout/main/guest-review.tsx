"use client";

import Card from "@/components/ui/card";
import Slider from "@/components/ui/slider";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function GuestReviews() {
  return (
    <section className="container max-sm:px-4 mb-7.5">
      <h3 className="text-xl font-bold text-grey-800 mb-3">
        What Our Guests Say
      </h3>

      <Slider>
        <div className="flex justify-between mb-5.5 py-2.5 px-20.5">
          <div className="flex gap-3">
            <Slider.LeftButton className="w-10.5 h-10.5 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <ArrowLeftIcon size={20} />
            </Slider.LeftButton>
            <Slider.RightButton className="w-10.5 h-10.5 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <ArrowRightIcon size={20} />
            </Slider.RightButton>
          </div>
          <button className="p-2.5 border-b border-b-blue-500 flex gap-2 items-center text-blue-500">
            See All.. <ArrowRightIcon size={20} />
          </button>
        </div>

        <Slider.Track>
          <Slider.Slide>
            <Card className="max-w-153 h-full">
              <Card.Title>"Breathtaking Views and Luxury Comfort"</Card.Title>
              <Card.Description>
                "The Executive Suite exceeded all my expectations! The panoramic
                views of the Mediterranean Sea were absolutely stunning. The
                suite was spacious, immaculately clean, and the modern decor
                made me feel right at home. The bathroom was luxurious, and the
                amenities provided were top-notch. Perfect for both work and
                relaxation!"
              </Card.Description>
              <div className="mb-3">
                <Image
                  src="/stars.svg"
                  alt="5 star icon"
                  width={137}
                  height={25}
                />
              </div>
              <Card.Footer className="font-roboto flex items-end justify-between">
                <div className="text-xl text-grey-800">— Sofia B., France</div>
                <time className="text-xs">23.10.2024</time>
              </Card.Footer>
            </Card>
          </Slider.Slide>
          <Slider.Slide>
            <Card className="max-w-153 h-full">
              <Card.Title>
                “Exceptional Stay with Excellent Amenities”
              </Card.Title>
              <Card.Description>
                "The Executive Suite provided an exceptional experience. The
                room was spotless, elegantly designed, and equipped with
                everything you could need. The marble bathroom with its bathtub
                and walk-in shower was pure luxury. The location is perfect for
                exploring the city, and the staff truly makes you feel welcome."
              </Card.Description>
              <div className="mb-3">
                <Image
                  src="/stars.svg"
                  alt="5 star icon"
                  width={137}
                  height={25}
                />
              </div>
              <Card.Footer className="font-roboto flex items-end justify-between">
                <div className="text-xl text-grey-800">
                  — Youssef R., Morocco
                </div>
                <time className="text-xs">23.10.2024</time>
              </Card.Footer>
            </Card>
          </Slider.Slide>
          <Slider.Slide>
            <Card className="max-w-153 h-full">
              <Card.Title>
                “Exceptional Stay with Excellent Amenities”
              </Card.Title>
              <Card.Description>
                "The Executive Suite provided an exceptional experience. The
                room was spotless, elegantly designed, and equipped with
                everything you could need. The marble bathroom with its bathtub
                and walk-in shower was pure luxury. The location is perfect for
                exploring the city, and the staff truly makes you feel welcome."
              </Card.Description>
              <div className="mb-3">
                <Image
                  src="/stars.svg"
                  alt="5 star icon"
                  width={137}
                  height={25}
                />
              </div>
              <Card.Footer className="font-roboto flex items-end justify-between">
                <div className="text-xl text-grey-800">
                  — Youssef R., Morocco
                </div>
                <time className="text-xs">23.10.2024</time>
              </Card.Footer>
            </Card>
          </Slider.Slide>
        </Slider.Track>
      </Slider>
    </section>
  );
}
