import Image from "next/image";

export default function HotelPreview() {
  return (
    <section className="container max-sm:px-4 mb-7.5 w-full">
      <div className="flex justify-between mb-7.5 items-end">
        <div className="max-w-[30.375rem]">
          <h1 className="text-[1.95rem] text-grey-800 font-medium">
            El Aurassi Hotel
          </h1>
          <p className="text-[0.975rem] text-grey-500">
            Spacious, modern rooms with panoramic views of the Mediterranean
            Sea.
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <button className="w-17.5 h-17.5 bg-blue-500/10 rounded-full flex justify-center items-center">
            <Image
              src="/bookmark_light.svg"
              alt="bookmark icon"
              width={40}
              height={43.64}
            />
          </button>
          <button className="w-17.5 h-17.5 bg-blue-500/10 rounded-full flex justify-center items-center">
            <Image
              src="/share-light.svg"
              alt="share icon"
              width={42}
              height={37}
            />
          </button>
          <button className="flex gap-2.5 bg-blue-500 text-white text-[1.25rem] font-semibold px-6.5 py-2.5 rounded-[8.75rem]">
            Reserve
            <span className="relative w-6 aspect-square">
              <Image
                src="/arrow-right.svg"
                alt="arrow right icon"
                fill
                className="inline-block"
                objectFit="contain"
              />
            </span>
          </button>
        </div>
      </div>
      <div className="relative aspect-[1108/461]">
        <Image src="/preview-image.svg" alt="images of El Aurassi Hotel" fill />
      </div>
    </section>
  );
}
