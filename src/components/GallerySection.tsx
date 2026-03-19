import Image from "next/image";
import { Button } from "@/components/ui/button";
import galleryRustic from "@/assets/gallery-rustic.jpg";
import galleryClassic from "@/assets/gallery-classic.jpg";
import galleryModern from "@/assets/gallery-modern.jpg";

const designs = [
  { image: galleryRustic, title: "Rustic Elegance", category: "Botanical" },
  { image: galleryClassic, title: "Classic Gold", category: "Timeless" },
  { image: galleryModern, title: "Modern Minimalist", category: "Contemporary" },
];

const GallerySection = () => {
  return (
    <section id="katalog" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted-foreground font-sans mb-4">
            Koleksi
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Showcase Desain
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {designs.map((design) => (
            <div key={design.title} className="group cursor-pointer">
              <div className="overflow-hidden shadow-card mb-4">
                <Image
                  src={design.image}
                  alt={design.title}
                  className="w-full aspect-[4/5] object-cover image-outline transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.03]"
                  placeholder="blur"
                />
              </div>
              <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted-foreground font-sans mb-1">
                  {design.category}
                </p>
                <h3 className="text-lg font-serif font-light text-foreground">
                  {design.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button variant="outline" size="lg" className="font-sans">
            Lihat Semua Katalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
