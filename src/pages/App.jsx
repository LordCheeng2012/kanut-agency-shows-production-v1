import "./root.css";
import "./bootstrap-iso.css";
import "./bootstrap.js";
import { Header } from "@components/header/Header.jsx";
import { Footer } from "@components/Footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home/Home.jsx";
import { About } from "./about/About.jsx";
import { Services } from "./services/Services.jsx";
import { Contact } from "./contact/Contact.jsx";
import { BolsaTrabajo } from "./bolsa/bolsa.jsx";
import { Service } from "./about/services/Service.jsx";
import { History1 } from "./Portfolio-events/Historia1.jsx";
import { History3 } from "./Portfolio-events/Historia3.jsx";
import { History4 } from "./Portfolio-events/Historia4.jsx";
import { History2 } from "./Portfolio-events/Historia2.jsx";

export const App = () => {
  return (
    <main>
      <Header></Header>
      <section id="content-page">
       <Routes>
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
        </Routes>
      </section>
      <Footer></Footer>
    </main>
  );
};

