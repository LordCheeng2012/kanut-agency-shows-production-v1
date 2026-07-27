import styles from "./footer-content.module.css";
import ContactSection from "./sections/contact";
import OurServices from "./sections/our-services";
import MeetSection from "./sections/meet"
function FooterContent() {
  return (
    <section className={`${styles["footer-content"]}`}>
        <OurServices className={styles["footer-content-item"]}/>
        <ContactSection className={styles["footer-content-item"]}/>
        <MeetSection className={styles["footer-content-item"]}/>
    </section>
  );
}
export default FooterContent;
