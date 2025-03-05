// import bg from '../../assets/banner_bg.jpg'
import triangle from '../../assets/bshape_05.png';
import book from '../../assets/bshape_03.png'
import { GraduationCap, UsersThree } from '@phosphor-icons/react';
import earth from '../../assets/bshape_01.png'
import { Button } from '../ui/button';
import { ArrowRight } from "lucide-react"




export function HomeIntro () {


    
    return (
        <section className="home-intro">
            <div className="bg">
                 <img 
                      src="https://ik.imagekit.io/llti1cebs/techpower/banner_bg.jpg?tr=w-1200,q-80,format=webp"
                      alt="TechPower Banner"
                      width="1200"
                      height="600"
                      loading="lazy"
                      decoding="async"
                  />
            </div>
            <div className="home-intro_main wrapper medium">
                <div className="left">
                    <div className="txt">
                         <div className="inner">
                         <h1 className='bg-red' data-animation="scale-para">
                         Learn a tech <span className='skill'>
                            Skill!
                            <br />
                            <span className="svg">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 145 25"
                            
                            >
                                <path
                                stroke="currentcolor"
                                strokeWidth={4}
                                d="M1 15.271c17.14-6.927 69.832-17.205 143.473-2.906"
                                style={{
                                    strokeDasharray: "146,148",
                                    strokeDashoffset: 0,
                                }}
                                />
                                <path
                                stroke="currentcolor"
                                strokeWidth={2}
                                d="M26.294 14.004C38.918 9.446 77.377 3.501 130.227 16.18"
                                style={{
                                    strokeDasharray: "106,108",
                                    strokeDashoffset: 0,
                                }}
                                />
                            </svg>
                            </span>
                        </span>
                        </h1>
                        <h1 data-animation="scale-para">work globally!</h1>
                         </div>
                        <p data-animation="para">
                        Jumpstart your career with hands-on internships at the forefront of tech 
                        innovation. Work on real projects, collaborate with experts, and 
                        gain the skills to stand out globally. Scholarships are available
                         to help you begin your journey.
                        </p>
                    </div>
                  
                    <Button variant={'secondary'} className='btn-main  bg-red-500 text-white p-6 w-50 ' data-animation='bounce'>Register Now
                    <ArrowRight />
                            </Button>
                    <div className="bounnce">
                        <img data-animation='bounce' src={earth} alt="bounce-erath" />
                    </div>
                </div>
                <div className="right">
                    <div className="img">
                        <img src="https://ik.imagekit.io/llti1cebs/techpower/slazzer-edit-image%20(5).webp?tr=w-1000" alt="student" />
                    </div>
                      <div className="first icon">
                            <img data-animation='bounce' src={triangle} alt="triangle" />
                        </div>
                        <div className="second icon">
                            <img data-animation='bounce' src={book} alt="book" />
                        </div>

                        <div className="card-info">
                            <div className="card one">
                                <div className="head">
                                <UsersThree size={28} weight="fill" />
                                </div>
                                <div className="txt">
                                    <h2>Total Students enrolled</h2>
                                    <p>9,321</p>
                                </div>
                            </div>
                            <div className="card two">
                                <div className="head">
                                <GraduationCap size={32} weight="fill" />
                                </div>
                                <div className="txt">
                                    <h2>Total Students Graduated
                                    </h2>
                                    <p>6,534</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}