import { FaInstagram, FaLinkedin, FaEnvelope, FaLocationDot, FaPaperPlane, FaXTwitter, FaPinterest, FaYoutube } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { cn } from "../lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import WhatsappQRCode from "../assets/whatsappQRCode.jpg";


const INITIAL_VALUE = {
  fullname: "",
  email: "",
  message: "",
};

export const Contact = () => {
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
    <section id="contact" className="section-shell">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header */}
        <header className="mb-12 text-left md:mb-14">
          <p className="section-kicker">Have an idea?</p>
          <h2 className="section-title">
            Let’s make something <span className="text-primary">great</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </header>
        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-lg font-semibold">Contact information</h3>
            {/* Info Items */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <FaEnvelope className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Email</h4>
                  <a
                    href="mailto:julietogechi27@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    julietogechi27@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <FaLocationDot className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            {/* Social + QR */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center gap-6 md:gap-10 items-center">
                {/* Icons */}
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://www.linkedin.com/in/geliettech"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://www.x.com/geliettech" target="_blank" rel="noreferrer" aria-label="X" className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:border-primary hover:bg-primary/5 hover:text-primary">
                    <FaXTwitter size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/geliettech"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://www.pinterest.com/geliettech"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Pinterest"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    <FaPinterest size={20} />
                  </a>
                  <a href="https://www.youtube.com/@geliettech" target="_blank" rel="noreferrer" aria-label="YouTube" className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:border-primary hover:bg-primary/5 hover:text-primary">
                    <FaYoutube size={20} />
                  </a>

                  <a href="https://geliettech.medium.com" target="_blank" rel="noreferrer" aria-label="Medium" className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:border-primary hover:bg-primary/5 hover:text-primary">
                    <SiMedium size={20} />
                  </a>
                </div>

                {/* QR Code */}
                <div className="w-34 h-34">
                  <img
                    src={WhatsappQRCode}
                    alt="WhatsApp QR"
                    className="w-full h-full object-cover rounded-lg shadow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[1.5rem] border border-border/80 bg-card p-5 shadow-sm sm:p-6 md:p-8">
            <h3 className="mb-6 text-xl font-semibold">Send a message</h3>

            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Jane Maxwell"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="janemaxwell@gmail.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field"
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
                  "cosmic-button flex min-h-14 w-full items-center justify-center gap-2 px-6 py-4 text-base md:min-h-16 md:text-lg",
                  isSubmitting && "opacity-60 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
