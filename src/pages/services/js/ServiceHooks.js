import { isServiceExist } from "../../../data/Questions.js";
import { utils } from "../../../utils/utils.js"
export const ServiceHooks = () => {
    const {redirect,getParamsByUrl} = utils();
    return {
    loadService:(service)=>{
        if(!service) return ;
        console.log(`se carga el servicio de : [ ${service} ]`);
        redirect(`/Service?service=${service}`);
    },
    getServiceContext:()=>{
        const service =  getParamsByUrl("service");
        console.log(`contexto es : ${service}`);
        if(!service) return ;
        if(!isServiceExist(service)) {
            console.log("no existe : ",service)
            return "boda"
        };
        return service;
    }
    }
}






