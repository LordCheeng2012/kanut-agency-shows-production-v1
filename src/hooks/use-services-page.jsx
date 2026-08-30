import { useServices } from "./use-services";
export function useServicesPage() {
  const { service, services } = useServices();

  return {
    summary: service?.summary,
    details: service?.details,
    comments: service?.comments,
    styles: service?.styles,
    primaryServices: services.slice(0, 3),
  };
}