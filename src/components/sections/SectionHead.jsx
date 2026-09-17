import Ornament from "@/components/Ornament";

export default function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
        {title}
      </h2>
      <Ornament className="mt-4" />
      {text ? <p className="mt-4 text-muted-foreground">{text}</p> : null}
    </div>
  );
}
