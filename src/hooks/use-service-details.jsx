import { useServices } from "./use-services";
import  appData  from "../data/data"
import GaleryService from "@absolute/services";

 export function useServiceDetails() {
  const { serviceType, service } = useServices();
  const modelStructure = appData.modelsGalleries?.[serviceType]["model"] || null;
  const {model,ListImages} = GaleryService(serviceType,modelStructure);

  return {
    serviceType,
    service,
    gallery: model,
    ListImages,
    details: service?.details || {},
    styles: service?.styles || {},
  };
}
