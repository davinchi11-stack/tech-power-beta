import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import  Axios  from "axios";
// import SvgComponent from "./svg";
import EnrollmentForm from "./sub/p.contact";



export default function ProductContact () {

    const {id} = useParams()

  const getDataById = () => {
    return Axios.get(`https://techpower-server-w8by.onrender.com/api/courses/${id}`).then((res: { data: any; }) => res.data)
}

    const {data } = useQuery({
        queryKey : ["course"],
        queryFn : getDataById
    })



    
    return (
        <section className="enroll-course">
            <div className="enroll-course_main wrapper medium">
             {  <EnrollmentForm data={data} />  }
            </div>
        </section>
    )
}