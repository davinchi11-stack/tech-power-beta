import { Helmet } from "react-helmet-async";
import { HomeApply } from "./apply/Home-apply";
// import { HomeCourse } from "./Home-Courses";
// import { HomeHelp } from "./Home-help";
// import { HomeEnroll } from "./home-enroll";
import { HomeInfo } from "./Home-Info";
import { HomeIntro } from "./Home-intro";
// import { HomeMarquee } from "./Home-marquee";
import { HomeResult } from "./Home-result";
// import { HomeMarquee } from "./Marque/Home-marquee";
import { Logos3 } from "./Marque/marque";
import { NewHomeCourse } from "./New-Home-course/New-Home";


export default function Home () {
    return (
        <div className="home">
              <Helmet>
            <title>Home - Tech Power</title>
            </Helmet>
            <HomeIntro/>
            <HomeInfo/>
            <HomeApply/>
            <Logos3/>
            {/* <HomeCourse/> */}
            <NewHomeCourse/>
            {/* <HomeMarquee/> */}
        
            {/* <HomeMarquee/>
            <HomeCourses/>
            <HomeResult/> */}
             <HomeResult/> 
             {/* <HomeHelp/> */}
        </div>
    )
}