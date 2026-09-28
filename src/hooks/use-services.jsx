import { useMemo, useContext } from "react";
import { utils } from "@utils/utils";
import ServiceContext from "@absolute/context";
import GaleryService from "@absolute/services";

export function useServices() {
  const ctx = useContext(ServiceContext);
  const { services: Allservices, styles,model ,promotions} = ctx;
  const { getParamsByUrl } = utils();
  const name = getParamsByUrl("serviceType") || "kanut-boda";
  const getServiceByName = (key) => {
    const {details,...rest} = Allservices.find((s) => s.name == key);
    const addProps = styles.find(s=>s.service== key)["styles"];
    return {
      ...rest,
      details,
      styles: { ...addProps },
    };
  };

  return useMemo(() => {
    if (!Allservices || !Array.isArray(Allservices)) {
      console.error("useServices: 'services' is not available in context");
      return {
        name,
        Loadservice: null,
        getServiceByName: null,
        Allservices,
        galery:null,
        promotions:null,
      };
    }

    return {
      name,
      Loadservice: getServiceByName(name),
      Allservices,
      getServiceByName,
      galery:{
        ...GaleryService(name,model[name].model)
      },
      promotions:promotions[name]
    };
  }, [name, Allservices]);
}
