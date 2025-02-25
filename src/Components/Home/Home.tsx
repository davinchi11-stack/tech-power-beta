import { HomeApply } from "./apply/Home-apply";
import { HomeCourse } from "./Home-Courses";
import { HomeHelp } from "./Home-help";
// import { HomeEnroll } from "./home-enroll";
import { HomeInfo } from "./Home-Info";
import { HomeIntro } from "./Home-intro";
// import { HomeMarquee } from "./Home-marquee";
import { HomeResult } from "./Home-result";


export function Home () {
    return (
        <div className="home">
            <HomeIntro/>
            <HomeInfo/>
            <HomeApply/>
            <HomeCourse/>
            {/* <HomeMarquee/>
            <HomeCourses/>
            <HomeResult/> */}
             <HomeResult/> 
             <HomeHelp/>
        </div>
    )
}