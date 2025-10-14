import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Zap, Shield, Sparkles, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-neon.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-glow-subtle" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {t("home.hero.title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/builder">
                  <Button variant="neon-solid" size="xl">
                    {t("home.hero.cta")}
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="neon" size="xl">
                    {t("home.gallery.cta")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Custom LED neon sign example" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t("home.howItWorks.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-neon-pink/10 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-neon-pink" />
                </div>
                <h3 className="text-2xl font-semibold">{t("home.howItWorks.step1.title")}</h3>
                <p className="text-muted-foreground">
                  {t("home.howItWorks.step1.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-neon-cyan" />
                </div>
                <h3 className="text-2xl font-semibold">{t("home.howItWorks.step2.title")}</h3>
                <p className="text-muted-foreground">
                  {t("home.howItWorks.step2.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-neon-amber/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-neon-amber" />
                </div>
                <h3 className="text-2xl font-semibold">{t("home.howItWorks.step3.title")}</h3>
                <p className="text-muted-foreground">
                  {t("home.howItWorks.step3.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t("home.benefits.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:border-neon-pink/50 transition-smooth">
              <CardContent className="pt-6 space-y-2">
                <Zap className="w-8 h-8 text-neon-pink mb-2" />
                <h3 className="font-semibold">{t("home.benefits.benefit1.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("home.benefits.benefit1.desc")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-neon-cyan/50 transition-smooth">
              <CardContent className="pt-6 space-y-2">
                <Clock className="w-8 h-8 text-neon-cyan mb-2" />
                <h3 className="font-semibold">{t("home.benefits.benefit2.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("home.benefits.benefit2.desc")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-neon-amber/50 transition-smooth">
              <CardContent className="pt-6 space-y-2">
                <Shield className="w-8 h-8 text-neon-amber mb-2" />
                <h3 className="font-semibold">{t("home.benefits.benefit3.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("home.benefits.benefit3.desc")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-neon-purple/50 transition-smooth">
              <CardContent className="pt-6 space-y-2">
                <Sparkles className="w-8 h-8 text-neon-purple mb-2" />
                <h3 className="font-semibold">{t("home.benefits.benefit4.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("home.benefits.benefit4.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {t("home.gallery.title")}
            </h2>
            <p className="text-muted-foreground">{t("gallery.subtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group relative overflow-hidden rounded-xl">
              <img src={gallery1} alt="Custom neon sign - Open" className="w-full h-64 object-cover transition-smooth group-hover:scale-110" />
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img src={gallery2} alt="Custom neon sign - Good Vibes" className="w-full h-64 object-cover transition-smooth group-hover:scale-110" />
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img src={gallery3} alt="Custom neon sign - Love" className="w-full h-64 object-cover transition-smooth group-hover:scale-110" />
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img src={gallery4} alt="Custom neon sign - Shine" className="w-full h-64 object-cover transition-smooth group-hover:scale-110" />
            </div>
          </div>
          <div className="text-center">
            <Link to="/gallery">
              <Button variant="neon-cyan" size="lg">
                {t("home.gallery.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10 border-neon-pink/30">
            <CardContent className="py-16 text-center space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                {t("home.cta.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("home.cta.subtitle")}
              </p>
              <Link to="/builder">
                <Button variant="neon-solid" size="xl">
                  {t("home.cta.button")}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-neon-pink" />
              <span className="font-semibold">NeoNova</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 NeoNova. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/faq" className="hover:text-neon-pink transition-smooth">{t("nav.faq")}</Link>
              <Link to="/contact" className="hover:text-neon-cyan transition-smooth">{t("nav.contact")}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
