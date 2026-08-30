import { useMemo, useContext } from "react";
import { utils } from "@utils/utils";
import ServiceContext from "@absolute/context";

export function useServices() {
  const ctx = useContext(ServiceContext);
  const services = ctx?.services;
  const { getParamsByUrl } = utils();
  const serviceType = getParamsByUrl("serviceType") || "kanut-boda";

  return useMemo(() => {
    if (!services || !Array.isArray(services)) {
      console.error("useServices: 'services' is not available in context");
      const emptyGetServiceByName = () => ({ name: serviceType, styles: {} });
      return {
        serviceType,
        service: emptyGetServiceByName(),
        services: [],
        getServiceByName: () => undefined,
        getServices: () => [],
        getPrimaryServices: () => [],
      };
    }

    const getServiceByName = (name) => {
      return services.find((service) => service.name === name) || services[0];
    };

    const service = getServiceByName(serviceType);

    return {
      serviceType,
      service,
      services,
      getServiceByName,
      getServices: () => services.map((item) => item.name),
      getPrimaryServices: () => services.slice(0, 3).map((item) => item.name),
    };
  }, [serviceType, services]);
}