import services from "./services.json"
export  const isServiceExist = (service="boda")=>{
return services[service]? true : false;
} 