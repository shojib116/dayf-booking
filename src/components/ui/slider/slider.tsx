"use client";

import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  ReactNode,
  RefObject,
} from "react";

interface SliderContextProps {
  scroll: (dir: "left" | "right") => void;
  atStart: boolean;
  atEnd: boolean;
  sliderRef: RefObject<HTMLDivElement | null>;
}

export const SliderContext = createContext<SliderContextProps | null>(null);

interface SliderProps {
  children: ReactNode;
  scrollAmount?: number;
  interval?: number;
  autoSlide?: boolean;
  className?: string;
}

export default function Slider({
  children,
  scrollAmount = 300,
  interval = 4000,
  autoSlide = false,
  className,
}: SliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollState = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;

    setAtStart(scrollLeft <= 0);

    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  const scroll = (dir: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateScrollState, 100);
  };

  useEffect(() => {
    updateScrollState();

    const slider = sliderRef.current;

    if (slider) {
      slider.addEventListener("scroll", updateScrollState);
      return () => slider.removeEventListener("scroll", updateScrollState);
    }
  }, []);

  useEffect(() => {
    if (!autoSlide) return;

    const id = setInterval(() => {
      const slider = sliderRef.current;

      if (!slider) return;

      const { scrollLeft, scrollWidth, clientWidth } = slider;

      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }

      setTimeout(updateScrollState, 100);
    }, interval);

    return () => clearInterval(id);
  }, [autoSlide, interval, scrollAmount]);

  return (
    <SliderContext.Provider value={{ scroll, atStart, atEnd, sliderRef }}>
      <div className={`relative ${className}`}>{children}</div>
    </SliderContext.Provider>
  );
}
