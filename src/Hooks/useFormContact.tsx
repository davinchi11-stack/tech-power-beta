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
         "phone": yup.string() .required("Phone number is required").matches(/^\+\d{10,15}$/, "Invalid phone number"),
 
     })

     const {handleSubmit , register , reset , control} = useForm({
        resolver: yupResolver(schema)
    })


   return {error , setError  , handleSubmit , register , reset , control}
}