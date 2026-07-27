import styles from "./footer.module.css";
import FooterSection from "./footer-content/index.js"
import Separator from "@components/separator";
import Signature from "./signa-content";
export const Footer = () => {
 
  return (
    <footer className={styles["footer"]}>
     <FooterSection/>
     <Separator/> 
     <Signature/> 
    </footer>
  );
};
