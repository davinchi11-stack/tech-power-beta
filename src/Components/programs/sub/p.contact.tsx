import { ArrowLeft, Loader2 } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useMutation } from "@tanstack/react-query"
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "sonner"

const EnrollmentForm = ({data}: any) =>  {
  
const naviagte = useNavigate()




  const schema = yup.object().shape({
        
    name: yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),

    email: yup.string()
    .email("Invalid email format")
    .required("Email is required"),

   phone: yup.string()
    .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number format")
    .required("Phone number is required"),

    course: yup.string()
    .required("Course is required")
        
  })

  const {register , handleSubmit , formState:{errors} , reset } = useForm({
    resolver : yupResolver(schema)
  })
   


  const mutation: any = useMutation({
    mutationFn: async (data: any) => {
          const response = await Axios.post("https://six-tech-server.onrender.com/contact/enroll/", data);
          return response.data;
        },
        onSuccess: () => {
          reset();
          toast.success("Successful!", {
            description: "You're in! Expect to hear from us soon as we proceed with your enrollment.",
          })
          setTimeout(() => { 
            naviagte("/programs")
          }, 4000);
        },
        onError: () => {
          toast.error("Error!", {
            description: "Something went wrong, please try again.",
          })
        },
      });


  const onsubmit = (data: any) => {
    mutation.mutate(data);
    
  };




    
  
  return (
    <>
      <div className="container max-w-2xl mx-auto  px-4">
      <Link to="/programs" className="inline-flex items-center gap-2 text-sm mb-6 hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Course
        </Link>
      <Card>
     
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tt">Course Enrollment</CardTitle>
          <CardDescription>Fill out the form below to enroll in your chosen course</CardDescription>
        </CardHeader>
        <CardContent>
          <form  onSubmit={handleSubmit(onsubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                placeholder="John Doe"
                 {...register("name")}
                className={errors.name?.message ? "border-red-500" : ""}
              />
              {errors.name?.message && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="john.doe@example.com"
                {...register("email")}
                className={errors.email?.message ? "border-red-500" : ""}
              />
              {errors.email?.message ? (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              ) : (
                <p className="text-sm text-muted-foreground">We'll send course details to this email address</p>
               )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                placeholder="+234 0000 456 00"
                {...register("phone")}
                className={errors.phone?.message ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="courseId">Course</Label>
              <Input
                id="fullName"
                defaultValue={data?.name || ""} 
                {...register("course")}
                className={errors.course?.message ? "border-red-500" : ""}
              />
            </div>

            <Button type="submit" className="w-full" disabled={mutation.isPending}>
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Enroll Now"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-6">
          <p className="text-sm text-muted-foreground text-center">
            By enrolling, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardFooter>
      </Card>
    </div>
    </>
  
  )
}


export default EnrollmentForm
