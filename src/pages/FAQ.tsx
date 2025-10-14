import { Navigation } from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqItems = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1")
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2")
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3")
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4")
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5")
    },
    {
      question: t("faq.q6"),
      answer: t("faq.a6")
    }
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              {t("faq.title")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("faq.subtitle")}
            </p>
          </div>

          <Card className="bg-card border-border p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-neon-pink transition-smooth">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <Card className="mt-12 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 border-neon-purple/30">
            <div className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold">{t("contact.title")}</h2>
              <p className="text-muted-foreground">
                {t("contact.subtitle")}
              </p>
              <a href="/contact">
                <button className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-neon-purple/10 text-neon-purple border border-neon-purple/30 hover:bg-neon-purple/20 transition-smooth font-medium text-sm">
                  {t("nav.contact")}
                </button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
