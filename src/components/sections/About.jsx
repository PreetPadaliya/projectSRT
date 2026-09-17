import SectionHead from "./SectionHead";
import { features } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Why Shree Radhe Thal"
          title="A Royal Dining Experience"
          text="From the first warm welcome to the last sweet bite — every detail is steeped in Gujarati tradition."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-gold">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 grid gap-6 rounded-2xl border border-border bg-card p-8 text-center shadow-card sm:grid-cols-3">
          {[
            ["2,391+", "Google Reviews"],
            ["4.2★", "Average Rating"],
            ["1,00,000+", "Happy Guests"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-3xl font-bold text-gold-gradient">
                {value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
