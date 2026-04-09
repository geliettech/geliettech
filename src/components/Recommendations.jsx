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
  {
    id: 3,
    name: "Chinaemerem Njoku",
    message: "Working with OGE is always a pleasure; she communicates clearly and meets deadlines consistently.",
    role: "Frontend Developer Intern at Stutern",
  },
];

const Recommendations = () => {
  return (
    
<section id="recommedations" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Recommen<span className="text-primary">dations</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are what clients, business owner and team members are saying abot me.
        </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

export default Recommendations;