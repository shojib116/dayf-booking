import AboutProperty from "@/components/layout/main/about-property";
import HotelAvailibility from "@/components/layout/main/hotel-availability";
import HotelDetails from "@/components/layout/main/hotel-details";
import HotelPreview from "@/components/layout/main/hotel-preview";

export default function Home() {
  return (
    <main className="mt-10 font-sans">
      <HotelPreview />
      <HotelDetails />
      <HotelAvailibility />
      <AboutProperty />
    </main>
  );
}
