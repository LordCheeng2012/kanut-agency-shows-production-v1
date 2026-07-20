
import './TitleService.css'
export const TitleService = ({serviceTitle,classService,colorTitle}) => {
  return (
    <>
     <h2 className={`kanut-title-altern`} style={{color:`var(${colorTitle})`}} >Kanut</h2>
    <h3 className={`kanut-subtitle s-title-type-service ${classService}-border`}>{serviceTitle}</h3>
    </>
  )
}
