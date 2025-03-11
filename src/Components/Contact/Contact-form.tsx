import { Loader2 } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { useMutation } from "@tanstack/react-query"
import Axios from 'axios'
import { toast } from "sonner"
import { Textarea } from "@/Components/ui/textarea"
import { useFormSchema } from "@/Hooks/useFormContact"


const ContactForm = () =>  {
  
  const { handleSubmit, register, reset,  errors } = useFormSchema();

  const mutation: any = useMutation({
    mutationFn: async (data: any) => {
          const response = await Axios.post("https://six-tech-server.onrender.com/contact/tech" , data);
          return response.data;
        },
        onSuccess: () => {
          reset();
          toast.success("Successful!", {
            description: "Expect to hear from us soon.",
          })
          
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
      <Card className="card">
     
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tt">Get in Touch</CardTitle>
          <CardDescription>Have questions? Fill out the form below, and our team will get back to you soon.</CardDescription>
        </CardHeader>
        <CardContent>
          <form  onSubmit={handleSubmit(onsubmit)} className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                placeholder="John Doe"
                 {...register("name")}
                className={errors.name?.message ? "border-red-500" : ""}
              />
              {errors.name?.message && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-4">
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
                <p className="text-sm text-muted-foreground">
                  We'll get back to you at this email address.
                </p>
               )}
            </div>

            <div className="space-y-4">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                placeholder="+234 0000 456 00"
                {...register("phone")}
                className={errors.phone?.message ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
            </div>

            <div className="space-y-4">
              <Label htmlFor="phone">Message</Label>
              <Textarea
               {...register("message")}
              placeholder="Enter message here"
              className={errors.message?.message ? "border-red-500" : ""}
               />

            </div>

            <Button type="submit" className="w-full" disabled={mutation.isPending}>
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Contact Us"
              )}
            </Button>
      
          </form>
        </CardContent>
      </Card>
    </div>
    </>
  
  )
}


export default ContactForm
