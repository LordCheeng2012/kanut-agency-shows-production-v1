
import { Routes,Route } from 'react-router-dom';
import { ContentPage } from './Pages/ContentPage.jsx';
import {Home} from './Pages/home/Home.jsx'
import { About } from './Pages/about/About.jsx'
import { Services } from './Pages/services/Services.jsx';
import {Service} from './pages/about/services/Service.jsx'
import { Contact } from './pages/contact/Contact.jsx';

function Index() {
  return (
   <>
    <Routes>
    <Route path='/' element = {<ContentPage content={<Home></Home>}></ContentPage>}></Route>
    <Route path='/About' element= {<ContentPage content={<About></About>}></ContentPage>}></Route>
    <Route path='/Home' element = {<ContentPage content={<Home></Home>}></ContentPage>}></Route>
    <Route path='/Service' element = {<ContentPage content={<Services></Services>}></ContentPage>}></Route>
    <Route path='/Contact' element = {<ContentPage content={<Contact></Contact>}></ContentPage>}></Route>
    <Route path='/PorDefinir' element = {<ContentPage content={<Service keyService={'party'}></Service>}></ContentPage>}></Route>
    </Routes>
   </>
  )
  
}

export default Index;
