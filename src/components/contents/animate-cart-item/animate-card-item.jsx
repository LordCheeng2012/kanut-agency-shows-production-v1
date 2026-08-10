import styles from "./animate-card-item.module.css"

function CardAnimate({
    onClick=false,
    ref=false,
    children=false,
   ...rest
}
) {

    const handleClick = (e)=>{
        onClick && 
        typeof onClick == "function"
         && e.preventDefault()
         && onClick();
    }
    return (
        <a href={ref && ref} onClick={handleClick} className={styles["animate-card"]} {...rest}>
            {children && children}
        </a>
    )
}
export default CardAnimate;