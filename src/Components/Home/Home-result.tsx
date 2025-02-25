import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { useState } from 'react'
import tpMan from '../../assets/ct-three.jpg'


export function HomeResult () {
    const [drop , setDrop] = useState({
        one : true,
        two : false,
        three : false,
        four : false,
        five: false,
        six: false,
        seven: false,
        eight: false,
    })
    
    return (
        <section className="home-result">
            <div className="home-result_main wrapper small">
                   <div className="left-side">
                   <div className="img">
                   <img src={tpMan} alt="man with laptop" />
                   </div>
                   </div>
                   <div className="right-side">
                    <div className="text">
                        <h1 >Results-driven <br /> <span>Practical learning </span> with <br /> Comprehensive support</h1>
                    </div>
               
                     <div className="faq-right">
                         <div onClick={()=> setDrop(prev => ({...prev , one: !prev.one}))}
                         className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Practical Tech Skills</h2>
                                </div>

                                <div className="icon">
                              { !drop.one? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                          { drop.one &&  <div className="ans">
                                <p>
                                Our courses are designed with hands-on projects and real-world applications to ensure you gain job-ready skills.
                                </p>
                            </div> }
                         </div>
                        
                         <div onClick={()=> setDrop(prev => ({...prev , two: !prev.two}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Live Online interactive Training</h2>
                                </div>

                                <div className="icon">
                              { !drop.two? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                           { drop.two &&  <div className="ans">
                                <p>
                                Our training sessions are conducted live online, allowing you to interact with expert instructors and ask questions in real time
                                </p>
                            </div> }
                         </div>

                         <div onClick={()=> setDrop(prev => ({...prev , three : !prev.three}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Expert Instructors</h2>
                                </div>

                                <div className="icon">
                              { !drop.three? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                           { drop.three &&  <div className="ans">
                                <p>
                                Our expert instructors are seasoned professionals with years of industry experience, ensuring you receive top-quality education.
                                </p>
                            </div> }
                         </div>

                         <div onClick={()=> setDrop(prev => ({...prev , four: !prev.four}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Certificate of Completion</h2>
                                </div>

                                <div className="icon">
                              { !drop.four? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                           { drop.four &&  <div className="ans">
                                <p>
                                You’ll earn a certificate of completion to showcase your newly acquired skills and enhance your career prospects.
                                </p>
                            </div> }
                         </div>

                         <div onClick={()=> setDrop(prev =>  ({...prev , five: !prev.five}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Professional Exam Preparation</h2>
                                </div>

                                <div className="icon">
                              { !drop.five? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                          {  drop.five  && <div className="ans">
                                <p>
                                We offer structured exam preparation sessions to help you pass industry-recognized certification exams with confidence.
                                </p>
                            </div> }
                         </div>

                         <div onClick={()=> setDrop(prev =>  ({...prev , six: !prev.six}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Interview Preparation</h2>
                                </div>

                                <div className="icon">
                              { !drop.six? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                          {  drop.six  && <div className="ans">
                                <p>
                                Our program includes interview coaching, mock sessions, and expert tips to help you succeed in job interviews.
                                </p>
                            </div> }
                         </div>

                         <div onClick={()=> setDrop(prev =>  ({...prev , seven: !prev.seven}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Free CV Revamp</h2>
                                </div>

                                <div className="icon">
                              { !drop.seven? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                          {  drop.seven  && <div className="ans">
                                <p>
                                We provide free CV revamp services to help you create a professional résumé that stands out to employers
                                </p>
                            </div> }
                         </div>

                         <div onClick={()=> setDrop(prev =>  ({...prev , eight: !prev.eight}))} className="faq-card">
                            <div className="qu">

                               <div className="txt">
                                    <h2>Overseas Job Placement Assistance</h2>
                                </div>

                                <div className="icon">
                              { !drop.eight? <CaretDown size={28} />
                                  :
                                <CaretUp size={28} /> }
                                </div>
                              
                            </div>
                          {  drop.eight  && <div className="ans">
                                <p>
                                We provide overseas job placement assistance to connect you with global career opportunities in the tech industry.
                                </p>
                            </div> }
                         </div>
                       </div>
                    <div className="btn">
                        <button>Register Now
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
            </div>
        </section>
    )
}