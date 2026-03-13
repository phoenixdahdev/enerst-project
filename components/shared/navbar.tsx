"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Properties", href: "/properties" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resolveHref = (href: string) => {
    if (href.startsWith("/")) return href;
    return isHome ? href : `/${href}`;
  };

  const isRoute = (href: string) => href.startsWith("/");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        !isHome
          ? "bg-navy shadow-lg shadow-navy/20"
          : scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20"
            : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-2xl font-extrabold tracking-tight text-white"
        >
          EP<span className="text-amber">VEOT</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            isRoute(link.href) ? (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber",
                  pathname === link.href
                    ? "text-amber"
                    : "text-white/70"
                )}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={resolveHref(link.href)}
                className="text-sm font-medium text-white/70 transition-colors hover:text-amber"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Button variant="accent" asChild>
            <a href={isHome ? "#contact" : "/#contact"}>Get a Quote</a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={28} weight="bold" />
          ) : (
            <List size={28} weight="bold" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-navy md:hidden"
          >
            <div className="px-4 py-4">
              {navLinks.map((link) =>
                isRoute(link.href) ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block py-3 text-sm font-medium transition-colors hover:text-amber",
                      pathname === link.href
                        ? "text-amber"
                        : "text-white/70"
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={resolveHref(link.href)}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-medium text-white/70 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </a>
                )
              )}
              <Button variant="accent" className="mt-4 w-full" asChild>
                <a href={isHome ? "#contact" : "/#contact"}>Get a Quote</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
