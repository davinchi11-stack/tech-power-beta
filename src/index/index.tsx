import { Outlet } from "react-router-dom"
import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import { useEffect } from "react"
import {useLocation } from "react-router-dom"
import { useLocated } from "../Hooks/useLoc"
import { scrollAnimate } from "../animation/animation"
import WhatsAppButton from "@/Components/whatsapp"

export function Index () {
    const { pathname } = useLocation();
    const {loc} = useLocated()
    
  
    useEffect(() => {
        const body = document.querySelector("body") as HTMLElement
      if (pathname == "/") {
        body.style.background='#F1F4F9'
      }else{
        body.style.background='white'
      }

      loc()
      scrollAnimate()
    }, [pathname])

     

    return (
        <div className="tech-power">
             <Header/>
             <WhatsAppButton/>
            <main className="main">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}