import PageHero from "./PageHero";
import galleryImage1 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.32 AM.jpeg";
import galleryImage2 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.33 AM (1).jpeg";
import galleryImage3 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.33 AM (2).jpeg";
import galleryImage4 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.33 AM.jpeg";
import galleryImage5 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.34 AM (1).jpeg";
import galleryImage6 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.34 AM (2).jpeg";
import galleryImage7 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.34 AM.jpeg";
import galleryImage8 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.35 AM (1).jpeg";
import galleryImage9 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.35 AM (2).jpeg";
import galleryImage10 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.35 AM.jpeg";
import galleryImage11 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.36 AM.jpeg";
import galleryImage12 from "@/assets/gallery/WhatsApp Image 2026-09-14 at 10.48.30 AM (1).jpeg";

const galleryImages = [
  [galleryImage1, "Shree Radhe Thal gallery image 1"],
  [galleryImage2, "Shree Radhe Thal gallery image 2"],
  [galleryImage3, "Shree Radhe Thal gallery image 3"],
  [galleryImage4, "Shree Radhe Thal gallery image 4"],
  [galleryImage5, "Shree Radhe Thal gallery image 5"],
  [galleryImage6, "Shree Radhe Thal gallery image 6"],
  [galleryImage7, "Shree Radhe Thal gallery image 7"],
  [galleryImage8, "Shree Radhe Thal gallery image 8"],
  [galleryImage9, "Shree Radhe Thal gallery image 9"],
  [galleryImage10, "Shree Radhe Thal gallery image 10"],
  [galleryImage11, "Shree Radhe Thal gallery image 11"],
  [galleryImage12, "Shree Radhe Thal gallery image 12"],
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments at Shree Radhe Thal"
        text="Food, family, and the warmth of Gujarati hospitality, captured around our table."
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map(([src, alt], index) => (
              <figure
                key={src}
                className={index === 0 ? "sm:col-span-2 lg:row-span-2" : ""}
              >
                <img
                  src={src}
                  alt={alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className={`w-full rounded-2xl object-cover shadow-card ${index === 0 ? "h-full min-h-80" : "h-64"}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
