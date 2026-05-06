
export const utils = () => {
  return {
    redirect: (url=null)=>{
        if(!url) return;
        console.log("se redirecciona a :"+ url);
        window.location.href=url;
    },
    setLocalContext: ({name=null,value=null})=>{
        if(!name) return console.log(`no se puede setear a una variable nula`);
        window.localStorage.setItem(name,value);
    },
    getLocalContext:(name)=> window.localStorage.getItem(name),
    getParamsByUrl : (queryName=null)=>{
      if(!queryName || queryName == undefined || typeof queryName != "string") return ;
      // recuperamos el querystring
      const querystring = window.location.search
      console.log(`URL:${querystring}`) // '?q=pisos+en+barcelona&ciudad=Barcelona'
  
      // usando el querystring, creamos un objeto del tipo URLSearchParams
      const params = new URLSearchParams(querystring);
      return params.get(queryName);
    }
    

  }
}
