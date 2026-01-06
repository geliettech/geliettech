// import  { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { RiMailSendLine } from "react-icons/ri";
// import { IoLocationOutline } from "react-icons/io5";

// const Contact = () => {
//   const [form, setForm] = useState({ fullname: "", email: "", message: "" });
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
//         setResponseMessage("Email sent successfully!");
//         setErrorMessage("");
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//         setResponseMessage("");
//         setErrorMessage("Error sending email. Please try again later.");
//       });

//     setForm({
//       fullname: "",
//       email: "",
//       message: "",
//     });
//   };

//   const contact_info = [
//     { logo: <RiMailSendLine />, text: "julietogechi27@gmail.com" },
//     {
//       logo: <IoLocationOutline />,
//       text: "Nigeria",
//     },
//   ];

//   return (
//     <section id="contact" className="py-10 px-3 text-white">
//       <div className="text-center mt-8">
//         <h3 className="text-4xl font-semibold">
//         ✉️ Contact <span className="text-cyan-600">Me</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

//         <div
//           className="mt-16 flex md:flex-row flex-col
//          gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
//         >
//           <form onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
//             <input
//               type="text"
//               name="fullname"
//               value={form.fullname}
//               onChange={handleChange}
//               placeholder="Your Name"
//             />
//             <input
//               type="Email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Your Email Address"
//             />
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               rows={10}
//             ></textarea>
//             {responseMessage && (
//               <p style={{ color: "green" }}>{responseMessage}</p>
//             )}
//             {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//             <button className="btn-primary w-fit">Send Message</button>
//           </form>
//           <div className="flex flex-col  gap-7 ">
//             {contact_info.map((contact, i) => (
//               <div
//                 key={i}
//                 className="flex flex-row  
//                   text-left gap-4 flex-wrap items-center"
//               >
//                 <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
//                  {contact.logo}
//                 </div>
//                 <p className="md:text-base text-sm  break-words">
//                   {contact.text}
//                 </p>
//               </div>
//             ))}
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
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
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
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Vancouver, BC, Canada
                  </a>
                </div>
              </div>
            </div>
{/* //   const social_media = [
//    {social_logo: "logo-instagram", social_link: "https://instagram.com/geliettech"} ,
//    {social_logo: "logo-github", social_link: "https://github.com/geliettech"} ,
//    {social_logo: "logo-linkedin", social_link: "https://www.linkedin.com/in/geliettech"} ,
//    {social_logo: "logo-twitter", social_link: "https://x.com/geliettech"} ,
//    {social_logo: "logo-medium", social_link: "https://geliettech.medium.com/"} ,
//   ]; */}
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Pedro Machado..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
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