const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl font-light text-foreground mb-4">
              D'Aura Project
            </h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Platform undangan pernikahan digital premium untuk momen spesial Anda.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground font-sans mb-4">
              Produk
            </p>
            <ul className="space-y-3">
              {["Katalog Desain", "Fitur", "Harga", "Template"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground font-sans mb-4">
              Perusahaan
            </p>
            <ul className="space-y-3">
              {["Tentang Kami", "Blog", "Karier", "Kontak"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground font-sans mb-4">
              Bantuan
            </p>
            <ul className="space-y-3">
              {["FAQ", "Kebijakan Privasi", "Syarat & Ketentuan"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/[0.08] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-sans">
            © {currentYear} D'Aura Project. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Instagram", "Twitter", "Pinterest"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted-foreground font-sans uppercase tracking-[0.15em] hover:text-foreground transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
