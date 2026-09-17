import SectionHead from "./SectionHead";
import experienceImage1 from "@/assets/glimpsOfExp/WhatsApp Image 2026-09-14 at 10.48.33 AM.jpeg";
import experienceImage2 from "@/assets/glimpsOfExp/WhatsApp Image 2026-09-14 at 10.48.34 AM (2).jpeg";
import experienceImage3 from "@/assets/glimpsOfExp/WhatsApp Image 2026-09-14 at 10.48.35 AM (1).jpeg";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Inside the Restaurant"
          title="A glimpse of the experience"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [experienceImage1, "Gujarati thali experience"],
            [experienceImage2, "Shree Radhe Thal dining experience"],
            [experienceImage3, "Traditional Gujarati food"],
          ].map(([src, alt]) => (
            <img
              key={src}
              src={src}
              alt={alt}
              loading="lazy"
              width={1024}
              height={768}
              className="h-64 w-full rounded-2xl object-cover shadow-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
