
import { Routes,Route } from 'react-router-dom';
import { ContentForm, ContentPage } from './Pages/ContentPage.jsx';
import {Home} from './Pages/home/Home.jsx'
import { About } from './Pages/about/About.jsx'
import { Services } from './Pages/services/Services.jsx';
import {Service} from './pages/about/services/Service.jsx'
import { Contact } from './pages/contact/Contact.jsx';
import { BolsaTrabajo } from './pages/bolsa/bolsa.jsx';

function Index() {
  return (
   <>
    <Routes>
    <Route path='/' element = {<ContentPage content={<Home></Home>}></ContentPage>}></Route>
    <Route path='/About' element= {<ContentPage content={<About></About>}></ContentPage>}></Route>
    <Route path='/Home' element = {<ContentPage content={<Home></Home>}></ContentPage>}></Route>
    <Route path='/Service' element = {<ContentPage content={<Services></Services>}></ContentPage>}></Route>
    <Route path='/Contact' element = {<ContentForm content={<Contact></Contact>}></ContentForm>}></Route>
    <Route path='/bolsa' element = {<ContentPage content={<BolsaTrabajo></BolsaTrabajo>}></ContentPage>}></Route>
    </Routes>
   </>
  )
  
}

export default Index;
