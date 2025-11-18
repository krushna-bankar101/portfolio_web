import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krushnabankar101@gmail.com",
      href: "mailto:krushnabankar101@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9307460462",
      href: "tel:+919307460462",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nashik, Maharashtra, India",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      data-testid="section-contact"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-2" data-testid="text-contact-prefix">
            &gt;_ Let's connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient" data-testid="text-contact-title">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="glass border-primary/20 p-8" data-testid="card-contact-info">
              <h3 className="text-2xl font-bold mb-6 font-mono" data-testid="text-contact-info-title">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`contact-info-${index}`}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                          data-testid={`link-${info.label.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium" data-testid={`text-${info.label.toLowerCase()}`}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass border-secondary/20 p-8" data-testid="card-availability">
              <h3 className="text-xl font-bold mb-4 font-mono" data-testid="text-availability-title">
                Open to Opportunities
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-availability-desc">
                I'm actively seeking internship opportunities in full-stack development and data science. 
                Feel free to reach out if you have any opportunities or just want to connect!
              </p>
            </Card>
          </div>

          <Card className="glass border-primary/20 p-8" data-testid="card-contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  data-testid="input-name"
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-email"
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows={6}
                  required
                  data-testid="input-message"
                  className="bg-background/50"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full neon-glow"
                disabled={isSubmitting}
                data-testid="button-send"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
