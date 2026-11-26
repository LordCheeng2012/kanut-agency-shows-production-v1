import { useEffect, useState } from "react";
export function UseViewVersion() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches,
  );
  useEffect(() => {
    const queryMedia = window.matchMedia("(max-width: 768px)");
    const updateView = (e) => setIsMobile(e.matches);
    queryMedia.addEventListener("change", updateView);
    return () => queryMedia.removeEventListener("change", updateView);
  }, []);
  return [isMobile, setIsMobile];
}
