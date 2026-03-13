"use client";

import { Phone, WhatsappLogo, Envelope } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";
import type { Property } from "@/lib/types/property";

const PHONE = "+2348059149897";
const EMAIL = "epveotconstruction@gmail.com";

export function ContactOwner({ property }: { property: Property }) {
  const whatsappText = encodeURIComponent(
    `Hi, I'm interested in the property: "${property.title}" (${property.location.area}, ${property.location.city}). Is it still available?`
  );

  return (
    <div className="sticky top-24">
      <div className="relative overflow-hidden rounded-2xl bg-navy p-6">
        <ShineBorder
          shineColor={["#E8A838", "#1B2A4A", "#E8A838"]}
          borderWidth={1.5}
          duration={12}
        />

        <p className="font-heading text-lg font-bold text-white">
          Interested in this property?
        </p>
        <p className="mt-1 text-sm text-white/40">
          Get in touch with us to schedule a viewing or ask any questions.
        </p>

        <div className="mt-6 space-y-3">
          <Button
            variant="accent"
            className="w-full gap-2"
            size="lg"
            asChild
          >
            <a
              href={`https://wa.me/${PHONE.replace("+", "")}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={20} weight="fill" />
              Chat on WhatsApp
            </a>
          </Button>

          <Button
            variant="outline"
            className="w-full gap-2 border-white/10 text-white hover:bg-white/10 hover:text-white"
            size="lg"
            asChild
          >
            <a href={`tel:${PHONE}`}>
              <Phone size={20} weight="fill" />
              Call Us
            </a>
          </Button>

          <Button
            variant="outline"
            className="w-full gap-2 border-white/10 text-white hover:bg-white/10 hover:text-white"
            size="lg"
            asChild
          >
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Inquiry: ${property.title}`)}`}
            >
              <Envelope size={20} weight="fill" />
              Send Email
            </a>
          </Button>
        </div>

        <p className="mt-4 text-center text-[11px] text-white/25">
          Ref: {property.id}-{property.slug}
        </p>
      </div>
    </div>
  );
}
