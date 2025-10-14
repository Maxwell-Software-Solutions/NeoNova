import { createContext, useContext, useState, ReactNode } from "react";

type Language = "lt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  lt: {
    // Navigation
    "nav.home": "Pradžia",
    "nav.builder": "Kūrėjas",
    "nav.gallery": "Galerija",
    "nav.faq": "DUK",
    "nav.contact": "Kontaktai",
    
    // Home Page
    "home.hero.title": "LED Neoninės iškabos",
    "home.hero.subtitle": "Sukurkite savo ženklą per sekundes — aukščiausios kokybės medžiagos, maža energija, ilgas tarnavimas.",
    "home.hero.cta": "Sukurti Savo",
    "home.howItWorks.title": "Kaip Tai Veikia",
    "home.howItWorks.step1.title": "Dizainas",
    "home.howItWorks.step1.desc": "Sukurkite savo unikalią iškabą naudodami mūsų interaktyvų kūrėją",
    "home.howItWorks.step2.title": "Gamyba",
    "home.howItWorks.step2.desc": "Mūsų meistrai pagamins jūsų ženklą naudojant LED neoną",
    "home.howItWorks.step3.title": "Pristatymas",
    "home.howItWorks.step3.desc": "Gaukite savo puikią neoninę iškabą pristatytą į duris",
    "home.benefits.title": "Kodėl Pasirinkti NeoNova",
    "home.benefits.benefit1.title": "Energijos Efektyvumas",
    "home.benefits.benefit1.desc": "LED neonas naudoja 80% mažiau energijos nei tradicinis neonas",
    "home.benefits.benefit2.title": "50,000+ Valandų",
    "home.benefits.benefit2.desc": "Ilgas tarnavimo laikas užtikrina, kad jūsų ženklas švies metų metus",
    "home.benefits.benefit3.title": "Saugus & Šaltas",
    "home.benefits.benefit3.desc": "12V mažos įtampos sistema yra saugi liesti ir nekelia gaisro pavojaus",
    "home.benefits.benefit4.title": "2 Metų Garantija",
    "home.benefits.benefit4.desc": "Visiškai užtikrinti kokybe ir patvarumu",
    "home.gallery.title": "Mūsų Darbai",
    "home.gallery.cta": "Žiūrėti Visą Galeriją",
    "home.cta.title": "Pasiruošę Sukurti Savo Neoninį Ženklą?",
    "home.cta.subtitle": "Pradėkite dizainuoti per sekundes ir gaukite momentinę kainą",
    "home.cta.button": "Paleisti Kūrėją",
    
    // Builder Page
    "builder.title": "Neoninės Iškabos",
    "builder.subtitle": "Sukurkite savo tobulą LED neoninę iškabą realiuoju laiku",
    "builder.preview.title": "Tiesioginė Peržiūra",
    "builder.preview.desc": "Stebėkite, kaip jūsų dizainas atgyja",
    "builder.price.from": "Pradedant nuo",
    "builder.price.size": "Dydis:",
    "builder.email.label": "El. Pašto Adresas",
    "builder.email.placeholder": "jusu@pastas.lt",
    "builder.submit": "Pateikti Pasiūlymo Užklausą",
    "builder.download": "Atsisiųsti Peržiūrą",
    "builder.text.title": "Tekstas",
    "builder.text.desc": "Maks. 25 simboliai",
    "builder.text.placeholder": "Įveskite tekstą...",
    "builder.text.counter": "simboliai",
    "builder.font.title": "Šrifto Stilius",
    "builder.font.desc": "Pasirinkite kursyvinį šriftą",
    "builder.color.title": "Spalva",
    "builder.color.desc": "Pasirinkite neoninės šviesos spalvą",
    "builder.size.title": "Dydis",
    "builder.size.desc": "Pasirinkite ženklo matmenis",
    "builder.toast.download": "Peržiūra atsisiųsta! Patikrinkite atsisiuntimų aplanką.",
    "builder.toast.quote": "Pasiūlymo užklausa išsiųsta! Atsakysime per 24 valandas.",
    "builder.toast.emailError": "Prašome įvesti teisingą el. pašto adresą",
    
    // Gallery Page
    "gallery.title": "Iškabų Galerija",
    "gallery.subtitle": "Naršykite mūsų pasirinktinių LED neoninių iškabų kolekciją",
    "gallery.all": "Visos",
    "gallery.business": "Verslas",
    "gallery.wedding": "Vestuvės",
    "gallery.home": "Namai",
    "gallery.event": "Renginys",
    
    // FAQ Page
    "faq.title": "Dažnai Užduodami Klausimai",
    "faq.subtitle": "Viską, ką reikia žinoti apie mūsų LED neonines iškabas",
    "faq.q1": "Kuo LED neonas skiriasi nuo tradicinio neono?",
    "faq.a1": "LED neoninės iškabos naudoja lanksčias LED juosteles uždarytose silikoninėse vamzdeliuose, o tradicinis neonas naudoja stiklinius vamzdžius su neoninėmis dujomis. LED neonas yra energijos efektyvesnis, saugesnis, patvaresnis ir leidžia pasiekti daugiau spalvų bei formų.",
    "faq.q2": "Kiek laiko užtruks pagaminti ir pristatyti mano ženklą?",
    "faq.a2": "Standartinė gamyba paprastai užtrunka 7-10 darbo dienų patvirtinus dizainą. Pristatymas užtrunka papildomai 3-5 darbo dienas priklausomai nuo vietos. Sudėtingesni dizainai gali užtrukti ilgiau.",
    "faq.q3": "Ar galiu naudoti neoninį ženklą lauke?",
    "faq.a3": "Taip! Siūlome IP65 klasės lauko variantus, kurie yra atsparūs vandeniui ir orui. Įsitikinkite, kad pasirinkote lauko variantą užsakydami.",
    "faq.q4": "Kokia garantija?",
    "faq.a4": "Visi mūsų neoniniai ženklai turi 2 metų gamintojo garantiją defektams. Paprastai tarnaus 50,000+ valandų (apie 10+ metų normalaus naudojimo).",
    "faq.q5": "Ar galite sukurti pasirinktinį logotipą ar dizainą?",
    "faq.a5": "Absoliučiai! Nors mūsų kūrėjas puikiai tinka tekstui, galime sukurti visiškai pasirinktines formas, logotipus ir sudėtingus dizainus. Susisiekite su mumis su savo dizaino failu (SVG, AI ar aukštos raiškos PNG) pasiūlymui gauti.",
    "faq.q6": "Kaip montuojami ženklai?",
    "faq.a6": "Kiekvienas ženklas turi skaidrios akrilinio fono plokštę su išgręžtomis skylutėmis sienai kabinti. Jie taip pat gali būti montuojami ant stovų tam tikroms programoms.",
    
    // Contact Page
    "contact.title": "Susisiekite Su Mumis",
    "contact.subtitle": "Turite klausimų? Mūsų komanda pasiruošusi padėti",
    "contact.email.title": "El. Paštas",
    "contact.email.desc": "Atsakome per 24 valandas",
    "contact.phone.title": "Telefonas",
    "contact.phone.desc": "Pr-Pn 9:00-18:00",
    "contact.chat.title": "Tiesioginė Pagalba",
    "contact.chat.desc": "Momentinis atsakymas",
    "contact.form.title": "Siųsti Žinutę",
    "contact.form.desc": "Užpildykite formą žemiau ir susisieksime su jumis",
    "contact.form.name": "Vardas",
    "contact.form.namePlaceholder": "Jūsų vardas",
    "contact.form.email": "El. Paštas",
    "contact.form.emailPlaceholder": "jusu@pastas.lt",
    "contact.form.message": "Žinutė",
    "contact.form.messagePlaceholder": "Jūsų žinutė...",
    "contact.form.submit": "Siųsti Žinutę",
    "contact.form.success": "Ačiū už jūsų žinutę! Netrukus susisieksime.",
    
    // Not Found
    "notFound.title": "Puslapis Nerastas",
    "notFound.subtitle": "Atsiprašome, ieškomo puslapio negalime rasti.",
    "notFound.button": "Grįžti Į Pradžią",
    
    // Common
    "common.viewAll": "Peržiūrėti Viską",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.builder": "Builder",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    
    // Home Page
    "home.hero.title": "Custom LED Neon, Crafted to Shine",
    "home.hero.subtitle": "Design your sign in seconds — premium materials, low energy, long life.",
    "home.hero.cta": "Design Yours",
    "home.howItWorks.title": "How It Works",
    "home.howItWorks.step1.title": "Design",
    "home.howItWorks.step1.desc": "Create your unique sign using our interactive builder",
    "home.howItWorks.step2.title": "Craft",
    "home.howItWorks.step2.desc": "Our artisans handcraft your sign using LED neon flex",
    "home.howItWorks.step3.title": "Deliver",
    "home.howItWorks.step3.desc": "Receive your stunning neon sign delivered to your door",
    "home.benefits.title": "Why Choose NeoNova",
    "home.benefits.benefit1.title": "Energy Efficient",
    "home.benefits.benefit1.desc": "LED neon uses 80% less energy than traditional neon",
    "home.benefits.benefit2.title": "50,000+ Hours",
    "home.benefits.benefit2.desc": "Long lifespan ensures your sign shines for years to come",
    "home.benefits.benefit3.title": "Safe & Cool",
    "home.benefits.benefit3.desc": "12V low voltage system is safe to touch and poses no fire risk",
    "home.benefits.benefit4.title": "2-Year Warranty",
    "home.benefits.benefit4.desc": "Fully backed for quality and durability",
    "home.gallery.title": "Our Work",
    "home.gallery.cta": "View Full Gallery",
    "home.cta.title": "Ready to Create Your Neon Sign?",
    "home.cta.subtitle": "Start designing in seconds and get instant pricing",
    "home.cta.button": "Launch Builder",
    
    // Builder Page
    "builder.title": "Neon Sign",
    "builder.subtitle": "Design your perfect custom LED neon sign in real-time",
    "builder.preview.title": "Live Preview",
    "builder.preview.desc": "See your design come to life",
    "builder.price.from": "Starting from",
    "builder.price.size": "Size:",
    "builder.email.label": "Email Address",
    "builder.email.placeholder": "your@email.com",
    "builder.submit": "Submit Quote Request",
    "builder.download": "Download Preview",
    "builder.text.title": "Text",
    "builder.text.desc": "Max 25 characters",
    "builder.text.placeholder": "Enter your text...",
    "builder.text.counter": "characters",
    "builder.font.title": "Font Style",
    "builder.font.desc": "Choose your cursive font",
    "builder.color.title": "Color",
    "builder.color.desc": "Pick your neon glow color",
    "builder.size.title": "Size",
    "builder.size.desc": "Select your sign dimensions",
    "builder.toast.download": "Preview downloaded! Check your downloads folder.",
    "builder.toast.quote": "Quote request sent! We'll email you within 24 hours.",
    "builder.toast.emailError": "Please enter a valid email address",
    
    // Gallery Page
    "gallery.title": "Sign Gallery",
    "gallery.subtitle": "Browse our collection of custom LED neon signs",
    "gallery.all": "All",
    "gallery.business": "Business",
    "gallery.wedding": "Wedding",
    "gallery.home": "Home",
    "gallery.event": "Event",
    
    // FAQ Page
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know about our LED neon signs",
    "faq.q1": "How is LED neon different from traditional neon?",
    "faq.a1": "LED neon signs use flexible LED strips housed in silicone tubing, while traditional neon uses glass tubes filled with neon gas. LED neon is more energy-efficient, safer, more durable, and allows for more colors and shapes.",
    "faq.q2": "How long does it take to make and ship my sign?",
    "faq.a2": "Standard production typically takes 7-10 business days after design approval. Shipping takes an additional 3-5 business days depending on location. More complex designs may take longer.",
    "faq.q3": "Can I use my neon sign outdoors?",
    "faq.a3": "Yes! We offer IP65-rated outdoor options that are weatherproof and water-resistant. Just make sure to select the outdoor option when ordering.",
    "faq.q4": "What is the warranty?",
    "faq.a4": "All our neon signs come with a 2-year manufacturer warranty against defects. They're typically rated for 50,000+ hours of use (roughly 10+ years of normal use).",
    "faq.q5": "Can you create a custom logo or design?",
    "faq.a5": "Absolutely! While our builder is perfect for text, we can create fully custom shapes, logos, and intricate designs. Contact us with your design file (SVG, AI, or high-res PNG) for a quote.",
    "faq.q6": "How are the signs mounted?",
    "faq.a6": "Each sign comes with a clear acrylic backing board with pre-drilled holes for wall mounting. They can also be mounted on stands for certain applications.",
    
    // Contact Page
    "contact.title": "Get In Touch",
    "contact.subtitle": "Have questions? Our team is ready to help",
    "contact.email.title": "Email",
    "contact.email.desc": "We respond within 24 hours",
    "contact.phone.title": "Phone",
    "contact.phone.desc": "Mon-Fri 9am-6pm",
    "contact.chat.title": "Live Chat",
    "contact.chat.desc": "Instant response",
    "contact.form.title": "Send a Message",
    "contact.form.desc": "Fill out the form below and we'll get back to you",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Your message...",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Thank you for your message! We'll be in touch soon.",
    
    // Not Found
    "notFound.title": "Page Not Found",
    "notFound.subtitle": "Sorry, we couldn't find the page you're looking for.",
    "notFound.button": "Go Back Home",
    
    // Common
    "common.viewAll": "View All",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("lt");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
