// About.tsx
import "./About.scss";

export const About = () => {
  return (
    <>
      <div className="contact">
        <h1>Kontakta The Zoo</h1>
        <section className="contact-info">
          <div className="contact-details">
            <p>
              <strong>Adress:</strong> Matkärlsgränd 7, Zoostad
            </p>
            <p>
              <strong>E-post:</strong> mattochbelaten@theezoo.zu
            </p>
            <p>
              <strong>Telefon:</strong> 070-123 45 67
            </p>
          </div>
        </section>
      </div>
      <div className="about-background"></div>
    </>
  );
};
