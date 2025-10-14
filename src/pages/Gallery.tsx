import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryItems = [
  { 
    id: 1, 
    image: gallery1, 
    title: "Open", 
    color: "Cyan",
    category: "Business"
  },
  { 
    id: 2, 
    image: gallery2, 
    title: "Good Vibes", 
    color: "Amber",
    category: "Home"
  },
  { 
    id: 3, 
    image: gallery3, 
    title: "Love", 
    color: "Purple",
    category: "Events"
  },
  { 
    id: 4, 
    image: gallery4, 
    title: "Shine", 
    color: "Ice White",
    category: "Personal"
  },
];

const Gallery = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pb-20">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              {t("gallery.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("gallery.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {galleryItems.map((item) => (
              <Card 
                key={item.id}
                className="group overflow-hidden bg-card border-border hover:border-neon-pink/50 transition-smooth"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={item.image} 
                      alt={`Custom neon sign - ${item.title}`}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.color} • {item.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border-neon-cyan/30">
            <CardContent className="py-12 text-center space-y-4">
              <h2 className="text-3xl font-bold">
                {t("home.cta.title")}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t("home.cta.subtitle")}
              </p>
              <a href="/builder">
                <button className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 hover:shadow-[0_0_20px_rgba(24,215,255,0.3)] transition-smooth font-medium text-sm">
                  {t("home.cta.button")}
                </button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
