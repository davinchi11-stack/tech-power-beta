/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { SetStateAction } from "react"

export const useInternshipMutate = (reset: () => void , setCurrentStep: { (value: SetStateAction<number>): void; (arg0: number): void }) => {
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await Axios.post("https://techpower-server-w8by.onrender.com/internship", data , {
        headers: { "Content-Type": "multipart/form-data" },
      })
      return response.data 
    },

    onSuccess: () => {
      reset() // Reset form
      window.scrollTo(0, 0)
      setCurrentStep(0) // reset after submission
      toast.success("Application Submitted!", {
        description: "Thank you for applying. We will review your application and get back to you soon.",
      })
    },

    onError: () => {
      toast.error("Submission Failed", {
        description: "There was an error submitting your application. Please try again.",
      })
    },
  })

  return { mutation }


}
  