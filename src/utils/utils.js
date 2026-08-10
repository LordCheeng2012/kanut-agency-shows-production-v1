export const utils = () => {
  return {
    redirect: (url = null) => {
      if (!url) return;
      console.log("se redirecciona a :" + url);
      window.location.href = url;
    },
    setLocalContext: ({ name = null, value = null }) => {
      if (!name || !value)
        return console.log(`no se puede setear a una variable nula`);
      window.localStorage.setItem(name, value);
    },
    getLocalContext: (name) => window.localStorage.getItem(name),
    getParamsByUrl: (queryName = null) => {
      if (!queryName || queryName == undefined || typeof queryName != "string")
        return;
      // recuperamos el querystring
      const querystring = window.location.search;
      // usando el querystring, creamos un objeto del tipo URLSearchParams
      const params = new URLSearchParams(querystring);
      return params.get(queryName);
    },
    isnull_undf: (value) => {
      return value == undefined || !value || value == null;
    },
    isvalid_element_type: (element, type = HTMLElement) => {
      return element instanceof type;
    },
    isvalid_ref_element: (refElement) => {
      const { isnull_undf, isvalid_element_type } = utils();
      const validELement =
        !isnull_undf(refElement) &&
        !isnull_undf(refElement.current) &&
        isvalid_element_type(refElement.current);
      return validELement;
    },
    deleteItemArray : (array,index) => {
      const { isnull_undf } = utils();
      const newArrayList = [];  
       if(!(Array.isArray(array)) || (isnull_undf(index) || typeof index != "number")) return ;
       delete array[index];
       for (const item of array) {
        if(!isnull_undf(item)){
          newArrayList.push(item);
        }  
       }
       return newArrayList;
    }
  };
};
