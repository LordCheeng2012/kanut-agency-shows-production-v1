import "./root.css";
import "./bootstrap-iso.css";
import "./bootstrap.js";
import { Header, Footer } from "@components";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home/Home.jsx";
import { About } from "./about/about.jsx";
import { Services } from "./services/Services.jsx";
import { Contact } from "./contact/Contact.jsx";
import { BolsaTrabajo } from "./bolsa/bolsa.jsx";
import { Service } from "./about/services/Service.jsx";
import { History1 } from "./Portfolio-events/Historia1.jsx";
import { History3 } from "./Portfolio-events/Historia3.jsx";
import { History4 } from "./Portfolio-events/Historia4.jsx";
import { History2 } from "./Portfolio-events/Historia2.jsx";
import RootLayout from "@components/root-layout";
import { NotFoundPage } from "./not-found";

export const App = () => {
  return (  
       <Routes>
          <Route element={<RootLayout/>}>
            <Route path='/' element = {<Home/>}/>
            <Route path='/About' element= {<About/>}/>
            <Route path='/Home' element = {<Home/>}/>
            <Route path='/Service' element = {<Services/>}/>
            <Route path='/Contact' element = {<Contact/>}/>
            <Route path='/bolsa' element = {<BolsaTrabajo/>}/>
            <Route path='/test' element = {<Service/>}/>
            <Route path='/Historia2' element={<History2 />} />
            <Route path='/Historia3'element={<History3 />} />
            <Route path='/Historia1' element={<History1 />} />
            <Route path='/Historia4' element={<History4 />}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
  );
};

