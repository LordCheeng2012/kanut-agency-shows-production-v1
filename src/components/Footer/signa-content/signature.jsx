import styles from "./signature.module.css"
import legalPdf from "@assets/legal/legal.pdf"
function Signature() {
    return (
    <section className={styles["signature-content"]}>
        <div className={styles["info-legal"]}>
            <a href={legalPdf} download={legalPdf} >
                Términos y Condiciones
            </a>
            <a href={legalPdf} download={legalPdf} >
                Politica de privacidad
                </a>
            <a href={legalPdf} download={legalPdf}>Politica de Satisfacción Garantizada</a>
        </div>
        <div className={styles["signature"]}>
            <p>© 2025 KANUT ESPECTACULOS. Todos los derechos reservados</p>
            <p>Compañía KANUT ESPECTACULOS S.A.C</p>
            <p>20614692295</p>
        </div>
    </section>
    )
}
export default Signature;