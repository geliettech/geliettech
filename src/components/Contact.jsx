// import {
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Twitter,
// } from "lucide-react";
// import { cn } from "../lib/utils";
// import { useToast } from "../hooks/use-toast";
// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// const INITIAL_VALUE = { fullname: "", email: "", message: "" }

// export const Contact = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//     const [form, setForm] = useState(INITIAL_VALUE);
//   const [responseMessage, setResponseMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const serviceId = "service_070699";
//     const templateId = "template_070699";
//     const publicKey = "1EKhg2mgb3zDOvQWM";

//     const templateParams = {
//       fullname: form.fullname,
//       email: form.email,
//       message: form.message,
//     };

//     emailjs
//       .send(serviceId, templateId, templateParams, publicKey)
//       .then((response) => {
//         console.log("Email sent successfully:", response);
//            setTimeout(() => {
//             setResponseMessage("Email sent successfully!");
//         setErrorMessage("");
//     }, 1500);
        
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
    //                 setTimeout(() => {
    //     setResponseMessage("");
    //     setErrorMessage("Error sending email. Please try again later.");
    // }, 1500);
//       });

//   emailjs
//       .send(serviceId, templateId, templateParams, publicKey)
//       .then((response) => {
//         console.log("Email sent successfully:", response);
//         setResponseMessage("Email sent successfully!");
//         setErrorMessage("");
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//         setResponseMessage("");
//         setErrorMessage("Error sending email. Please try again later.");
//       }).finally(
// setForm(INITIAL_VALUE);
//       )
//   };

//   return (
//     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Get In <span className="text-primary"> Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Have a project in mind or want to collaborate? Feel free to reach out.
//           I'm always open to discussing new opportunities.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold mb-6">
//               {" "}
//               Contact Information
//             </h3>

//             <div className="space-y-6 justify-center">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Email</h4>
//                   <a
//                     href="mailto:hello@gmail.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     ogechi.uhegbu@outlook.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Phone</h4>
//                   <a
//                     href="tel:+11234567890"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     +1 (123) 456-7890
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Location</h4>
//                   <a className="text-muted-foreground hover:text-primary transition-colors">
//                     Vancouver, BC, Canada
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="pt-8">
//               <h4 className="font-medium mb-4"> Connect With Me</h4>
//               <div className="flex space-x-4 justify-center">
//                 <a href="https://www.linkedin.com/in/geliettech" target="_blank">
//                   <Linkedin />
//                 </a>
//                 <a href="https://x.com/geliettech" target="_blank">
//                   <Twitter />
//                 </a>
//                 <a href="https://instagram.com/geliettech" target="_blank">
//                   <Instagram />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div
//             className="bg-card p-8 rounded-lg shadow-xs"
//             onSubmit={sendEmail}
//           >
//             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Name
//                 </label>
//                 <input 
//                   id="name"
//               type="email"
//               name="fullname"
//               value={form.fullname}
//               onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                   placeholder="Jane Maxwell..."
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Email
//                 </label>
//                 <input
//                   id="email"
//                                 type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                   placeholder="jane@gmail.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//               value={form.message}
//               onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
//                   placeholder="Hello, I'd like to talk about..."
//                 />
//               </div>
//  {responseMessage && (
//               <p style={{ color: "green" }}>{responseMessage}</p>
//             )}
//             {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={cn(
//                   "cosmic-button w-full flex items-center justify-center gap-2"
//                 )}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//                 <Send size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
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
                    ogechi.uhegbu@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Vancouver, BC, Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/geliettech" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://x.com/geliettech" target="_blank">
                  <Twitter />
                </a>
                <a href="https://instagram.com/geliettech" target="_blank">
                  <Instagram />
                </a>
                {/* where to code whatapp QR code image */}
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
                  isSubmitting && "opacity-60 cursor-not-allowed"
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
