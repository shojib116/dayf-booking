import AboutProperty from "@/components/layout/main/about-property";
import AreaInfo from "@/components/layout/main/area-info";
import GuestReviews from "@/components/layout/main/guest-review";
import HotelAvailibility from "@/components/layout/main/hotel-availability";
import HotelDetails from "@/components/layout/main/hotel-details";
import HotelPreview from "@/components/layout/main/hotel-preview";
import Policies from "@/components/layout/main/policies";
import Recommendation from "@/components/layout/main/recommendation";

export default function Home() {
  return (
    <main className="mt-10 font-sans">
      <HotelPreview />
      <HotelDetails />
      <HotelAvailibility />
      <AboutProperty />
      <AreaInfo />
      <GuestReviews />
      <Policies />
      <Recommendation />
    </main>
  );
}
