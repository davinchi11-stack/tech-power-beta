import {createBrowserRouter , createRoutesFromElements , Route, RouterProvider} from 'react-router-dom' ;

import { lazy, Suspense } from "react";
import { Index } from "./index";
import { TechContextContaineer } from "./techContext/TextContext";
import SmoothScroll from "./snothScroll/Smothscroll";
import { QueryContainer } from "./Query/QueryContainer";
import SvgComponent from './Components/programs/svg';
import TechPowerSchema from './techPowerSchema';
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/Components/ui/sonner"




// Lazy load components
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Sponsor = lazy(() => import("./Components/Sponsor/Sponsor"));
const Scholarship = lazy(() => import("./Components/Scholarship/Scholarship"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const ErrorPage = lazy(() => import("./Components/404/404"));
const Programs = lazy(() => import("./Components/programs/programs"));
const ProgramsIndex = lazy(() => import("./Components/programs/programsIndex"));
const ProgramsDetails = lazy(() => import("./Components/programs/programsDeatails"));
const PrivacyPolicy =  lazy(() => import("./use/privacy"));
const TermsOfUse = lazy(() => import("./use/terms"));
const ProductContact = lazy(() => import("./Components/programs/programs-contact"));
const InterShipMain = lazy(() => import('./Components/Intership/InterShip-main'))

function App() {

  const router = createBrowserRouter(
        createRoutesFromElements(
          <>
          <Route path='/' element={<Index/>}>
           <Route index  element={
            <Suspense fallback={<SvgComponent/>}> 
                <Home/>
            </Suspense>
            }/>
           <Route path='about-us' element={
             <Suspense fallback={<SvgComponent/>}> 
               <About/>
           </Suspense>
            } />
           <Route path='sponsor' element={
             <Suspense fallback={<SvgComponent/>}> 
                <Sponsor/>
           </Suspense>
          } />
           <Route path='scholarship' element={
              <Suspense fallback={<SvgComponent/>}> 
                 <Scholarship/>
             </Suspense>
            } />
           <Route path='contact' element={
              <Suspense fallback={<SvgComponent/>}> 
                <Contact/>
            </Suspense>
           } />
           <Route path='programs' element={
              <Suspense fallback={<SvgComponent/>}> 
                <ProgramsIndex/>
               </Suspense>
            } >
             <Route index element={
              <Suspense fallback={<SvgComponent/>}>
                  <Programs/>
              </Suspense>
              }/>
             <Route path='/programs/details/:id' element={
               <Suspense fallback={<SvgComponent/>}>
                  <ProgramsDetails/>
              </Suspense>
              }/>
             <Route path='enroll-course/:id' element={
               <Suspense fallback={<SvgComponent/>}>
                  <ProductContact/>
             </Suspense>
              }/>
           </Route>

           <Route path='privacy-policy' element={
              <Suspense fallback={<SvgComponent/>}>
                 <PrivacyPolicy/>
               </Suspense>
          }/>
           <Route path='terms-of-use' element={
             <Suspense fallback={<SvgComponent/>}>
                  <TermsOfUse/>
            </Suspense>
            }/>
              <Route path='internship' element={
             <Suspense fallback={<SvgComponent/>}>
                  <InterShipMain/>
            </Suspense>
            }/>
          </Route>
          <Route path='*' element={<ErrorPage/>} />
          </>
        )
  )
  
  return (
    
   <>
    <Toaster position="top-right" />
     <QueryContainer> 
     <TechContextContaineer>
       <SmoothScroll> 
       <HelmetProvider> 
        <TechPowerSchema/>
      <RouterProvider router={router}/>
      </HelmetProvider>
      </SmoothScroll>
      </TechContextContaineer>
      </QueryContainer>
   </>
  )
}

export default App
