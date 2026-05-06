export const paths = ()=>{
return {
    assets:import.meta.env.VITE_ASSETS,
    icons:`${import.meta.env.VITE_ASSETS}/imgs/icons`,
    transitions :`${import.meta.env.VITE_ASSETS}/imgs/transitions`,
    clients:`${import.meta.env.VITE_ASSETS}/imgs/clients`,
    fonts:`${import.meta.env.VITE_ASSETS}/imgs/fonts`,
    services:`${import.meta.env.VITE_ASSETS}/imgs/services`
}

}