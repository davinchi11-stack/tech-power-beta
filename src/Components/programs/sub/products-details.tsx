
import {Link , useNavigate, useParams} from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import { Separator } from "@/Components/ui/separator"
import {useQuery} from "@tanstack/react-query"
import Axios from 'axios'
import SvgComponent from "../svg"






export default function Detail() {

  const navigate = useNavigate()

  const handleNavigate = (id: any) => {
    navigate(`/programs/enroll-course/${id}`)
 }
 

  const {id} = useParams()

  const getDataById = () => {
    return Axios.get(`https://techpower-server-w8by.onrender.com/api/courses/${id}`).then((res) => res.data)
}

    const {data , isError, isLoading } = useQuery({
        queryKey : ["course"],
        queryFn : getDataById
    })



  

  return (
    <>
    {  isLoading || isError ?
       <div className="loding">
       <SvgComponent/>
     </div> : 
        <div className="container mx-auto px-4 py-8">
        <Link to="/programs" className="inline-flex items-center gap-2 text-sm mb-6 hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Course
        </Link>
    
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image - Single image only */}
          <div className="rounded-lg overflow-hidden border h-[400px] " >
           <img className=" w-full object-cover h-full " src={data.img}  alt={data.name} />
          </div>
    
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {data?.category}
              </Badge>
              <h1 className="text-3xl font-bold">{data?.name}</h1>
            </div>
    
            <div>
            <Badge variant="outline" className="mb-2">
                {data?.course_info?.level}
              </Badge>
            <h1 className="text font-bold">{data?.course_duration}</h1>
            </div>
            <p className="text-muted-foreground">{data?.description}</p>
            <Button onClick={()=>  handleNavigate(data?._id)} className="w-full sm:w-auto">
              Enroll Now
            </Button>
          </div>
        </div>
    
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 p-3">Course Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">What you will Learn</h3>
              <ul className="space-y-2">
                {data?.what_you_will_learn?.map((detail: any, index: any) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
    
    
               <div>
              <h3 className="text-lg font-medium mb-4">Roadmap</h3>
              <ul className="space-y-2">
                {data?.roadmap?.map((detail: any, index: any) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    
        <Separator className="my-12" />
    
      
        </div>
    }
    </>
  
  )
}

