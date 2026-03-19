import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Silver",
    price: "Gratis",
    priceNote: "Selamanya",
    features: ["1 Desain Undangan", "Berbagi via Link", "RSVP Dasar", "Buku Tamu Digital"],
    highlighted: false,
  },
  {
    name: "Gold",
    price: "Rp 149.000",
    priceNote: "Sekali Bayar",
    features: [
      "Semua Fitur Silver",
      "50+ Desain Premium",
      "RSVP Real-time Dashboard",
      "Angpao Online",
      "Integrasi Google Maps",
      "Galeri Foto & Video",
      "Custom Domain",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Platinum",
    price: "Rp 349.000",
    priceNote: "Custom & Priority",
    features: [
      "Semua Fitur Gold",
      "Desain Custom Eksklusif",
      "Dukungan Desainer Pribadi",
      "Revisi Tanpa Batas",
      "Prioritas Support 24/7",
      "Undangan Cetak Digital",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="harga" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted-foreground font-sans mb-4">
            Investasi
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Paket Harga
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 md:p-10 shadow-card transition-all duration-400 hover:-translate-y-1 hover:shadow-card-hover ${
                tier.highlighted
                  ? "border border-primary bg-card/80"
                  : "bg-card/50"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-8">
                  <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-gold font-sans bg-background px-3 py-1">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-sm font-sans font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-serif font-light text-foreground tabular-nums">
                    {tier.price}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-sans mt-1">
                  {tier.priceNote}
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-sans text-foreground/80">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "hero" : "outline"}
                size="lg"
                className="w-full font-sans"
              >
                Mulai
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
