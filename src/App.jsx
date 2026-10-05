import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  About,
  ServicesPage,
  ContactPage,
  Bolsa,
  NotFoundPage,
  Portfolio,
} from "./pages";
import RootLayout from "@components";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Service" element={<ServicesPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/bolsa" element={<Bolsa />} />
        <Route path="/Portfolio/:projectId" element={<Portfolio />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
