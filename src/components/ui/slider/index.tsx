"use client";

import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  RefObject,
} from "react";

interface SliderContextProps {
  scroll: (dir: "left" | "right") => void;
  atStart: boolean;
  atEnd: boolean;
  sliderRef: RefObject<HTMLDivElement | null>;
}

const SliderContext = createContext<SliderContextProps | null>(null);

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

Slider.Track = function Track({
  children,
  className,
  hideScrollbar = true,
}: {
  children: ReactNode;
  className?: string;
  hideScrollbar?: boolean;
}) {
  const context = useContext(SliderContext);
  if (!context) return null;
  const { sliderRef } = context;
  return (
    <div
      ref={sliderRef}
      className={`overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 ${
        hideScrollbar ? "hide-scrollbar" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

Slider.Slide = function Slide({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`snap-start shrink-0 flex items-center justify-center min-h-full ${className}`}
    >
      {children}
    </div>
  );
};

Slider.LeftButton = function LeftButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const context = useContext(SliderContext);
  if (!context) return null;
  const { scroll, atStart } = context;
  return (
    <button
      onClick={() => scroll("left")}
      disabled={atStart}
      className={`${
        atStart ? "bg-grey-500/10 text-grey-500/50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

Slider.RightButton = function RightButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const context = useContext(SliderContext);
  if (!context) return null;
  const { scroll, atEnd } = context;
  return (
    <button
      onClick={() => scroll("right")}
      disabled={atEnd}
      className={`${
        atEnd ? "bg-grey-500/10 text-grey-500/50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};
