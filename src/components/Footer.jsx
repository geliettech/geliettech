// import React from "react";
// const currentYear = new Date().getFullYear()

// const Footer = () => {
//   return (
//     <div className="bg-gray-800 text-sm p-4 text-center text-white">
//       Copyright &copy; 2023 - { currentYear } Ogechi Juliet Uhegbu. All Rights reserved.
//     </div>
//   );
// };

// export default Footer;
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};


export default Footer;