import './Button.css'
export const Button = ({title,addClass}) => {
  return (
<button  className={`button ${addClass}`}>{title}</button>
  )
}
export const BtnPrimary = ({title})=>{
  return (
    <button  className={`button btn-primary`}>{title}</button>
  )
}

export const BtnSkyPrimary = ({title})=>{
  return (
    <button type='submit' className={`button btn-primary-sky`}>{title}</button>
  )
}
