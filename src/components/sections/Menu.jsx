import SectionHead from "./SectionHead";
import { dishes } from "@/data/siteData";

export default function Menu() {
  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Signature Tastes"
          title="Popular on the Thali"
          text="A glimpse of what arrives, course after course, on every brass thali."
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card"
            >
              <div className="overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary">
                  {dish.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {dish.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
