import bg from '../../assets/banner_bg.jpg'
import  girl from '../../assets/slazzer-edit-image (5).webp'
import triangle from '../../assets/bshape_05.png';
import book from '../../assets/bshape_03.png'
import { GraduationCap, UsersThree } from '@phosphor-icons/react';
import earth from '../../assets/bshape_01.png'



export function HomeIntro () {


    
    return (
        <section style={{backgroundImage: `url(${bg})`}} className="home-intro">
            <div className="home-intro_main wrapper medium">
                <div className="left">
                    <div className="txt">
                         <div className="inner">
                         <h1 data-animation="scale-para">
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
                    <div className="btn">
                        <button  data-animation='bounce'>Register Now
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
                    <div className="bounnce">
                        <img data-animation='fade'  src={earth} alt="bounce-erath" />
                    </div>
                </div>
                <div className="right">
                    <div className="img">
                        <img src={girl} alt="student" />
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