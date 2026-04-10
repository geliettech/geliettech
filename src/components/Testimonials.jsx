import React from "react";

const recommendationsData = [
  {
    id: 1,
    name: "SuvWe Money",
    message: "OGE is an exceptional frontend developer. She delivers clean and efficient code every time.",
    role: "Mentor at SheCodeAfrica",
  },
  {
    id: 2,
    name: "Damiola Johnson",
    message: "Her attention to detail and creativity in building responsive UI is outstanding.",
    role: "Project Manager at Stutern",
  },
];

const Testimonials = () => {
  return (
    
<section id="testimonials" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Testi<span className="text-primary">monials</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are what clients, business owner and team members are saying about me.
        </p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {recommendationsData.map((rec) => (
          <div
            key={rec.id}
            className="p-6 flex flex-col justify-between group bg-card rounded-lg overflow-hidden card-hover"
          >
            <div>
              <p className="text-base text-muted-foreground mb-4">{rec.message}</p>
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex flex-col">
                <span className="text-primary font-semibold">{rec.name}</span>
                <span className="text-foreground/70 text-sm">{rec.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testimonials;