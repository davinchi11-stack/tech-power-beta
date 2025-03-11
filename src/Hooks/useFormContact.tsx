import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'

export interface Form {
    email : string;
    name : string,
    message : string 
}


export const useFormSchema = () => {
 const [error , setError] = useState("")

  const schema = yup.object().shape({
         "email" : yup.string().email().required(),
         "name" : yup.string().required(),
         "message" : yup.string().required(),
           phone: yup.string()
             .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number format")
             .required("Phone number is required"),
         
 
     })

     const {handleSubmit , register , reset , control , formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })


   return {error, errors , setError  , handleSubmit , register , reset , control}
}