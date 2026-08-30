import  ServiceContext  from "@absolute/context";
import appData from "@absolute/data/data";

export const ServiceProvider = ({ children }) => {
  const {services} = appData;
  if (!Array.isArray(services))
    return console.error("data no valida para servicio");

  return (
    <ServiceContext.Provider value={{ services }}>
      {children}
    </ServiceContext.Provider>
  );
};

