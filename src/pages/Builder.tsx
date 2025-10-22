import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NeonPreview } from '@/components/NeonPreview';
import { Download, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { useLanguage } from '@/contexts/LanguageContext';

type NeonColor = 'pink' | 'cyan' | 'amber' | 'purple' | 'green' | 'ice';
type NeonFont = 'cursive' | 'script' | 'dancing' | 'satisfy';
type NeonSize = 'sm' | 'md' | 'lg' | 'xl';

const Builder = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('Dream Big');
  const [color, setColor] = useState<NeonColor>('pink');
  const [font, setFont] = useState<NeonFont>('cursive');
  const [size, setSize] = useState<NeonSize>('lg');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const colors: { value: NeonColor; label: string; hex: string }[] = [
    { value: 'pink', label: 'Electric Pink', hex: '#FF3EA5' },
    { value: 'cyan', label: 'Cyan', hex: '#18D7FF' },
    { value: 'amber', label: 'Warm Amber', hex: '#FFC32B' },
    { value: 'purple', label: 'Purple', hex: '#A855F7' },
    { value: 'green', label: 'Green', hex: '#00FF7F' },
    { value: 'ice', label: 'Ice White', hex: '#E9F7FF' },
  ];

  const fonts: { value: NeonFont; label: string }[] = [
    { value: 'cursive', label: 'Pacifico' },
    { value: 'script', label: 'Great Vibes' },
    { value: 'dancing', label: 'Dancing Script' },
    { value: 'satisfy', label: 'Satisfy' },
  ];

  const sizes: { value: NeonSize; label: string; width: string; price: number }[] = [
    { value: 'sm', label: 'Small', width: '30-40cm', price: 149 },
    { value: 'md', label: 'Medium', width: '50-70cm', price: 249 },
    { value: 'lg', label: 'Large', width: '80-100cm', price: 349 },
    { value: 'xl', label: 'Extra Large', width: '110-130cm', price: 499 },
  ];

  const currentPrice = sizes.find((s) => s.value === size)?.price || 249;

  const handleDownload = () => {
    toast.success(t('builder.toast.download'));
  };

  const handleGetQuote = async () => {
    const emailSchema = z.string().email();
    const result = emailSchema.safeParse(email);

    if (!result.success) {
      toast.error(t('builder.toast.emailError'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'quote',
          name: email.split('@')[0], // Use email username as name fallback
          email: email,
          quoteDetails: {
            text: text,
            color: color,
            font: font,
            size: size,
            price: currentPrice,
          },
        }),
      });

      if (response.ok) {
        toast.success(t('builder.toast.quote'));
        setEmail('');
      } else {
        toast.error('Failed to send quote request. Please try again.');
      }
    } catch (error) {
      console.error('Error sending quote request:', error);
      toast.error('Failed to send quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <Navigation />

      <div className="container mx-auto px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              {t('builder.title')} <span className="text-neon-cyan neon-glow-cyan">{t('nav.builder')}</span>
            </h1>
            <p className="text-xl text-muted-foreground">{t('builder.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Preview Panel */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>{t('builder.preview.title')}</CardTitle>
                  <CardDescription>{t('builder.preview.desc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <NeonPreview text={text} color={color} font={font} size={size} className="min-h-[400px]" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-neon-pink/5 to-neon-cyan/5 border-neon-pink/30">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">{t('builder.price.from')}</p>
                      <p className="text-4xl font-bold text-neon-pink">${currentPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {t('builder.price.size')} {sizes.find((s) => s.value === size)?.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{sizes.find((s) => s.value === size)?.width}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        {t('builder.email.label')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('builder.email.placeholder')}
                        className="mt-1.5"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button
                        variant="neon-solid"
                        size="lg"
                        className="w-full"
                        onClick={handleGetQuote}
                        disabled={isSubmitting}
                      >
                        <Mail className="mr-2" />
                        {isSubmitting ? 'Sending...' : t('builder.submit')}
                      </Button>
                      <Button variant="neon-cyan" size="default" className="w-full" onClick={handleDownload}>
                        <Download className="mr-2" />
                        {t('builder.download')}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Controls Panel */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>{t('builder.text.title')}</CardTitle>
                  <CardDescription>{t('builder.text.desc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Input
                    value={text}
                    onChange={(e) => setText(e.target.value.slice(0, 25))}
                    placeholder={t('builder.text.placeholder')}
                    className="text-lg"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    {text.length}/25 {t('builder.text.counter')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>{t('builder.font.title')}</CardTitle>
                  <CardDescription>{t('builder.font.desc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {fonts.map((f) => (
                      <Button
                        key={f.value}
                        variant={font === f.value ? 'neon' : 'outline'}
                        onClick={() => setFont(f.value)}
                        className="h-auto py-4"
                      >
                        <span className={`font-${f.value} text-lg`}>{f.label}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>{t('builder.color.title')}</CardTitle>
                  <CardDescription>{t('builder.color.desc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {colors.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setColor(c.value)}
                        className={`
                          relative p-4 rounded-lg border-2 transition-smooth
                          ${
                            color === c.value
                              ? 'border-current scale-105'
                              : 'border-border hover:border-muted-foreground/50'
                          }
                        `}
                        style={{
                          color: c.hex,
                          boxShadow: color === c.value ? `0 0 20px ${c.hex}40` : 'none',
                        }}
                      >
                        <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: c.hex }} />
                        <p className="text-xs font-medium text-foreground">{c.label}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>{t('builder.size.title')}</CardTitle>
                  <CardDescription>{t('builder.size.desc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sizes.map((s) => (
                      <button
                        key={s.value}
                        onClick={() => setSize(s.value)}
                        className={`
                          w-full p-4 rounded-lg border-2 transition-smooth text-left
                          ${
                            size === s.value
                              ? 'border-neon-pink bg-neon-pink/10'
                              : 'border-border hover:border-muted-foreground/50'
                          }
                        `}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{s.label}</p>
                            <p className="text-sm text-muted-foreground">{s.width}</p>
                          </div>
                          <p className="text-lg font-bold text-neon-pink">${s.price}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
