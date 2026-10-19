import { motion as Motion } from "framer-motion";
import { FaAward, FaCertificate } from "react-icons/fa6";
import { certificates } from "../constants/data";

const Credentials = () => (
  <section id="credentials" className="section-shell">
    <div className="container mx-auto max-w-6xl px-4 md:px-8">
      <Motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
      >
        <div className="text-left">
          <p className="section-kicker">Continued learning</p>
          <h2 className="section-title">
            Certificates <span className="text-primary">& badges</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground md:text-base">
            Selected learning certificates and a participation badge. My
            technical skills are listed separately in the toolkit section.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {certificates.map((certificate, index) => (
            <Motion.article
              key={`${certificate.issuer}-${certificate.title}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.24) }}
              className="flex min-h-24 items-center gap-4 rounded-2xl border border-border/80 bg-card p-5 text-left shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {certificate.type === "Badge of Participation" ? (
                  <FaAward aria-hidden="true" size={17} />
                ) : (
                  <FaCertificate aria-hidden="true" size={16} />
                )}
              </span>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                  {certificate.type}
                </span>
                <h3 className="mt-1 text-sm font-semibold leading-6">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {certificate.issuer} · Issued {certificate.issued}
                </p>
              </div>
            </Motion.article>
          ))}
        </div>
      </Motion.div>
    </div>
  </section>
);

export default Credentials;
