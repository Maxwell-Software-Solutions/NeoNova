import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="mb-4 text-7xl font-bold text-neon-pink neon-glow-pink">404</h1>
        <p className="mb-4 text-2xl font-semibold">{t("notFound.title")}</p>
        <p className="text-muted-foreground mb-8">{t("notFound.subtitle")}</p>
        <a href="/">
          <Button variant="neon-solid" size="lg">
            {t("notFound.button")}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
