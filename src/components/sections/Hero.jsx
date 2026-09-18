import { MessageCircle, Phone, Star } from "lucide-react";

import heroThali from "@/assets/hero-thali.jpg";
import { PHONE_HREF, WHATSAPP_BOOKING_HREF } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative -mt-20 flex min-h-svh items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroThali}
          alt="Unlimited Gujarati thali served on a brass plate"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/30 via-primary/40 to-primary/85" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold-soft">
            શ્રી રાધે થાળ · Since Tradition
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] font-bold text-cream sm:text-6xl lg:text-7xl">
            Experience the
            <span className="block text-gold-gradient">Authentic Taste</span>of
            Gujarat
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
            Unlimited Gujarati &amp; Kathiyawadi thali, served with traditional
            hospitality — in the heart of Gandhinagar.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-sm font-medium text-white shadow-card transition-transform hover:-translate-y-0.5"
            >
              View Menu
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-cream/60 px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-primary"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={WHATSAPP_BOOKING_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 text-sm font-medium text-white shadow-card transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </div>
          <div className="mt-10 flex items-center gap-2 text-sm text-cream/85">
            <span className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </span>
            4.2 · 2,391+ Google reviews
          </div>
        </div>
      </div>
    </section>
  );
}
