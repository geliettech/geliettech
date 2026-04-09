import { Instagram, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { FaPinterest, FaYoutube } from "react-icons/fa6";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Profile from "../assets/img/whatsappQRCode.jpg";

const INITIAL_VALUE = {
  fullname: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState(INITIAL_VALUE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_070699";
    const templateId = "template_070699";
    const publicKey = "1EKhg2mgb3zDOvQWM";

    const templateParams = {
      fullname: form.fullname,
      email: form.email,
      message: form.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setResponseMessage("Email sent successfully!");
      setErrorMessage("");
      setForm(INITIAL_VALUE);
    } catch (error) {
      console.error("Error sending email:", error);

      setErrorMessage("Error sending email. Please try again later.");
      setResponseMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ogechi.uhegbu@outlook.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    julietogechi27@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center gap-12 items-center">
                <div className="flex flex-col space-y-4">
                  <a
                    href="https://www.linkedin.com/in/geliettech"
                    target="_blank"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.x.com/geliettech" target="_blank">
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/geliettech"
                    target="_blank"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.pinterest.com/geliettech"
                    target="_blank"
                  >
                    <FaPinterest size={20} />
                  </a>
                  <a href="https://www.youtube.com/geliettech" target="_blank">
                    <FaYoutube size={20} />
                  </a>
                </div>

                {/*whatapp QR code image */}
                <div className="w-42 h-42 opacity-0 animate-fade-in-delay-1">
                  <img
                    src={Profile}
                    alt="Profile"
                    className="w-full h-full object-cover bg-primary rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="Jane Maxwell"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="jane@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {responseMessage && (
                <p className="text-green-600 text-sm">{responseMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-600 text-sm">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-60 cursor-not-allowed",
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
