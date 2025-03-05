import { Helmet } from "react-helmet-async";
import {Outlet } from "react-router-dom";



export default function ProgramsIndex () {
    return (
        <div className="programs-main">
              <Helmet>
                 <title>Programs - Tech Power</title>
                </Helmet>
            <Outlet/>
        </div>
    )
}