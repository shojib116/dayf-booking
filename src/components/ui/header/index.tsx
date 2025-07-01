"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { url: "/", title: "Home" },
  { url: "/hotels", title: "Hotels" },
  { url: "/house", title: "House" },
  { url: "/about-us", title: "About Us" },
  { url: "/contact-us", title: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-blue-100">
      <div className="container mx-auto max-sm:px-4 h-19 flex items-center justify-between font-sans">
        <div className="flex gap-7.5">
          <div>
            <Image
              src={"/logo.svg"}
              alt="dayf logo"
              width={90}
              height={29.23}
            />
          </div>
          <nav>
            <ul className="flex gap-4.5">
              {navLinks.map((link) => (
                <li key={link.url} className="inline-block text-[0px]">
                  <Link
                    href={link.url}
                    className={`relative inline-block text-center hover:text-blue-500 transition-all text-[1rem] hover:font-bold ${
                      link.url == pathname
                        ? "text-blue-500 font-bold"
                        : "font-normal text-grey-500"
                    }`}
                    title={link.title}
                  >
                    {link.title}
                    <span
                      aria-hidden="true"
                      className="block invisible font-bold h-0 overflow-hidden"
                    >
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex gap-3 h-10">
          <div className="flex gap-1.25">
            <div className="text-blue-500 border border-blue-300 rounded-[2.875rem] flex gap-2 items-center px-3">
              <Image
                src="/euro-circle.svg"
                alt="euro icon"
                height={21}
                width={21}
                className="inline-block"
              />
              <Image
                src="/arrow-down.svg"
                alt="arrow down icon"
                height={24}
                width={24}
                className="inline-block"
              />
            </div>
            <div className="text-blue-500 border border-blue-300 rounded-[2.875rem] flex gap-2 items-center px-3">
              <Image
                src="/flag.svg"
                alt="spanish flag icon"
                height={31}
                width={31}
                className="inline-block"
              />
              <Image
                src="/arrow-down.svg"
                alt="arrow down icon"
                height={24}
                width={24}
                className="inline-block"
              />
            </div>
            <div className="text-blue-500 border border-blue-300 rounded-[2.875rem] flex gap-2 items-center px-3">
              List your property{" "}
              <Image
                src="/arrow-up-right.svg"
                alt="arrow up right icon"
                height={24}
                width={24}
                className="inline-block"
              />
            </div>
            <div className="p-2 rounded-full bg-white/50">
              <Image
                src="/notification-bubble.svg"
                alt="notification buble icon"
                height={24}
                width={24}
              />
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-blue-500 bg-white/50 px-3 h-full rounded-3xl">
            <Image
              src="/user_light.svg"
              alt="user logo"
              height={26}
              width={26}
            />
            Sunan
          </div>
        </div>
      </div>
    </header>
  );
}
