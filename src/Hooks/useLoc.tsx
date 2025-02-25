
import { useLocation } from "react-router-dom";




export const useLocated = () => {
  const { pathname } = useLocation();
   
      const loc = () => {
        if (pathname === '/') {
          window.scrollTo(0, 0);
        }else if (pathname === '/about-us'){
          window.scrollTo(0, 0);
        }else if (pathname === '/sponsor'){
          window.scrollTo(0, 0);
        }else if (pathname === '/scholarship'){
          window.scrollTo(0, 0);
        }else if (pathname === '/social-media'){
            window.scrollTo(0, 0);
        }else if (pathname === '/contact'){
            window.scrollTo(0, 0);
        //   }else if (pathname === '/tech'){
        //     window.scrollTo(0, 0);
        //   }else if (pathname === '/contact'){
        //     window.scrollTo(0, 0);
        //   }
        }
        
    
        
      }


    return {loc}
}