import HotelDetails from "@/components/layout/main/hotel-details";
import HotelPreview from "@/components/layout/main/hotel-preview";

export default function Home() {
  return (
    <main className="mt-10 font-sans">
      <HotelPreview />
      <HotelDetails />
    </main>
  );
}
