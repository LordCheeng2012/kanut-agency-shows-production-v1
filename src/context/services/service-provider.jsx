import { ServiceContext } from "@absolute/context/services";
import services from "../../data/services.json";
import { utils } from "@utils/utils";
import { useEffect, useState } from "react";

const ServiceProvider = ({ children }) => {
  if (!Array.isArray(services))
    return console.error("data no valida para servicio");

  const [service, setService] = useState(services[0]);
  const [typeService, setTypeService] = useState("kanut-boda");

  useEffect(() => {
    const { getParamsByUrl } = utils();
    const loadService = getParamsByUrl("serviceType");
    setTypeService(loadService);
  }, []);

  useEffect(() => {
    setService(getServiceByName(typeService));
  }, [typeService]);

  function getServiceByName(newService) {
    let serviceContextValue = services.find((s) => s["name"] === newService);
    if (!serviceContextValue) serviceContextValue = services[0];
    return serviceContextValue;
  }

  function getServices() {
    return services.reduce((acc, cv) => {
      acc.push(cv["name"]);
      return acc;
    }, []);
  }
  function getPrimaryServices() {
    return getServices().slice(0, 3);
  }

  return (
    <ServiceContext.Provider
      value={{ service, getServiceByName, getServices, getPrimaryServices }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
export default ServiceProvider;
