import { useState } from 'react';
import contatcImg from '../../assets/call-ill.jpg'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { EnvelopeSimple, MapPin, PhoneOutgoing } from '@phosphor-icons/react';
import { useFormSchema } from '../../Hooks/useFormContact';
import Axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import {Controller} from 'react-hook-form'

export function Contact() {
    const [phone, setPhone] = useState("");

    const { error, setError, handleSubmit, register, reset, control } = useFormSchema();
   

  const mutation: any = useMutation({
    mutationFn: async ({data , phone}:any) => {
          const response = await Axios.post("https://six-tech-server.onrender.com/contact/tech", {...data , phone});
          return response.data;
        },
        onSuccess: () => {
          reset();
          setPhone("")
          setError("Sent Successfully!");
          setTimeout(() => setError(""), 2000);
        },
        onError: () => {
          setError("Error Occurred!");
          setTimeout(() => setError(""), 2000);
        },
      });


  const onSubmit = (data: any) => {
    mutation.mutate({ data, phone });
    
  };

       


        
    return (
      <section className="contact">
        <div className="txt">
            <h1>Contact <span>Us</span></h1>
        </div>
        <div className=" contact_main wrapper small">
          <div className="one">
             <div className="img">
                <img src={contatcImg} alt="contact human" />
             </div>
             <div className="contac-info">
                  <h2 className='lag'>LAGOS NG</h2>
                 <div className="ct-main">
                 <div className="ct">
                    <span><MapPin size={20} weight="fill" /></span>
                     <h2>2, Adesina elemide street, off agric road, oko oba, lagos</h2>
                 </div>
                 <div className="ct">
                    <span><PhoneOutgoing size={20} weight="fill" /> </span>
                     <h2><a href="tel:+2349068941858">+234 906 894 1858</a> </h2>
                 </div>
                 <div className="ct">
                    <span><EnvelopeSimple size={20} weight="fill" /> </span>
                     <h2> 
                     <a href="mailto:support@techpowerinc.com">support@techpowerinc.com</a>
                     </h2>
                 </div>
                 </div>
             </div>
          </div>

          <div className="two">
           <div className="form">
           <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                    <h1>Name</h1>
                    <input type="text" placeholder='Name' {...register("name")} />
                </div>
                <div className="input">
                    <h1>Email</h1>
                    <input type="email" placeholder='Email' {...register("email")}/>
                </div>
                     <div className="input">
                        <h1>Phone Number</h1>
                        <Controller
                          name="phone"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <PhoneInput
                              defaultCountry="ng"
                              preferredCountries={["ng", "us", "gb"]}
                              {...field}
                              onChange={(value) => field.onChange(value)}
                              className="custom-phone-input"
                            />
                          )}
                        />      
                    </div>
                    <div className="input">
                            <h1>Message</h1>
                              <textarea placeholder='Enter Your Message' {...register("message")}></textarea>
                         </div>
                         <p
                        style={{
                          color: error === "Sent Successfully!" ? "green" : "red",
                          fontSize: "14px",
                        }}
                        className="p-error"
                      >
                        {error}
                      </p>
                         <div className="sub input">
                            <input
                            value={mutation.isPending ? "Submiting..." : "Submit"} 
                            disabled={mutation.isPending} 
                             type="submit"  />
                         </div>
             </form>
           </div>
          </div>
        </div>
      </section>
    );
  }
