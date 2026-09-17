import {
  ChefHat,
  Leaf,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import basundiAndMohanthal from "@/assets/PopularOT/BasundiANDMohanthal.jpg";
import dhoklaAndFarsan from "@/assets/PopularOT/DhoklaANDFarsan.jpg";
import gujaratiThali from "@/assets/PopularOT/GujaratiThali.jpg";
import kathiyawadiThali from "@/assets/PopularOT/KathiyawadiThali.jpg";
import mangoRasAndPuri from "@/assets/PopularOT/MangorasANDPuri.jpg";
import rotlaAndBhakhri from "@/assets/PopularOT/RotlaANDBhakhri.jpg";

export const PHONE = "+91 89999 09595";
export const PHONE_HREF = "tel:+918999909595";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const features = [
  {
    icon: UtensilsCrossed,
    title: "Unlimited Thali",
    text: "Endless servings of every dish on your thali.",
  },
  {
    icon: Leaf,
    title: "Pure Vegetarian",
    text: "100% vegetarian, prepared in a sattvik kitchen.",
  },
  {
    icon: ChefHat,
    title: "Fresh Daily Menu",
    text: "A new seasonal menu, freshly made every day.",
  },
  {
    icon: Users,
    title: "Family Dining",
    text: "Warm, spacious setting perfect for the whole family.",
  },
  {
    icon: Sparkles,
    title: "Authentic Taste",
    text: "Heritage recipes from across Gujarat & Kathiyawad.",
  },
  {
    icon: Star,
    title: "Premium Service",
    text: "Traditional Gujarati hospitality with every meal.",
  },
];

export const dishes = [
  {
    img: gujaratiThali,
    title: "Gujarati Thali",
    text: "Rotli, dal, kadhi, sabji, sweet & more — unlimited.",
  },
  {
    img: kathiyawadiThali,
    title: "Kathiyawadi Thali",
    text: "Lasaniya bataka, ringan no olo, rotla, jaggery & ghee.",
  },
  {
    img: basundiAndMohanthal,
    title: "Basundi & Mohanthal",
    text: "Slow-cooked dairy sweets, made the traditional way.",
  },
  {
    img: rotlaAndBhakhri,
    title: "Rotla & Bhakhri",
    text: "Hand-rolled, fire-roasted, served piping hot with white butter.",
  },
  {
    img: dhoklaAndFarsan,
    title: "Dhokla & Farsan",
    text: "Steamed, tempered and garnished — perfect tea-time bites.",
  },
  {
    img: mangoRasAndPuri,
    title: "Mango Ras & Puri",
    text: "Seasonal special — silky aamras with crisp puris.",
  },
];

export const reviews = [
  {
    text: "A great spot for enjoying an authentic Gujarati thali experience.",
    name: "Rohan M.",
  },
  {
    text: "Perfect place for traditional Gujarati and Kathiyawadi food.",
    name: "Anika P.",
  },
  {
    text: "Best Gujarati Thali in Gandhinagar — service and ambience are exceptional.",
    name: "Vivek S.",
  },
];
