export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="bg-secondary/50 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-primary sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {text}
        </p>
      </div>
    </section>
  );
}
