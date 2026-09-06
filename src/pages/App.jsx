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
import RootLayout from "@components/root-layout";
import { NotFoundPage } from "./not-found";
import Portfolio from "./portfolio";

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
            <Route path="/Portfolio/:projectId" element = {<Portfolio/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
  );
};

