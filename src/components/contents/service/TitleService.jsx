
import './TitleService.css'
export const TitleService = ({serviceTitle,classService,addClass=''}) => {
  return (
    <>
     <h2 className={`kanut-title-altern`} style={{color:`var(--primary-b-sky)`}} >Kanut</h2>
    <h3 className={`kanut-subtitle s-title-type-service ${classService}-border ${addClass}`}>{serviceTitle}</h3>
    </>
  )
}
