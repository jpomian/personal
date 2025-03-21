"use client";

import { usePathname } from "next/navigation";

export default function LanguageSelector() {
  const pathname = usePathname();
  const currentHost = 
    typeof window !== "undefined" ? window.location.hostname : "";

  // Create URLs with current path
  const enUrl = `https://en.jpomian.pl${pathname}`;
  const plUrl = `https://jpomian.pl${pathname}`;

  // Check current language
  const isEnglish = currentHost.startsWith("en.");

  return (
    <div className="absolute top-6 right-12 z-50">
      <ul className="flex flex-row gap-6 md:text-xl">
        <li>
          <a
            href={plUrl}
            className={!isEnglish ? "text-red-600 cursor-default" : "text-white"}
            aria-current={!isEnglish ? "page" : undefined}
          >
            PL
          </a>
        </li>
        <li>
          <a
            href={enUrl}
            className={isEnglish ? "text-blue-600 cursor-default" : "text-white"}
            aria-current={isEnglish ? "page" : undefined}
          >
            EN
          </a>
        </li>
      </ul>
    </div>
  );
}