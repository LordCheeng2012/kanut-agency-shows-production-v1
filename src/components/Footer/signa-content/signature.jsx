import styles from "./signature.module.css"
function Signature() {
    return (
    <section className={styles["signature-content"]}>
        <div className={styles["info-legal"]}>
            <a href="./joder tio ">Términos y Condiciones</a>
            <a href="">Politica de privacidad</a>
            <a href="">Politica de Satisfacción Garantizada</a>
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