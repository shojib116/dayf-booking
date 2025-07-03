import Image from "next/image";

type Destination = {
  place: string;
  distance: string;
};

export default function AreaInfo() {
  const restaurants = Array(3).fill({ place: "Blue Cafe", distance: "1.4 km" });
  const shops = Array(3).fill({ place: "Central Mall", distance: "1.4 km" });
  const beaches = Array(3).fill({
    place: "Les Dunes Beach",
    distance: "1.4 km",
  });
  const transport = Array(3).fill({
    place: "Metro - Cityline Metro Hub",
    distance: "1.4 km",
  });
  transport[0]["place"] = "Train - Riverdale Central Station";

  return (
    <section className="container max-sm:px-4 mb-7.5 font-sans">
      <h3 className="mb-4 text-grey-800 text-xl font-bold">Explore the Area</h3>
      <div className="flex gap-14.5 justify-between">
        <div className="grid grid-cols-2 gap-x-14 gap-y-5">
          <InfoTable
            caption={
              <div className="flex gap-3 text-grey-800">
                <Image src="/dish.svg" alt="dish icon" width={19} height={19} />
                Restaurants & cafes
              </div>
            }
            destinations={restaurants}
          />
          <InfoTable
            caption={
              <div className="flex gap-3 text-grey-800">
                <Image src="/shop.svg" alt="shop icon" width={24} height={24} />
                Shops & Markets
              </div>
            }
            destinations={shops}
          />
          <InfoTable
            caption={
              <div className="flex gap-3 text-grey-800">
                <Image
                  src="/beach.svg"
                  alt="beach icon"
                  width={19}
                  height={19}
                />
                Beaches
              </div>
            }
            destinations={beaches}
          />
          <InfoTable
            caption={
              <div className="flex gap-3 text-grey-800">
                <Image src="/bus.svg" alt="bus icon" width={19} height={19} />
                Public transport
              </div>
            }
            destinations={transport}
          />
        </div>
        <div className="grow shadow-[0px_2.52px_2.52px_0px_#C0C0C040] rounded-xl overflow-hidden">
          <div className="flex flex-col">
            <div className="relative aspect-[3/1.2]">
              <Image
                src="/map.svg"
                alt="map of a random location"
                objectFit="cover"
                fill
              />
            </div>
            <div className="p-2.5 text-lg text-center text-blue-500">
              Explore the Area
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTable({
  caption,
  destinations,
}: {
  caption: React.ReactNode;
  destinations: Destination[];
}) {
  return (
    <table className="min-w-55 space-y-2">
      <caption>{caption}</caption>
      <tbody>
        {destinations.map((d, idx) => (
          <tr key={idx} className="text-[#757575] text-xs">
            <td className="py-1">{d.place}</td>
            <td className="text-right">{d.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
