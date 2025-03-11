import { CaretDown, CaretUp } from '@phosphor-icons/react'
import grpTeam from '../../assets/front-view-latin-friends-hanging-out (1).jpg'
import { useState } from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);


export default function About () {
  const imgRef = useRef(null);
    const [drop , setDrop] = useState({
        one : true,
        two : false,
        three : false,
        four : false,
        five: false
    })


    useEffect(() => {
      gsap.to(imgRef.current, {
        scale: 1.05, 
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "top 20%", 
          scrub: true, 
        },
      });
    }, [])
    
  
    return (
        <section className="about">
            <Helmet>
                  <title>About - Tech Power</title>
               </Helmet>
              <div className="about_main wrapper medium">

                  <div className="second-info">
                     <div className="text">
                        <h1 data-animation='fade'> Unlock Your <span>Tech Potential</span></h1>
                        <p data-animation='para'>Gain world-class tech skills and step into global opportunities. At TechPower, we turn passion into expertise through innovative learning and career connections.</p>
                     </div>

                     <div className="img">
                        <img  ref={imgRef} src={grpTeam} alt="" loading='lazy'/>
                     </div>
                  </div>

                  <div className="info">
                    <div className="left-info">
                        <span data-animation='bounce' className="we">Who we are</span>
                        <div className="txt">
                            <h1 data-animation='header'>
                            Empowering Africa's Future! your pathway to World-Class Tech Skills and Opportunities
                            </h1>
                            <p data-animation='para' className="p-boss">
                            We bridge the gap between learning and employment by connecting our graduates with global tech job opportunities.
                            </p>
                            <p data-animation='para'>
                            Through scholarships and strategic partnerships, TechPower is committed to empowering 20 million African youths, setting them on a path to success in today’s dynamic digital landscap
                            </p>
                        </div>
                        <div className="btn">
                        <button data-animation='bounce'>Register Now
                             <span>
                             <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 13"
                            >
                                <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12.625 6.812H1m11.625 0L7.78 1.97m4.844 4.843L7.78 11.656"
                                style={{
                                    strokeDasharray: "26,28",
                                    strokeDashoffset: 0,
                                }}
                                />
                            </svg>
                           </span>
                            </button>
                    </div> 
                    </div>
                    <div className="right-info">
                        <div className="abt">
                             <div className="abt-main">
                                  <h1 data-animation='fade'>0ur <span>Mission</span> </h1>
                                  <div className="long">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="lg"></span>
                                  </div>
                             </div>
                             <div className="txt">
                                <p data-animation='para'>To provide world-class tech education on scholarship to enables 20 million africans to thrive in the global workforce.</p>
                             </div>
                        </div>

                        <div className="abt">
                             <div className="abt-main">
                                  <h1 data-animation='fade'>0ur <span>Vision</span> </h1>
                                  <div  className="long">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="lg"></span>
                                  </div>
                             </div>
                             <div className="txt">
                                <p data-animation='para'>                                                                   
                                To become the global leader in tech education, fostering digital transformation
                                through training that empowers both individuals and organization.
                                </p>
                             </div>
                        </div>
                    </div>
                  </div>

                  <div className="faq-info ">
                       <div className="faq-left">
                        <h1 > Innovation Starts <br /> <span>with Education</span> </h1>
                        <p data-animation='para'>
                        TechPower is shaping the future of tech by training and mentoring Africa’s brightest minds, preparing them for opportunities in the global workforce.
                        </p>
                       </div>
                       <div className="faq-right">
                         <div onClick={()=> setDrop(prev => ({...prev , one: !prev.one}))}
                         className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Scholarship</h2>
                                </div>

                                <div className="icon">
                              { !drop.one? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                          { drop.one &&  <div className="ans">
                                <p>We believe everyone deserves high-quality tech education. With support from our 
                                    sponsors and global partners, our scholarships break financial barriers, empowering Africa’s
                                     future tech leaders.
                                </p>
                            </div> }
                         </div>
                        
                         <div onClick={()=> setDrop(prev => ({...prev , two: !prev.two}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Online Practical Tech Skills</h2>
                                </div>

                                <div className="icon">
                              { !drop.two? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                           { drop.two &&  <div className="ans">
                                <p>
                                Our training empowers Africa’s future
                                 innovators with hands-on experience for real-world success
                                </p>
                            </div> }
                         </div>

                         <div onClick={()=> setDrop(prev => ({...prev , three : !prev.three}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2> Global Job Placement</h2>
                                </div>

                                <div className="icon">
                              { !drop.three? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                           { drop.three &&  <div className="ans">
                                <p>
                                Upon certification, we assist our graduates in securing international roles in top tech companies.
                                </p>
                            </div> }
                         </div>

                         <div onClick={()=> setDrop(prev => ({...prev , four: !prev.four}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Recognized Certifications</h2>
                                </div>

                                <div className="icon">
                              { !drop.four? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                           { drop.four &&  <div className="ans">
                                <p>
                                Our Certificate of Completion validates your skills and sets you apart in the tech industry.
                                </p>
                            </div> }
                         </div>

                         <div onClick={()=> setDrop(prev =>  ({...prev , five: !prev.five}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Comprehensive Support</h2>
                                </div>

                                <div className="icon">
                              { !drop.five? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                          {  drop.five  && <div className="ans">
                                <p>
                                From personalized career advice to a CV revamp, interview preparation, professional Exam preparation. we help you transition smoothly into the tech workforce.
                                </p>
                            </div> }
                         </div>
                       </div>
                  </div>
                  
              </div>
        </section>
    )
}