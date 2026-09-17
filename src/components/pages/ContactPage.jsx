import { Clock, MapPin, Phone } from "lucide-react";

import PageHero from "./PageHero";
import { PHONE, PHONE_HREF } from "@/data/siteData";

const address =
  "Siddhraj Zavod, Sarkhej-Gandhinagar Highway, Near GUDA Bhavan, Sargasan, Gandhinagar, Gujarat 382006";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Shree%20Radhe%20Thal%2C%20Siddhraj%20Zavod%2C%20Sargasan%2C%20Gandhinagar";
const whatsappUrl =
  "https://wa.me/918999909595?text=Hello%20Shree%20Radhe%20Thal";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come Dine With Us"
        text="We're just off the Sarkhej-Gandhinagar Highway, ready to welcome you with a generous Gujarati meal."
      />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <MapPin className="h-7 w-7 text-gold" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-primary">
                Address
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {address}
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <Phone className="h-7 w-7 text-gold" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-primary">
                Phone
              </h2>
              <a
                href={PHONE_HREF}
                className="mt-3 block text-sm text-gold hover:underline"
              >
                {PHONE}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                hello@shreeradhethal.com
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <Clock className="h-7 w-7 text-gold" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-primary">
                Business Hours
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Lunch · 11:00 AM – 3:00 PM
                <br />
                Dinner · 7:30 PM – 11:00 PM
              </p>
            </article>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-gold-gradient px-7 py-3 text-sm font-medium text-white shadow-card"
            >
              Call Now
            </a>
            <a
              href={whatsappUrl}
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-primary hover:bg-secondary"
            >
              WhatsApp Booking
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-primary hover:bg-secondary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
