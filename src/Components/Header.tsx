import { CaretDown, Minus, Plus } from "@phosphor-icons/react"
import logo from '../assets/logo.png'
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from "react"
import { useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

export function Header () {
    const [isOpen, setOpen] = useState(false)
    const [dropDown, setDropdown] = useState(false)
    const [mobileDrop , setMobileDrop] = useState(false)

    useEffect(() => {
      
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                if (isOpen) {
                    document.querySelector("body")?.classList.add("scroll-lock");
                  
                    
                } else {
                    document.querySelector("body")?.classList.remove("scroll-lock");
                    
                }
            }  else {
                document.querySelector("body")?.classList.remove("scroll-lock");
               }
        };

    
        handleResize();
        window.addEventListener("resize", handleResize);

        const list = document.querySelectorAll(".header_main .list ul .tg ")
        
        list.forEach((li) => {
            li.addEventListener("click" , () => {
                setOpen(!open)
            }) 
        })
    
    
        return () => {
            window.removeEventListener("resize", handleResize);
            document.querySelector("body")?.classList.remove("scroll-lock");
        };
    }, [isOpen]);



   
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement

    

     const handleScroll = () => {
      

        if (window.scrollY > 300) {
            header.classList.add("sele")              
            
        }else{
            header.classList.remove("sele")  
        }
     }


       window.addEventListener("scroll" , handleScroll)

       return () => {
        header.classList.remove("sele")
       }

  },[])
    
     

    
   
    return (
        
         <header className="header">
             <div className="header_main wrapper medium">
                 <nav>
                    <div className="left">
                        <div className="logo">
                          <img src={logo} alt="logo" />
                        </div>
                        <nav className={`list ${isOpen && "show"}`}>
                             <div className="link">
                             <ul>
                                <li className="tg">
                                    <NavLink to={'/'}>
                                    Home
                                    </NavLink>
                                </li>
                                <li className="tg">
                                    <NavLink to={"/about-us"}>
                                    About
                                    </NavLink>
                                </li>
                                <li className="tg">
                                    <NavLink to={"/internship"}> 
                                    Internship 
                                    </NavLink>
                                </li>
                                <li className="tg">
                                    <NavLink to={"/programs"}>
                                    Programs
                                    </NavLink>
                                </li>
                                <li onMouseEnter={()=> setDropdown(true)} className="link-main">Patnerships <span><CaretDown size={18} /></span>
                                    <div className={`link-card ${dropDown && 'drop'}` }>
                                        <ul className="li-tb"
                                        onMouseLeave={()=> setDropdown(false)}
                                        >
                                            <li>
                                                <NavLink to={"/sponsor"}>
                                                Become a sponsor
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/scholarship"}>
                                                scholarship
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li  className={`link-mobile ${!mobileDrop && 'active'}`}>
                                   <div onClick={()=> setMobileDrop(!mobileDrop)} className="txt">
                                   <span> Patnerships</span>
                                  <span className="icon">
                                    {  mobileDrop ? 
                                          <Plus size={20} />
                                          :
                                          <Minus size={20} />
                                    }
                                  </span>
                                   </div>
                                    <ul onClick={()=> setOpen(!open)}  className="li-mb">
                                            <li className="tg">
                                            <NavLink to={"/sponsor"}>
                                                Become a sponsor
                                                </NavLink>
                                            </li>
                                            <li className="tg">
                                            <NavLink to={"/scholarship"}>
                                                scholarship
                                                </NavLink>
                                            </li>
                                        </ul>
                                </li>
                                <li className="tg">
                                    <Link to={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                            <div className="sign">
                            <button>Apply Now</button>
                         </div>
                             </div>
                        </nav>
                    </div>
                    <div className="right">
                       <div className="right_sign">
                       
                          <div className="sign mn">
                            <button>Login</button>
                         </div>
                         <div className="sign">
                            <button>Apply Now </button>
                         </div>
                       </div>
                       <div className="mobile">
                    <Hamburger toggled={isOpen} size={28}  color="#0d6efd" toggle={setOpen}  aria-label="Toggle navigation menu"/>
                    </div>
                    </div>
                    
                 </nav>
             </div>
        </header>
    )
}