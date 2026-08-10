export const paths = ()=>{
const RootPath = import.meta.env.VITE_ASSETS;
return {
    assets:RootPath,
    icons:`${RootPath}/imgs/icons`,
    transitions :`${RootPath}/imgs/transitions`,
    clients:`${RootPath}/imgs/clients`,
    fonts:`${RootPath}/imgs/fonts`,
    services:`${RootPath}/imgs/services`,
    teams:`${RootPath}/imgs/teams`,
    banners:`${RootPath}/imgs/banner`,
    galery:`${RootPath}/imgs/galery`
}

}