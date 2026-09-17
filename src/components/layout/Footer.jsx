import { navLinks } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-primary">
            Shree Radhe Thal
          </p>
          <p className="text-xs tracking-widest text-muted-foreground">
            શ્રી રાધે થાળ
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Authentic Gujarati &amp; Kathiyawadi Thali served with traditional
            hospitality in Gandhinagar.
          </p>
        </div>
        <div>
          <p className="font-display text-base font-semibold text-primary">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-base font-semibold text-primary">
            Hours
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Lunch · 11:00 AM – 3:00 PM</li>
            <li>Dinner · 7:30 PM – 11:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-5 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shree Radhe Thal. All rights reserved.
        Crafted with traditional hospitality.
      </div>
    </footer>
  );
}
