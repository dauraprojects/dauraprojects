import { Palette, Users, Layout, Zap } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Desain Eksklusif",
    description: "Ratusan tema minimalist & monochrome hasil kurasi desainer profesional.",
  },
  {
    icon: Users,
    title: "Kelola RSVP Mudah",
    description: "Pantau daftar hadir tamu secara real-time dari dashboard Anda.",
  },
  {
    icon: Layout,
    title: "Fitur Lengkap",
    description: "Integrasi Maps, Buku Tamu Digital, Angpao Online, & Galeri Foto.",
  },
  {
    icon: Zap,
    title: "Hemat & Cepat",
    description: "Selesai dalam 5 menit, bagikan instan ke WhatsApp.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted-foreground font-sans mb-4">
            Keunggulan
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Mengapa D'Aura?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 bg-card/50 backdrop-blur-sm shadow-card transition-all duration-400 hover:-translate-y-1 hover:shadow-card-hover group"
            >
              <div className="relative mb-6">
                <feature.icon className="w-6 h-6 text-foreground stroke-[1.5]" />
                <div className="absolute -top-1 -right-1 w-[6px] h-[6px] rounded-full bg-gold" />
              </div>
              <h3 className="text-lg font-serif font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
