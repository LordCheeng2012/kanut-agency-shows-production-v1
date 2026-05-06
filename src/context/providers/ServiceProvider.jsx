import { serviceContext } from "../Services/ServiceContext"
import { services } from "../../data/services.json";


export const ServiceProvider = ({children,keyService='boda'}) => {
  const serviceDetails = services[keyService] || services["boda"] ;
  return (
   <serviceContext.Provider value={{serviceDetails}}>
    {children}
   </serviceContext.Provider>
  )
}
