import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success(t('contact.form.success'));
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pb-20">
      <Navigation />

      <div className="container mx-auto px-6 pt-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground">{t('contact.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border hover:border-neon-pink/50 transition-smooth">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 bg-neon-pink/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-neon-pink" />
                </div>
                <h3 className="font-semibold">{t('contact.email.title')}</h3>
                <p className="text-sm text-muted-foreground">hello@neonova.com</p>
                <p className="text-xs text-muted-foreground">{t('contact.email.desc')}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-neon-cyan/50 transition-smooth">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="font-semibold">{t('contact.phone.title')}</h3>
                <p className="text-sm text-muted-foreground">+370 600 12345</p>
                <p className="text-xs text-muted-foreground">{t('contact.phone.desc')}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-neon-amber/50 transition-smooth">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 bg-neon-amber/10 rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="w-6 h-6 text-neon-amber" />
                </div>
                <h3 className="font-semibold">{t('contact.chat.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('contact.chat.desc')}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
              <CardDescription>{t('contact.form.desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t('contact.form.message')}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="neon-solid"
                  size="lg"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.form.sending') || 'Sending...' : t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
