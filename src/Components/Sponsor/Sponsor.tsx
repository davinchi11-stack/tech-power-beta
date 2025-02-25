import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import spnteam from '../../assets/african-american-expert-closing-monthly-revenue-balance (2).jpg'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useSponsorSchema } from '../../Hooks/useSponsorSchema';
import { useMutation } from '@tanstack/react-query';
import Axios from 'axios'
import {Controller} from 'react-hook-form'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Sponsor () {

    const imgRef = useRef(null);

    useEffect(() => {
       gsap.to(imgRef.current, {
         scale: 1.05, 
         duration: 1,
         ease: "circ.out",
         scrollTrigger: {
           trigger: imgRef.current,
           start: "top 40%",
           end: "top 20%", 
           scrub: true, 
         },
       });
     }, [])
    
    const [phone, setPhone] = useState("");
    const { error, setError, handleSubmit, register, reset, control , errors} = useSponsorSchema();
  

    const mutation: any = useMutation({
      mutationFn: async ({data , phone}:any) => {
            const response = await Axios.post("https://six-tech-server.onrender.com/contact/sponsor/", {...data , phone});
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
    
    const steps = [
        "Step One: Enter Your Name",
        "Step Two: Enter Your Email",
        "Step Three: Confirm Details",
        "Step Four: Submit Form",
      ];

      const [currentStep, setCurrentStep] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentStep((prev) => (prev + 1) % steps.length);
        }, 3000); 
    
        return () => clearInterval(interval); 
      }, []);
    return (
        <section className="sponsor">
            <div className="sponsor_main wrapper medium">
                <div className="up">
                <div className="second-info">

                     <div className="text">
                        <h1 data-animation='header'>Bridge the Gap,  <span>Build the Future of Tech!</span></h1>
                        <p data-animation='para'> 
                        At TechPower, we believe in transforming lives through technology. By sponsoring a student, 
                        you’re not just funding education—you’re creating opportunities, driving innovation, 
                        and shaping the future of Africa’s tech industry. Partner with us to make a lasting impact!
                             </p>
                     </div>

                     <div className="img">
                        <img ref={imgRef} src={spnteam} alt="" loading='lazy'/>
                     </div>
                  </div>
                </div>
               <div className="down">
               <div className="left-side">
                <div className="complete">
                    <h1 data-animation='header'>Champion the Future of Innovation</h1>
                    <p data-animation='para'>
                    Our mission is to bridge the gap between passion and opportunity by providing
                     financial support to talented students, made possible through valued 
                     partnerships with sponsors
                    </p>
                 </div>
                 <div className="how">
                    <div className="txt">
                        <h1>How to <span>Sponsor</span></h1>
                    </div>
                     <div className="container">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="stepText"
                    >
                        {steps[currentStep]}
                    </motion.div>

                    <div className="dots">
                        {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentStep ? "active" : ""}`}
                        ></div>
                        ))}
                    </div>
                    </div>

                 </div>
                </div>
               
               <div className="right-info">
                   <div className="form">
                       <form  autoComplete='off' onClick={handleSubmit(onSubmit)} >
                         <div className="input">
                            <h1>Name</h1>
                            <input type="text" placeholder='Full Name' required {...register("name")} />
                         </div>
                         <div className="input">
                            <h1>Organization Name (if applicable)</h1>
                            <input type="text" placeholder='Organization Name' {...register("organization")} required/>
                         </div>
                         <div className="input">
                            <h1>Email Address</h1>
                            <input type="email" placeholder='developer@example.com' {...register("email")} required/>
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
                            <h1>How Many student</h1>
                             <input type="number" placeholder='2' min={0} {...register("student")} required/>
                         </div>
                         <div className="input">
                            <h1>Select Sponsor Course</h1>
                        <select {...register("course")} >
                        <option value={'Tech Foundation'} >Tech Foundations (ICT Essentials)</option>
                        <option value={'Software Engineering'} >Full Stack Software Development</option>
                        <option value={'Cyber Security'} >Cybersecurity </option>
                        <option value={'Data Analytics'} >Ethical Hacking</option>
                        <option value={'Artificial Intelligence'} >Data Science</option>
                        <option value={'Tech Product Management'} >Networking (CCNA)</option>
                        <option value={'Tech Product Management'} >Cloud Computing (AWS)</option>
                        <option value={'Cloud Computing'} >Product (UI/UX) & Graphics Design</option>
                        <option value={'Networking'} >Web Design & development </option>
                        <option value={'No-Code Web Design'} >Digital Marketing & Monetization</option>
                        <option value={'Social Media Marketing & Management'} >Digital Movie production & VFX</option>
                        <option value={'Music Production & Sound Engineering'} >Music Production & Sound Engineering</option>
                        <option value={'Video Editing & VFX'} >Ai & machine learning</option>
                        <option value={'Video Editing & VFX'} >Ai Engineering Masterclass (Agentic Ai & Generative Ai) </option>
                        <option value={'Video Editing & VFX'} >Ai Executive Masterclass (Agentic Ai & Generative Ai) </option>
                        </select>
                         </div>
                         <div className="input">
                            <h1>Additional Notes/Message</h1>
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
                        {errors && <p style={{paddingLeft: "5px" , textTransform: "capitalize"}}>{errors.name?.message || errors.organization?.message || errors.email?.message || errors.phone?.message || errors.student?.message || errors.course?.message || errors.message?.message}</p>}
                        </p>
                         <div className="sub input">
                            <input
                            value={mutation.isPending ? "Submiting..." : "Submit"} 
                            disabled={mutation.isPending} 
                             type="submit" />
                         </div>
                       </form>
                   </div>
               </div>
               </div>
            </div>
        </section>
    )
}