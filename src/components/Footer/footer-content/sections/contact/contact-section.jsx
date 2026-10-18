import styles from "./contact-section.module.css";
import contactInfo from "@data/contacts.json";
import wsp from "@imgs/icons/wsp.png";
import email from "@imgs/icons/email.png";
import claim from "@imgs/icons/claim.png";
import Image from "@components/image";
function ContactSection({ className = "" }) {

  return (
    <div className={`${className} ${styles["contact-section"]}`}>
      <h2>CONTACTANOS</h2>
      <section className={` ${styles["info-contact"]}`}>
        <div className={`${styles["item-info"]} `}>
          <Image src={wsp} alt="whatssap" />
          <ul className={styles["list-numbers"]}>
            {contactInfo.telephones.map((n) => (
              <li>{`+51 ${n}`}</li>
            ))}
          </ul>
        </div>
        <div className={`${styles["item-info"]}`}>
          <Image src={email} alt="email"  />
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
