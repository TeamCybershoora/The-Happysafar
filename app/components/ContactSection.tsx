'use client'

import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    label: "Email Address",
    value: "info@thehappysafar.com",
    icon: Mail,
  },
  {
    label: "Phone Number",
    value: "+91-9251147383",
    icon: Phone,
  },
  {
    label: "Our Location",
    value: "Saraswati Tower, F-30, Sector 2, Central Spine, Vidyadhar Nagar, Jaipur, Rajasthan 302039",
    icon: MapPin,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="contact-wrap">
      <div className="contact-inner">
        <div className="contact-info">
          <p className="eyebrow">Connect with Our Rajasthan Desk</p>
          <h2>Jaipur HQ & on-ground pods across the state.</h2>
          <p className="hero-copy">
            Live help for itinerary tweaks, leopard-trail updates, or dune-day surprises. Our Rajasthan specialists watch every leg so your desert stories stay seamless.
          </p>

          <div className="contact-list">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              const href =
                item.label === "Email Address"
                  ? `mailto:${item.value}`
                  : item.label === "Phone Number"
                    ? `tel:${item.value.replace(/[^\d+]/g, "")}`
                    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.value)}`;
              const isExternal = item.label === "Our Location";
              return (
                <a
                  key={item.label}
                  href={href}
                  className="contact-row"
                  {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
                >
                  <div className="icon-pill">
                    <Icon />
                  </div>
                  <div>
                    <p>{item.label}</p>
                    <strong>{item.value}</strong>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <form className="contact-form">
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h3>Tell us how we can help.</h3>
            <p className="helper-text">Please share your query and our planner will respond within one business day.</p>
          </div>

          <label>
            Name 
            <input type="text" placeholder="Your full name" required />
          </label>
          <label>
            Email 
            <input type="email" placeholder="name@email.com" required />
          </label>
          <label>
            Phone
            <input type="tel" placeholder="(+91) 9251147383" />
          </label>
          <label>
            Message 
            <textarea rows={4} placeholder="Tell us about your travel plans" required />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <style jsx>{`
        .contact-wrap {
          background: linear-gradient(180deg, #fff, #fff9f2);
          padding: 4rem 1.5rem;
        }

        .contact-inner {
          max-width: 72rem;
          margin: 0 auto;
          background: #fff;
          border-radius: 2rem;
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          padding: 3rem;
          
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .eyebrow {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: #f97316;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .contact-info h2 {
          font-size: clamp(1.9rem, 2vw, 2.4rem);
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        .hero-copy {
          color: #475569;
          line-height: 1.6;
        }

        .contact-list {
          display: grid;
          gap: 1rem;
          margin-top: 1.75rem;
        }

        .contact-row {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: #fff;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .contact-row:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08);
        }

        .contact-row p {
          margin: 0;
          color: #64748b;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .contact-row strong {
          display: block;
          margin-top: 0.35rem;
          color: #0f172a;
          font-weight: 700;
          line-height: 1.35;
        }

        .icon-pill {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          background: #fef3c7;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ea580c;
        }

        .contact-list p {
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.2rem;
        }

        .contact-list strong {
          color: #475569;
          font-size: 0.95rem;
        }

        .contact-form {
          background: #f8fafc;
          border-radius: 1.5rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.4);
        }

        .contact-form h3 {
          margin-top: 0.5rem;
          color: #0f172a;
          font-size: 1.5rem;
        }

        .helper-text {
          color: #64748b;
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
        }

        label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0f172a;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        label span {
          color: #ef4444;
          margin-left: 0.25rem;
        }

        input,
        textarea {
          border-radius: 0.75rem;
          border: 1px solid rgba(148, 163, 184, 0.5);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          background: #fff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        input:focus,
        textarea:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.2);
          outline: none;
        }

        button {
          margin-top: 0.5rem;
          border: none;
          border-radius: 999px;
          background: linear-gradient(120deg, #8a410d, #b45309);
          color: white;
          font-weight: 600;
          padding: 0.9rem 1.5rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 25px rgba(180, 83, 9, 0.3);
        }

        @media (max-width: 640px) {
          .contact-inner {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
