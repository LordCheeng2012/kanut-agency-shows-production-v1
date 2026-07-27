import styles from "./contact-section.module.css";
import contactInfo from "@data/contacts.json";
import wsp from "@imgs/icons/wsp.png";
import email from "@imgs/icons/email.png";
import claim from "@imgs/icons/claim.png";
function ContactSection({ className = "" }) {
  console.log(styles);
  return (
    <div className={`${className} ${styles["contact-section"]}`}>
      <h1 className="title-section">CONTACTANOS</h1>
      <section className={` ${styles["info-contact"]}`}>
        <div className={`${styles["item-info"]} `}>
          <img src={wsp} alt="whatssap" />
          <ul className={styles["list-numbers"]}>
            {contactInfo.telephones.map((n) => (
              <li>{`+51 ${n}`}</li>
            ))}
          </ul>
        </div>
        <div className={`${styles["item-info"]}`}>
          <img src={email} alt="email" />
          <a href="">
           {contactInfo.email}
          </a>
        </div>
      </section>
      <div className={`${styles["complaints-section"]}`}>
        <a href="">
          <img src={claim} alt="libro de reclamaciones" />
        </a>
      </div>
    </div>
  );
}
export default ContactSection;
