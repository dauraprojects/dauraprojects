import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground mb-6" style={{ textWrap: "balance" }}>
          Siap Mewujudkan Undangan Impian Anda?
        </h2>
        <p className="text-base text-muted-foreground font-sans mb-10 max-w-md mx-auto">
          Bergabung dengan ribuan pasangan yang telah mempercayai D'Aura untuk momen spesial mereka.
        </p>
        <Button variant="hero" size="xl">
          Buat Sekarang
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
