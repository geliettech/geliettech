import React from 'react'

const Experience = () => {
const experiences = [
  {
    role: "Freelance Frontend Engineer",
    company: "Upwork",
    period: "May 2025 - Present",
    description:
      "Built responsive web applications using React and Tailwind CSS, improving usability and performance across devices.",
  },
  {
    role: "Frontend Developer",
    company: "Afritech Digital Hub",
    period: "Oct 2025 – Apr 2026",
    description:
      "Developed scalable UI components with Next.js and collaborated with backend teams to deliver production-ready features.",
  },
  {
    role: "Software Engineering Tutor",
    company: "NYSC",
    period: "Apr 2024 – Mar 2025",
    description:
      "Trained 30+ students in programming and web development using practical and project-based learning.",
  },
  {
    role: "Frontend Intern",
    company: "Stutern",
    period: "Sep 2022 – Aug 2023",
    description:
      "Built responsive interfaces, integrated APIs, and improved application performance using React and modern tools.",
  },
  {
    role: "Software Engineering Intern",
    company: "ICT CENTER, FUO",
    period: "Dec 2020 - April 2021",
    description:
      "Strengthened expertise in HTML, CSS, JavaScript, SQL, and Python through structured training sessions and real-world project implementation.",
  },
];

  return (
    <section id="experiences" className="py-24 relative">
   <div className="container mx-auto max-w-5xl">
 <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Relevant <span className="text-primary"> Experience</span>
        </h2>
      <div className="relative max-w-4xl mx-auto z-10">
        
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-1/2 px-6">
              <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-primary">
                  {exp.company} • {exp.period}
                </p>
                <p className="mt-3 text-foreground/70 text-sm">
                  {exp.description}
                </p>
              </div>
            </div>

            {/* Dot */}
            <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2" />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Experience;