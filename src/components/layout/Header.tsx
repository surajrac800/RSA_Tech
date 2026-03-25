"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import logo from "@/assets/images/logo.png";
import { mainNavigation } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const clientSubscribe = () => () => {};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const desktopMenuRef = useRef<HTMLDivElement | null>(null);
  const menuMounted = useSyncExternalStore(
    clientSubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onBp = () => {
      if (mq.matches) {
        setMobileOpen(false);
        setOpenDesktopMenu(null);
      }
    };
    mq.addEventListener("change", onBp);
    return () => mq.removeEventListener("change", onBp);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (mobileOpen) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (openDesktopMenu === null) return;
    const close = (e: PointerEvent) => {
      const el = desktopMenuRef.current;
      if (el && !el.contains(e.target as Node)) {
        setOpenDesktopMenu(null);
      }
    };
    document.addEventListener("pointerdown", close, true);
    return () => document.removeEventListener("pointerdown", close, true);
  }, [openDesktopMenu]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#000000] shadow-md backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6 sm:h-24 md:h-[104px]">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={logo}
            alt="RSA Tech Softwares - Rapid Solution & Automation"
            width={360}
            height={140}
            className="h-20 w-auto sm:h-24 md:h-[96px]"
            priority
          />
        </Link>

        <div className="flex flex-1 items-center justify-end gap-6">
        <nav className="hidden items-center gap-2 lg:flex lg:gap-4 xl:gap-6">
          {mainNavigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                ref={desktopMenuRef}
                className="relative"
                onMouseEnter={() => setOpenDesktopMenu(item.label)}
                onMouseLeave={() => setOpenDesktopMenu(null)}
              >
                <button
                  type="button"
                  suppressHydrationWarning
                  aria-expanded={openDesktopMenu === item.label}
                  aria-haspopup="true"
                  aria-controls={`nav-mega-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                  id={`nav-trigger-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                  className={cn(
                    "flex items-center gap-1 border-b-2 border-transparent px-3 py-2 text-sm font-medium text-slate-100 transition-colors xl:px-4",
                    openDesktopMenu === item.label
                      ? "border-amber-400 text-amber-300"
                      : "hover:border-amber-400 hover:text-amber-300",
                    "focus-visible:border-amber-400 focus-visible:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  )}
                  onClick={() =>
                    setOpenDesktopMenu((cur) =>
                      cur === item.label ? null : item.label
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 text-slate-200 transition-transform duration-200",
                      openDesktopMenu === item.label && "rotate-180"
                    )}
                  />
                </button>
                {/*
                  pt-3 bridges trigger and panel so the pointer path stays inside this div while moving to links.
                */}
                <div
                  id={`nav-mega-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                  role="region"
                  aria-labelledby={`nav-trigger-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                  className={cn(
                    "absolute left-1/2 top-full z-40 w-[800px] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-3 transition-all duration-200",
                    openDesktopMenu === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible pointer-events-none translate-y-2 opacity-0"
                  )}
                >
                  <div className="rounded-3xl border border-amber-500/40 bg-slate-950 px-5 py-5 text-sm shadow-[0_20px_40px_rgba(15,23,42,0.6)]">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                        Our services
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex h-full flex-col justify-between rounded-2xl border border-amber-500/40 bg-slate-900 px-3.5 py-3 text-sm text-slate-300 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-md hover:shadow-amber-400/30"
                        >
                          <span className="text-sm font-semibold text-white">
                            {child.label}
                          </span>
                          <span className="mt-2 text-xs leading-relaxed text-slate-400">
                            End-to-end {child.label.toLowerCase()} solutions.
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="border-b-2 border-transparent px-3 py-2 text-sm font-medium text-slate-100 antialiased transition-colors hover:border-amber-400 hover:text-amber-300 xl:px-4"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            size="sm"
            className="h-11 rounded-[30px] bg-[#F76902] px-6 text-xs font-semibold text-white shadow-sm hover:bg-[#f9802b]"
          >
            <Link href="/pay-now">Pay Now</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="h-11 rounded-[30px] bg-[#F76902] px-6 text-xs font-semibold text-white shadow-sm hover:bg-[#f9802b]"
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={cn(
              "relative z-60 h-10 w-10 shrink-0 rounded-full border border-white/25 bg-white/10 text-slate-100 shadow-sm backdrop-blur",
              "hover:bg-white/15 hover:shadow-md hover:-translate-y-px",
              "transition-all duration-200 lg:hidden"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            <div className="relative flex items-center justify-center text-slate-100">
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

      {/* Mobile menu: portaled to body so fixed layering works reliably on mobile browsers */}
      {menuMounted &&
        mobileOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-60 flex h-dvh max-h-dvh flex-col overflow-hidden bg-background overscroll-none lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
          >
            <div className="flex shrink-0 items-center justify-between border-b bg-[#000000] px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src={logo}
                  alt="RSA Tech Softwares - Rapid Solution & Automation"
                  width={160}
                  height={60}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted text-foreground shadow-sm hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-y-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {mainNavigation.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-muted/70 px-4 py-4 shadow-sm"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      {item.label}
                    </p>
                    <div className="mt-3 space-y-1.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span>{child.label}</span>
                          <span className="text-[11px] font-normal text-muted-foreground">
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
                    className="flex items-center justify-between rounded-2xl border border-border bg-muted/70 px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-background"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className="text-[11px] font-normal text-muted-foreground">
                      Go
                    </span>
                  </Link>
                )
              )}
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full rsa-gradient-bg text-white"
                  size="lg"
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Get Free Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </div>,
          document.body
        )}
      {/* No bottom border or gradient bar under navigation */}
    </header>
  );
}
