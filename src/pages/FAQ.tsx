import { Navigation } from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqItems = [
  {
    question: "How long does it take to receive my custom neon sign?",
    answer: "Most orders are crafted and shipped within 7-10 business days. Shipping typically takes 3-5 business days depending on your location. Rush orders available upon request."
  },
  {
    question: "Are LED neon signs energy efficient?",
    answer: "Yes! Our LED neon signs use 12V low-voltage technology, consuming minimal energy while providing brilliant illumination. They're 80% more energy-efficient than traditional glass neon and safe to touch."
  },
  {
    question: "Can I use my neon sign outdoors?",
    answer: "Yes, we offer weather-resistant options specifically designed for outdoor use. These signs are IP65-rated, protecting against rain and dust. Let us know during checkout if you need outdoor mounting."
  },
  {
    question: "What's included in the 2-year warranty?",
    answer: "Our warranty covers manufacturing defects, LED failures, and power supply issues. We'll repair or replace your sign free of charge. Normal wear and tear or damage from mishandling is not covered."
  },
  {
    question: "How do I install my neon sign?",
    answer: "Each sign comes with a mounting kit and clear instructions. Most signs can be hung using the included hanging holes or standoff screws. The plug-and-play power supply makes setup easy - no electrician needed!"
  },
  {
    question: "Can I change the text or cancel my order?",
    answer: "You can modify or cancel your order within 24 hours of purchase. Once production begins, changes aren't possible. Contact us immediately if you need to make adjustments."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not happy with your sign, contact us for a return authorization. Custom signs must be in original condition. Return shipping is the customer's responsibility."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to most countries worldwide. International orders typically take 10-15 business days. Customs fees and import duties are the customer's responsibility."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen pb-20">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Frequently Asked <span className="text-neon-purple neon-glow-purple">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our custom LED neon signs
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
              <h2 className="text-2xl font-bold">Still have questions?</h2>
              <p className="text-muted-foreground">
                Our team is here to help! Get in touch and we'll respond within 24 hours.
              </p>
              <a href="/contact">
                <button className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-neon-purple/10 text-neon-purple border border-neon-purple/30 hover:bg-neon-purple/20 transition-smooth font-medium text-sm">
                  Contact Us
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
