"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/background", label: "Background" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/fundraiser", label: "Fundraiser" },
  { href: "/partners", label: "Partners" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--header-border)] bg-[var(--header-bg)] text-[var(--header-text)] shadow-lg transition-colors">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="The Grand Connect"
            width={72}
            height={72}
            className="logo-image rounded-full"
          />
        </Link>

        <div className="flex items-center gap-3 md:order-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--header-border)] text-[var(--header-muted)] transition hover:border-[var(--header-text)] hover:text-[var(--header-text)] md:hidden"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
          >
            <span className="text-lg leading-none">{open ? "–" : "≡"}</span>
          </button>
        </div>

        <nav
          id="primary-navigation"
          className={`w-full overflow-hidden rounded-2xl border border-[var(--header-border)] bg-[var(--header-bg)] px-3 text-[var(--header-text)] transition-[max-height,opacity] duration-300 md:w-auto md:max-h-none md:border-none md:bg-transparent md:px-0 md:text-[var(--header-text)] ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          }`}
        >
          <div className="flex flex-col gap-2 py-4 md:flex-row md:items-center md:gap-3 md:py-0">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-full px-4 py-2 text-base font-bold transition ${
                    active
                      ? "bg-orange-500 text-white shadow-[var(--shadow-soft)]"
                      : "text-orange-500 hover:text-orange-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}

