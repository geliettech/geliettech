import { experiences } from "../contants/data";

const Experience = () => {
  return (
    <section id="experiences" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-12">
          Relevant <span className="text-primary">Experience</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-border h-full" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-10 flex flex-col md:flex-row items-start md:items-center w-full 
              ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >

              {/* Content */}
              <div
                className={`w-full md:w-1/2 pl-12 md:pl-6 pr-2 md:pr-6`}
              >
                <div className="bg-card p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                  <h3 className="text-base md:text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mt-2 md:mt-3 text-xs md:text-sm text-primary">
                    {exp.company} • {exp.period}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;