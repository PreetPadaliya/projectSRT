import PageHero from "./PageHero";
import { Search } from "lucide-react";
import { useState } from "react";
import basundiImage from "@/assets/menu/Basundi.jpg";
import bhakhriImage from "@/assets/menu/Bhakhri.jpg";
import buttermilkImage from "@/assets/menu/Buttermilk.jpg";
import chatCurdImage from "@/assets/menu/Chat Curd.jpg";
import chutneyImage from "@/assets/menu/Chutney.jpg";
import dalVadaImage from "@/assets/menu/Dal Vada.jpg";
import dalImage from "@/assets/menu/Dal.jpg";
import delhiChatImage from "@/assets/menu/Delhi Chat.jpg";
import dhoklaImage from "@/assets/menu/Dhokla.jpg";
import kadhiImage from "@/assets/menu/Kadhi.jpg";
import lasaniyaBatakaImage from "@/assets/menu/Lasaniya Bataka.jpg";
import mangoRasImage from "@/assets/menu/Mango Ras.jpg";
import mohanthalImage from "@/assets/menu/Mohanthal.jpg";
import papadImage from "@/assets/menu/papad.jpg";
import parothaImage from "@/assets/menu/Parotha.jpg";
import pickleImage from "@/assets/menu/pickle.jpg";
import puriImage from "@/assets/menu/puri.jpg";
import rajwadiKhichdiImage from "@/assets/menu/Rajwadi Khichdi.jpg";
import riceImage from "@/assets/menu/rice.jpg";
import ringanNoOloImage from "@/assets/menu/Ringna-No-Olo.jpg";
import rotlaImage from "@/assets/menu/Rotla.jpeg";
import rotliImage from "@/assets/menu/Rotli.jpg";
import saladImage from "@/assets/menu/salad.jpg";
import seasonalSabjiImage from "@/assets/menu/Seasonal Sabji.jpg";
import sevTametaImage from "@/assets/menu/Sev Tameta.jpg";
import sweetImage from "@/assets/menu/sweet.jpg";

const menuImages = {
  Basundi: basundiImage,
  Bhakhri: bhakhriImage,
  Buttermilk: buttermilkImage,
  "Chat Curd": chatCurdImage,
  Chutney: chutneyImage,
  "Dal Vada": dalVadaImage,
  Dal: dalImage,
  "Delhi Chat": delhiChatImage,
  Dhokla: dhoklaImage,
  Kadhi: kadhiImage,
  "Lasaniya Bataka": lasaniyaBatakaImage,
  "Mango Ras": mangoRasImage,
  Mohanthal: mohanthalImage,
  Papad: papadImage,
  Parotha: parothaImage,
  Pickle: pickleImage,
  Puri: puriImage,
  "Rajwadi Khichdi": rajwadiKhichdiImage,
  Rice: riceImage,
  "Ringan No Olo": ringanNoOloImage,
  Rotla: rotlaImage,
  Rotli: rotliImage,
  Salad: saladImage,
  "Seasonal Sabji": seasonalSabjiImage,
  "Sev Tameta": sevTametaImage,
  Sweet: sweetImage,
};

const menuGroups = [
  {
    name: "Gujarati Thali",
    items: [
      "Rotli",
      "Puri",
      "Bhakhri",
      "Seasonal Sabji",
      "Dal",
      "Kadhi",
      "Rice",
      "Sweet",
      "Salad",
      "Papad",
      "Pickle",
      "Chutney",
      "Buttermilk",
    ],
  },
  {
    name: "Kathiyawadi Thali",
    items: [
      "Basundi",
      "Mohanthal",
      "Dhokla",
      "Dal Vada",
      "Lasaniya Bataka",
      "Ringan No Olo",
      "Sev Tameta",
      "Rotla",
      "Parotha",
      "Rajwadi Khichdi",
    ],
  },
  {
    name: "Special Items",
    items: [
      "Basundi",
      "Mango Ras",
      "Mohanthal",
      "Dhokla",
      "Chat Curd",
      "Delhi Chat",
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleGroups = menuGroups
    .filter(
      (group) => activeCategory === "All" || group.name === activeCategory,
    )
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.toLowerCase().includes(normalizedSearch),
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="A Feast of Tradition"
        text="Unlimited servings, pure vegetarian cooking, and freshly prepared Gujarati and Kathiyawadi favourites."
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-3xl">
            <label className="relative block">
              <span className="sr-only">Search dishes</span>
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search dishes..."
                className="h-14 w-full rounded-full border border-border bg-card pl-14 pr-6 text-base text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>
            <div
              className="mt-6 flex flex-wrap justify-center gap-3"
              role="tablist"
              aria-label="Menu categories"
            >
              {["All", ...menuGroups.map((group) => group.name)].map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${activeCategory === category ? "bg-primary text-primary-foreground shadow-card" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}
                  >
                    {category}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="mt-16">
            {visibleGroups.map((group, groupIndex) => (
              <div key={group.name} className={groupIndex === 0 ? "" : "mt-16"}>
                <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
                  <h2 className="font-display text-3xl font-bold text-primary">
                    {group.name}
                  </h2>
                  <span className="eyebrow">Unlimited</span>
                </div>
                <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {group.items.map((item) => {
                    return (
                      <article
                        key={`${group.name}-${item}`}
                        className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                      >
                        <img
                          src={menuImages[item]}
                          alt={`${item} served at Shree Radhe Thal`}
                          loading="lazy"
                          className="h-36 w-full object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-display text-lg font-semibold text-primary">
                            {item}
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Freshly prepared and served warm.
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
            {visibleGroups.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-secondary/40 px-6 py-16 text-center">
                <h2 className="font-display text-2xl font-semibold text-primary">
                  No dishes found
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try a different search or choose another menu category.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
