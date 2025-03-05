import {createBrowserRouter , createRoutesFromElements , Route, RouterProvider} from 'react-router-dom' ;
import { Index } from './index';
import { TechContextContaineer } from './techContext/TextContext';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Sponsor } from './Components/Sponsor/Sponsor';
import { Scholarship } from './Components/Scholarship/Scholarship';
import { Contact } from './Components/Contact/Contact';
import SmoothScroll from './snothScroll/Smothscroll';
import { QueryContainer } from './Query/QueryContainer';
import { ErrorPage } from './Components/404/404';
import Programs from './Components/programs/programs';
import ProgramsIndex from './Components/programs/programsIndex';
import ProgramsDetails from './Components/programs/programsDeatails';


function App() {

  const router = createBrowserRouter(
        createRoutesFromElements(
          <>
          <Route path='/' element={<Index/>}>
           <Route index  element={<Home/>}/>
           <Route path='about-us' element={<About/>} />
           <Route path='sponsor' element={<Sponsor/>} />
           <Route path='scholarship' element={<Scholarship/>} />
           <Route path='contact' element={<Contact/>} />
           <Route path='programs' element={<ProgramsIndex/>} >
             <Route index element={<Programs/>}/>
             <Route path='/programs/details/:id' element={<ProgramsDetails/>}/>
           </Route>
          </Route>
          <Route path='*' element={<ErrorPage/>} />
          </>
        )
  )
  
  return (
    <QueryContainer> 
    <TechContextContaineer>
      <SmoothScroll> 
     <RouterProvider router={router}/>
     </SmoothScroll>
     </TechContextContaineer>
     </QueryContainer>
  )
}

export default App
