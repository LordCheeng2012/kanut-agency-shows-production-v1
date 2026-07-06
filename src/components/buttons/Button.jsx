import b from "./button.module.css";

export const Button = ({
  classname,
  children,
  type = "primary",
  size = "small",
  onClick = ()=> undefined
}) => {
  if (!children) return;
  return (
    <button onClick={onClick} className={`${classname} ${b[type]} ${b[size]}`}>{children}</button>
  );
};
export const ButtonCircle = ({
  classname,
  children,
  type = "primary",
  size = "small",
  onClick = ()=> undefined
}) => {
  if (!children) return;
  return (
    <button onClick={onClick} className={`${b["circle"]} ${b[type]} ${b[size]}`}>
      {children}
    </button>
  );
};
