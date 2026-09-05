import { Header,Footer } from "@components";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return(
    <main>
      <Header/>
      <section id="content-page">
       <Outlet/>
      </section>
      <Footer/>
    </main>
    )
    
}