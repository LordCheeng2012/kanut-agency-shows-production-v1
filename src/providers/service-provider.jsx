import  ServiceContext  from "@absolute/providers/service-context";
import appData from "@absolute/data/data";

export const ServiceProvider = ({ children }) => {
  return (
    <ServiceContext.Provider value={{ ...appData }}>
      {children}
    </ServiceContext.Provider>
  );
};

