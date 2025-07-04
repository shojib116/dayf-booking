import Image from "next/image";
import Link from "next/link";

const links = [
  { url: "/", title: "Home" },
  { url: "/hotels", title: "Hotels" },
  { url: "/deals", title: "Deals" },
  { url: "/about-us", title: "About Us" },
  { url: "/contact-us", title: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="container px-9.5 max-sm:px-4 py-15 flex justify-between">
        <div className="max-w-109">
          <Image
            src="/logo.svg"
            alt="logo"
            width={90}
            height={29.23}
            className="mb-3"
          />
          <p className="text-xs">
            [App Name] makes booking your next stay easy, affordable, and
            stress-free. With thousands of hotels worldwide, exclusive deals,
            and secure payment options, we&apos;re here to help you find the
            perfect place to stay, every time.
          </p>

          <div className="flex gap-8 my-8.25">
            <Image
              src="/twitter-logo.svg"
              alt="twtiter logo"
              width={14.73}
              height={11.85}
            />
            <Image
              src="/fb-logo.svg"
              alt="facebook logo"
              width={8.34}
              height={15.97}
            />
            <Image
              src="/insta-logo.svg"
              alt="instagram logo"
              width={17.86}
              height={17.78}
            />
            <Image
              src="/github-logo.svg"
              alt="github logo"
              width={17.09}
              height={16.59}
            />
          </div>
          <div className="flex gap-2 items-center font-poppins text-sm">
            <Image
              src="/location_pin.svg"
              alt="location pin icon"
              width={23}
              height={24}
            />
            123 Travel St, Suite 100, City, Country
          </div>
        </div>
        <div className="w-px bg-gray-300 h-27.5 my-auto"></div>
        <div>
          <div className="flex gap-19.5 mb-5">
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="font-medium">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="font-poppins text-sm">
              <p className="flex gap-2 items-center">
                <Image
                  src="/phone-light.svg"
                  alt="phone icon"
                  width={24}
                  height={24}
                />
                <a href="tel:+1 (555) 123-4567">+1 (555) 123-4567</a>
              </p>
              <p className="flex gap-2 items-center mt-3 mb-10.75">
                <Image
                  src="/message-light.svg"
                  alt="message icon"
                  width={24}
                  height={24}
                />
                <a href="mailto:support@[yourappname].com">
                  support@[yourappname].com
                </a>
              </p>
              <p className="flex gap-6 items-center text-lg font-sans">
                Download Our App
                <span className="flex gap-5">

                  <Image
                    src="/play-store.svg"
                    alt="play store icon"
                    width={34}
                    height={34}
                  />
                  <Image
                    src="/app-store.svg"
                    alt="app store icon"
                    width={34}
                    height={34}
                  />
                </span>

              </p>
            </div>
          </div>
          <div className="text-sm font-poppins text-right">
            &copy; 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
