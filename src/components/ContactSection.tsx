import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="animate-on-scroll rounded-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-start space-x-3">
                <Mail className="text-primary mt-1" size={18} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:namdang089@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    namdang089@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="text-primary mt-1" size={18} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+84) 346 803 595
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={18} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Võ Văn Hát, Hồ Chí Minh
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <h4 className="font-medium mb-2">Connect with me</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/phgnamm"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors p-2 rounded-full"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-ph%C6%B0%C6%A1ng-nam-730aa5320/"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors p-2 rounded-full"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:namdang089@gmail.com"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors p-2 rounded-full"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="animate-on-scroll rounded-xl overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader>
              <CardTitle className="text-lg">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Phuong Nam"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="namdang089@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
