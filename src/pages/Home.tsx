import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Zap, Shield, Sparkles, Clock } from "lucide-react";
import heroImage from "@/assets/hero-neon.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Home = () => {
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
                Custom LED Neon,
                <span className="block text-neon-pink neon-glow-pink">
                  Crafted to Shine.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Design your sign in seconds — premium materials, low energy, long life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/builder">
                  <Button variant="neon-solid" size="xl">
                    Design Yours
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="neon" size="xl">
                    View Gallery
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
            How It <span className="text-neon-cyan neon-glow-cyan">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-neon-pink/10 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-neon-pink" />
                </div>
                <h3 className="text-2xl font-semibold">1. Design</h3>
                <p className="text-muted-foreground">
                  Use our interactive builder to create your perfect sign. Choose fonts, colors, and size.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-neon-cyan" />
                </div>
                <h3 className="text-2xl font-semibold">2. Craft</h3>
                <p className="text-muted-foreground">
                  Our expert team handcrafts your LED neon sign with premium, energy-efficient materials.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-neon-amber/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-neon-amber" />
                </div>
                <h3 className="text-2xl font-semibold">3. Deliver</h3>
                <p className="text-muted-foreground">
                  Fast, secure shipping with 2-year warranty. Ready to hang and illuminate your space.
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
            Why Choose <span className="text-neon-purple neon-glow-purple">NeoNova</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:border-neon-pink/50 transition-smooth">
              <CardContent className="pt-6 space-y-2">
                <Zap className="w-8 h-8 text-neon-pink mb-2" />
                <h3 className="font-semibold">Low Heat, Long Life</h3>
                <p className="text-sm text-muted-foreground">12V low-voltage, safe to touch. 50,000+ hours lifespan.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-neon-cyan/50 transition-smooth">
              <CardContent className="pt-6 space-y-2">
                <Shield className="w-8 h-8 text-neon-cyan mb-2" />
                <h3 className="font-semibold">Indoor & Outdoor</h3>
                <p className="text-sm text-muted-foreground">Weather-resistant options for any location.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-neon-amber/50 transition-smooth">
              <CardContent className="pt-6 space-y-2">
                <Clock className="w-8 h-8 text-neon-amber mb-2" />
                <h3 className="font-semibold">Fast Lead Times</h3>
                <p className="text-sm text-muted-foreground">Most orders ship within 7-10 business days.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-neon-purple/50 transition-smooth">
              <CardContent className="pt-6 space-y-2">
                <Sparkles className="w-8 h-8 text-neon-purple mb-2" />
                <h3 className="font-semibold">2-Year Warranty</h3>
                <p className="text-sm text-muted-foreground">Guaranteed quality with full support.</p>
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
              Featured <span className="text-neon-amber neon-glow-amber">Designs</span>
            </h2>
            <p className="text-muted-foreground">See what's possible with custom LED neon</p>
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
                View Full Gallery
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
                Ready to <span className="text-neon-pink neon-glow-pink">Design</span> Yours?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Create a stunning custom LED neon sign in minutes with our interactive builder
              </p>
              <Link to="/builder">
                <Button variant="neon-solid" size="xl">
                  Start Designing
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
              <Link to="/faq" className="hover:text-neon-pink transition-smooth">FAQ</Link>
              <Link to="/contact" className="hover:text-neon-cyan transition-smooth">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
