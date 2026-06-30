import b from "./button.module.css";

export const Button = ({classname,children,type = 'primary',size = 'small'}) => {
  if(!children) return ;
  return (
  <button  className={`${classname} ${b[type]} ${b[size]}`}>{children}</button>
  )
}
export const  ButtonCircle = ({classname,children,type = 'primary',size = 'small'})=>{
   if(!children) return ;
   return (
    <button  className={`${b['circle']} ${b[type]} ${b[size]}`}>{children}</button>
   )

}