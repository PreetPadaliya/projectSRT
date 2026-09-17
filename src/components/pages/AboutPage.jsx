import PageHero from "./PageHero";
import aboutImage from "@/assets/About/ShreeRadheThaal.jpg";

const values = [
  ["Traditional Recipes", "Time-honoured recipes passed across generations."],
  ["Pure Vegetarian Kitchen", "A fully sattvik kitchen, with no compromises."],
  [
    "Family Dining",
    "A warm table designed for joyful, multi-generational meals.",
  ],
  [
    "Gujarati Hospitality",
    "Generosity, warmth, and unlimited service for every guest.",
  ],
  [
    "Premium Ingredients",
    "Hand-picked produce, pure ghee, and stone-ground spices.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Heritage Served on a Brass Thali"
        text="Shree Radhe Thal brings the soul of Gujarat to your table: the warmth of a grandmother's kitchen, the abundance of a wedding feast, and the calm of a sattvik meal."
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Tradition, plated with love</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Every dish carries a little piece of home.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Shree Radhe Thal is one of Gandhinagar's favourite destinations
              for authentic Gujarati and Kathiyawadi cuisine. We serve every
              guest like family, with generous portions, honest ingredients, and
              the unhurried joy of a shared meal.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 text-center sm:grid-cols-3">
              {[
                ["2,391+", "Reviews"],
                ["4.2★", "Google Rating"],
                ["1L+", "Happy Guests"],
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
          <img
            src={aboutImage}
            alt="Warm dining room at Shree Radhe Thal"
            className="h-104 w-full rounded-2xl object-cover shadow-luxe"
          />
        </div>
      </section>
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What guides us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <h3 className="font-display text-xl font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
