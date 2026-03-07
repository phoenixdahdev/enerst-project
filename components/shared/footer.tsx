import {
  Phone,
  Envelope,
  MapPin,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

const serviceLinks = [
  "Air Conditioning",
  "Electrical Installation",
  "General Building",
  "Security Systems",
  "Service & Maintenance",
  "House Extensions",
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socials = [
  { icon: FacebookLogo, href: "#", label: "Facebook" },
  { icon: TwitterLogo, href: "#", label: "Twitter" },
  { icon: InstagramLogo, href: "#", label: "Instagram" },
  { icon: LinkedinLogo, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="font-heading text-2xl font-extrabold tracking-tight text-white"
            >
              EP<span className="text-amber">VEOT</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Building with precision, driven by passion. Delivering
              comprehensive construction and engineering services across
              commercial, residential, and industrial sectors.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-all hover:bg-amber/20 hover:text-amber"
                >
                  <social.icon size={20} weight="regular" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-white/40 transition-colors hover:text-amber"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-amber"
                  weight="fill"
                />
                <a
                  href="tel:+2348059114989"
                  className="text-sm text-white/40 transition-colors hover:text-amber"
                >
                  (234) 80 591 149 89
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Envelope
                  size={18}
                  className="mt-0.5 shrink-0 text-amber"
                  weight="fill"
                />
                <a
                  href="mailto:info@epveot.com"
                  className="text-sm text-white/40 transition-colors hover:text-amber"
                >
                  info@epveot.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-amber"
                  weight="fill"
                />
                <span className="text-sm text-white/40">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} EPVEOT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
