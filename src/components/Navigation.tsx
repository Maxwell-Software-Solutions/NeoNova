import { Link, useLocation } from "react-router-dom";
import { Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-neon-pink transition-smooth group-hover:text-neon-cyan" />
          <span className="text-xl font-semibold">
            Neo<span className="text-neon-pink">Nova</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-smooth hover:text-neon-pink ${
              isActive("/") ? "text-neon-pink" : "text-foreground"
            }`}
          >
            {t("nav.home")}
          </Link>
          <Link 
            to="/builder" 
            className={`text-sm font-medium transition-smooth hover:text-neon-cyan ${
              isActive("/builder") ? "text-neon-cyan" : "text-foreground"
            }`}
          >
            {t("nav.builder")}
          </Link>
          <Link 
            to="/gallery" 
            className={`text-sm font-medium transition-smooth hover:text-neon-amber ${
              isActive("/gallery") ? "text-neon-amber" : "text-foreground"
            }`}
          >
            {t("nav.gallery")}
          </Link>
          <Link 
            to="/faq" 
            className={`text-sm font-medium transition-smooth hover:text-neon-purple ${
              isActive("/faq") ? "text-neon-purple" : "text-foreground"
            }`}
          >
            {t("nav.faq")}
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-smooth hover:text-neon-ice ${
              isActive("/contact") ? "text-neon-ice" : "text-foreground"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("lt")}>
                <span className={language === "lt" ? "font-bold" : ""}>🇱🇹 Lietuvių</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                <span className={language === "en" ? "font-bold" : ""}>🇬🇧 English</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/builder">
            <Button variant="neon-solid" size="default">
              {t("home.hero.cta")}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
