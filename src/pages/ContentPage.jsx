
import { Header } from '@components/header/Header.jsx'
import { Footer } from '@components/Footer/Footer.jsx'
import './ContentPage.css'
import './bootstrap-iso.css'
import './bootstrap.js'

export const ContentPage = ({content}) => {
  return (
    <main>
        <Header></Header>
        <section id='first-content'>
              {content}
        </section>
        <Footer></Footer>
    </main>
    
  )
}
export const ContentForm = ({content})=>{
 return (
 <main>
        <Header></Header>
        <section id='content-form'>
              {content}
        </section>
        <Footer></Footer>
  </main>
  )
}
