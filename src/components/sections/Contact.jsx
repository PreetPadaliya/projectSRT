import { Clock, Mail, MapPin, Phone } from "lucide-react";

import Ornament from "@/components/Ornament";
import { PHONE, PHONE_HREF } from "@/data/siteData";

export default function Contact() {
  return (
    <section id="contact" className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Visit us today</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Your thali is waiting.
          </h2>
          <Ornament className="mt-4" />
          <p className="mt-4 text-primary-foreground/80">
            Walk in with family and friends — we'll prepare a royal welcome.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-sm font-medium text-white"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-gold" />
            <p className="text-sm text-primary-foreground/80">
              Siddhraj Zavod, Sarkhej-Gandhinagar Highway, Near GUDA Bhavan,
              Sargasan, Gandhinagar 382006
            </p>
          </div>
          <div className="flex gap-3">
            <Clock className="h-5 w-5 shrink-0 text-gold" />
            <p className="text-sm text-primary-foreground/80">
              Lunch 11:00 AM – 3:00 PM
              <br />
              Dinner 7:30 PM – 11:00 PM
            </p>
          </div>
          <div className="flex gap-3">
            <Mail className="h-5 w-5 shrink-0 text-gold" />
            <p className="text-sm text-primary-foreground/80">
              hello@shreeradhethal.com
              <br />
              {PHONE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
