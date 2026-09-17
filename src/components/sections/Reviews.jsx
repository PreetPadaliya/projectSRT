import { Star } from "lucide-react";

import SectionHead from "./SectionHead";
import { reviews } from "@/data/siteData";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Guest Stories" title="Loved by Gandhinagar" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.name}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <span className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                “{review.text}”
              </p>
              <footer className="mt-5 text-sm font-medium text-gold">
                {review.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
