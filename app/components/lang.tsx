"use client";

import { usePathname } from "next/navigation";

export default function LanguageSelector() {
  const pathname = usePathname();

  // Create URLs with current path
  const enUrl = `https://en.jpomian.pl${pathname}`;
  const plUrl = `https://jpomian.pl${pathname}`;


  return (
    <div className="absolute top-6 right-12 z-50">
      <ul className="flex flex-row gap-6 md:text-xl">
        <li>
          <a
            href={plUrl}
            className="text-white hover:text-gray-400 duration-300"
          >
            PL
          </a>
        </li>
        <li>
          <a
            href={enUrl}
            className="text-blue-500 cursor-default"
          >
            EN
          </a>
        </li>
      </ul>
    </div>
  );
}