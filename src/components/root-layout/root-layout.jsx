import { Header, Footer } from "@components";
import FallBackError from "@components/fallback-error";
import logError from "@utils/log-error";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet, useLocation } from "react-router-dom";
import "./root.css";
import "./bootstrap-iso.css";
import "./bootstrap.js";

export default function RootLayout() {
    const { pathname } = useLocation();
    useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <ErrorBoundary onError={logError} FallbackComponent={FallBackError}>
      <main>
        <Header />
        <ErrorBoundary onError={logError} FallbackComponent={FallBackError}>
            <Outlet />
        </ErrorBoundary>
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
