import { Star } from "lucide-react";

import PageHero from "./PageHero";

const guestReviews = [
  [
    "Rohan Mehta",
    "A great spot for enjoying an authentic Gujarati thali experience. Service is unmatched.",
  ],
  [
    "Anika Patel",
    "Perfect place for traditional Gujarati and Kathiyawadi food. Loved the lasaniya bataka!",
  ],
  [
    "Vivek Shah",
    "Best Gujarati Thali in Gandhinagar. Family loved every dish, especially the basundi.",
  ],
  [
    "Priya Desai",
    "Beautiful ambience and warm hospitality. The unlimited thali is excellent value.",
  ],
  [
    "Kunal Joshi",
    "Felt like a wedding feast: endless servings, perfectly cooked dal, kadhi, and sweets.",
  ],
  [
    "Meera Trivedi",
    "Authentic taste, very clean kitchen, and quick service even on weekends.",
  ],
];

function Stars() {
  return (
    <span className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((star) => (
        <Star key={star} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </span>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Guest Reviews"
        title="Loved by Thousands"
        text="4.2 stars on Google with more than 2,391 guests sharing their Shree Radhe Thal experience."
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ["4.2★", "Google Rating"],
              ["2,391+", "Total Reviews"],
              ["1L+", "Happy Guests"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-8 text-center shadow-card"
              >
                <p className="font-display text-4xl font-bold text-gold-gradient">
                  {value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guestReviews.map(([name, text]) => (
              <blockquote
                key={name}
                className="rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <Stars />
                <p className="mt-5 leading-relaxed text-foreground">“{text}”</p>
                <footer className="mt-6 text-sm font-medium text-gold">
                  {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
