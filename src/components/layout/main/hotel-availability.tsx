import Image from "next/image";

export default function HotelAvailibility() {
  return (
    <section className="container max-sm:px-4 mb-7.5">
      <h2 className="text-xl font-bold mb-4">Avalibility</h2>
      <SearchBar />
      <SearchResult />
    </section>
  );
}

function SearchBar() {
  return (
    <div
      id="hotel-search"
      className="flex gap-2.25 border border-blue-400 rounded-2xl px-5 py-4 items-end w-fit mb-3"
    >
      <div className="min-w-48.5">
        <div className="font-medium text-sm text-grey-500 mb-2.5">Check-In</div>
        <div className="flex gap-2.5 items-center bg-grey-300 p-2 rounded-[1.8rem]">
          <Image
            src="/calender.svg"
            alt="calender icon"
            height={22}
            width={22}
          />
          <time>Tue,23 June 2024</time>
        </div>
      </div>
      <div className="min-w-48.5">
        <div className="font-medium text-sm text-grey-500 mb-2.5">
          Check-Out
        </div>
        <div className="flex gap-2.5 items-center bg-grey-300 p-2 rounded-[1.8rem]">
          <Image
            src="/calender.svg"
            alt="calender icon"
            height={22}
            width={22}
          />
          <time>Sat,29 June 2024</time>
        </div>
      </div>
      <div className="min-w-48.5">
        <div className="font-medium text-sm text-grey-500 mb-2.5">
          Room & Guest
        </div>
        <div className="flex gap-2.5 items-center bg-grey-300 p-2 rounded-[1.8rem]">
          <Image
            src="/house-filled.svg"
            alt="house filled icon"
            height={22}
            width={22}
          />
          <p>2 Adults - 0 Children - 1 Room</p>
        </div>
      </div>
      <button className="p-2 rounded-3xl text-white bg-blue-500 w-28.75 ml-7.75">
        Search
      </button>
    </div>
  );
}

function SearchResult() {
  return (
    <div>
      <table className="w-full">
        <thead className="text-white bg-blue-500 h-10.5">
          <tr>
            <TableHeader className="">Room type</TableHeader>
            <TableHeader className="pl-4">Number of guests</TableHeader>
            <TableHeader className="pl-4">Price for 1 week</TableHeader>
            <TableHeader className="pl-4">Your choices</TableHeader>
            <TableHeader className="pl-4">Select rooms</TableHeader>
            <TableHeader className="pl-4">Your choices</TableHeader>
          </tr>
        </thead>
        <tbody>
          <RowData roomType="Twin Room" />
          <RowData roomType="Deluxe Double Room" />
          <RowData roomType="Deluxe Double Room" />
        </tbody>
      </table>
    </div>
  );
}

function TableHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <th className={`text-left px-1.25 ${className}`}>{children}</th>;
}

function RowData({ roomType }: { roomType: string }) {
  return (
    <TableRow className="group">
      <TableData className="text-xs text-grey-800">
        <div className="font-bold text-blue-500 mb-2">{roomType}</div>
        <RoomDescription />
      </TableData>
      <TableData>
        <div className="flex pl-2.5">
          <Image
            src="/user-grey.svg"
            alt="user-grey icon"
            height={24}
            width={24}
          />
          <Image
            src="/user-grey.svg"
            alt="user-grey icon"
            height={24}
            width={24}
          />
        </div>
      </TableData>
      <TableData>
        <div className="font-bold text-xl pl-2.5">$282</div>
      </TableData>
      <TableData>
        <div className="pl-2.5">
          <p>Breakfast included</p>
          <p className="text-red-500">Only 4 rooms left</p>
        </div>
      </TableData>
      <TableData>
        <div className="pl-2.5 relative inline-block">
          <select className="appearance-none w-14.5 px-1.75 py-1.25 border border-gray-300 rounded-[2.625rem]">
            <option value="0">0 </option>
            <option value="1">1 </option>
            <option value="2">2 </option>
            <option value="3">3 </option>
          </select>
          <Image
            src="/arrow-down-circle.svg"
            alt="arrow down icon"
            width={21.36}
            height={21.36}
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-2"
          />
        </div>
      </TableData>
      <TableData last>
        <div className="pl-2.5">
          <button className="p-2 bg-blue-500 text-white rounded-3xl text-sm w-full invisible group-hover:visible">
            Reserve
          </button>
        </div>
      </TableData>
    </TableRow>
  );
}

function TableRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <tr className={`border-b border-b-blue-400 py-2.5 ${className}`}>
      {children}
    </tr>
  );
}

function TableData({
  children,
  className = "",
  last = false,
}: {
  children: React.ReactNode;
  className?: string;
  last?: boolean;
}) {
  return (
    <td className={`px-1.25 py-2.5 relative align-top ${className}`}>
      <div className="h-full">
        {children}

        {/* Right border line */}
        {!last && (
          <div className="absolute top-[10px] bottom-[10px] right-0 w-px bg-blue-500/36" />
        )}
      </div>
    </td>
  );
}

function RoomDescription() {
  return (
    <div className="flex flex-wrap gap-y-2 justify-between w-45">
      <div className="flex items-center gap-2">
        <span>
          <b>2</b> single beds{" "}
        </span>
        <Image
          src="/bed-single.svg"
          alt="single bed icon"
          height={18}
          width={18}
          className="inline-block"
        />
        <Image
          src="/bed-single.svg"
          alt="single bed icon"
          height={18}
          width={18}
          className="inline-block"
        />
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/door.svg"
          alt="door icon"
          height={15}
          width={13.5}
          className="inline-block"
        />{" "}
        Rooms
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/full-screen-corner.svg"
          alt="full screen corner icon"
          height={18}
          width={18}
          className="inline-block"
        />
        <span>
          1200 <sub>sq ft</sub>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/fast-wind.svg"
          alt="fast wind icon"
          height={18}
          width={18}
          className="inline-block"
        />
        Air condition
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/bathtub.svg"
          alt="bathtub icon"
          height={15}
          width={15}
          className="inline-block"
        />
        Bathroom
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/presenter.svg"
          alt="presenter icon"
          height={15}
          width={14.25}
          className="inline-block"
        />
        TV
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/wifi-outline.svg"
          alt="wifi outline icon"
          height={18}
          width={18}
          className="inline-block"
        />
        WIFI
      </div>
    </div>
  );
}
