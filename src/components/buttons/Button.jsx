import './Button.css'
export const Button = ({children,addClass,type=null}) => {
  return (
<button  className={`button ${addClass ?? ``} ${type ?? ``}`}>{children}</button>
  )
}
export const ButtonPrimary = ({children,type=null})=>{
  return (
    <button className={`button btn-primary ${type ?? ``}`}>{children}</button>
  )
}

export const ButtonSkyPrimary = ({children,type=null})=>{
  return (
    <button type='submit' className={`button btn-primary-sky ${type ?? ``}`}>{children}</button>
  )
}

export const ButtonGold = ({children,type=null})=>{
  return (
    <button type='submit' className={`button btn-gold ${type ?? ``}`}>{children}</button>
  )
}
