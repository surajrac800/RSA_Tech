"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/assets/images/logo.png";
import { mainNavigation } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/95 shadow-md backdrop-blur-md"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 sm:h-20 md:h-[88px]">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={logo}
            alt="RSA Tech Softwares - Rapid Solution & Automation"
            width={240}
            height={90}
            className="h-14 w-auto sm:h-16 md:h-[80px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  suppressHydrationWarning
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground border-b-2 border-transparent transition-colors group-hover:border-blue-500 group-hover:text-blue-700"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-40 mt-4 w-[800px] max-w-[calc(100vw-2rem)] -translate-x-1/2 translate-y-4 rounded-3xl border border-blue-100/80 bg-white px-5 py-5 text-sm shadow-[0_20px_40px_rgba(15,23,42,0.12)] opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                      Our services
                    </p>
                  </div>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex h-full flex-col justify-between rounded-2xl border border-blue-100 bg-white px-3.5 py-3 text-sm text-muted-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20"
                      >
                        <span className="text-sm font-semibold text-foreground">
                          {child.label}
                        </span>
                        <span className="mt-2 text-xs text-muted-foreground leading-relaxed">
                          End-to-end {child.label.toLowerCase()} solutions.
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground border-b-2 border-transparent transition-colors hover:border-blue-500 hover:text-blue-700"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            asChild
            size="sm"
            className="hidden shrink-0 bg-orange-500 text-xs font-medium text-white shadow-sm hover:bg-orange-600 lg:flex"
          >
            <Link href="/pay-now">Pay Now</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="hidden shrink-0 lg:flex rsa-gradient-bg text-white shadow-sm hover:shadow-md hover:opacity-95"
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "relative h-10 w-10 rounded-full border border-border/60 bg-background/80 text-foreground shadow-sm backdrop-blur",
              "hover:bg-background hover:shadow-md hover:-translate-y-[1px]",
              "transition-all duration-200 lg:hidden"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            <div className="relative flex items-center justify-center">
              <Menu
                className={cn(
                  "h-5 w-5 transition-all duration-200",
                  mobileOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                )}
              />
              <X
                className={cn(
                  "absolute h-5 w-5 transition-all duration-200",
                  mobileOpen ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90"
                )}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile menu - slide-in drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          "transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <nav
          className={cn(
            "absolute right-0 top-0 h-screen w-full max-w-xs border-l border-white/10 bg-gradient-to-b from-background via-slate-950/95 to-slate-900 shadow-2xl backdrop-blur-xl sm:max-w-sm",
            "flex flex-col pt-8 pb-8 px-6 gap-3 overflow-y-auto",
            "transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 shadow-sm transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {mainNavigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300">
                  {item.label}
                </p>
                <div className="mt-3 space-y-1.5">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{child.label}</span>
                      <span className="text-[11px] font-normal text-slate-300">
                        Explore
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 shadow-sm transition-colors hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                <span>{item.label}</span>
                <span className="text-[11px] font-normal text-slate-300">
                  Go
                </span>
              </Link>
            )
          )}
          <div className="mt-6">
            <Button
              asChild
              className="w-full rsa-gradient-bg text-white"
              size="lg"
              onClick={() => setMobileOpen(false)}
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </nav>
      </div>
      {/* Gradient accent bar */}
      <div className="hidden h-[2px] w-full bg-gradient-to-r from-blue-600 via-violet-500 to-orange-400 lg:block" />
    </header>
  );
}
