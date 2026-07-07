"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-paper/90 backdrop-blur-md transition-shadow duration-[240ms]",
        scrolled ? "border-line shadow-[0_1px_0_rgba(91,58,142,0.04)]" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="PCOS Insights Pakistan"
            width={36}
            height={36}
            className="rounded-full"
            priority
          />
          <span className="font-serif text-[1.05rem] font-medium tracking-tight text-ink">
            PCOS Insights <span className="text-primary">Pakistan</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-[120ms]",
                  isActive
                    ? "bg-paper-soft text-primary"
                    : "text-slate hover:text-ink"
                )}
              >
                {link.navLabel}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button asChild size="sm" className="rounded-full">
            <Link href="/survey">Take the Survey</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-paper sm:w-[340px]">
            <SheetHeader>
              <SheetTitle className="font-serif text-lg text-ink">
                PCOS Insights Pakistan
              </SheetTitle>
            </SheetHeader>
            <nav
              className="mt-2 flex flex-col gap-1 px-4"
              aria-label="Mobile primary"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                        isActive
                          ? "bg-paper-soft text-primary"
                          : "text-slate hover:bg-paper-soft hover:text-ink"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                );
              })}
              <SheetClose asChild>
                <Button asChild className="mt-3 rounded-full">
                  <Link href="/survey">Take the Survey</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
