
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'

export interface Form {
    email : string;
    name : string,
    message : string 
}


export const useSponsorSchema = () => {
 const [error , setError] = useState("")

  const schema = yup.object().shape({
         "email" : yup.string().email("Invalid email").required().min(4),
         "name" : yup.string().required().min(4),
         "organization" : yup.string().required().min(4),
         "message" : yup.string().required(),
         "student" : yup.number().required(),
         "course" : yup.string().required(),
          "phone": yup.string() .required("Phone number is required").matches(/^\+\d{10,15}$/, "Invalid phone number"),
     })

     const {handleSubmit , register , reset , control , formState:{errors}} = useForm({
        resolver: yupResolver(schema),
        // mode: "onBlur", 
        shouldFocusError: false,
    })


   return {error , setError  , handleSubmit , register , reset , control , errors}
}