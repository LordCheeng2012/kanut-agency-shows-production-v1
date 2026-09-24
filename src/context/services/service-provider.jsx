import  ServiceContext  from "@absolute/context";
import appData from "@absolute/data/data";

export const ServiceProvider = ({ children }) => {
  return (
    <ServiceContext.Provider value={{ ...appData }}>
      {children}
    </ServiceContext.Provider>
  );
};

