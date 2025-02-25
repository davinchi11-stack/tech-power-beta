import girl from '../../assets/black-tech-grad (1).jpg'
import scholar2 from '../../assets/scholar-1 (2).jpg'
import scholar1 from '../../assets/mock.png'
import AutoSliderEligible from '../Home/apply/eligible'


export function Scholarship () {


    return (
        <section className="scholarship">
            <div className="scholarship_first wrapper small">
                <div className="txt">
                <h1 data-animation='header'>No Limits, Just Opportunities!</h1>
                </div>
                  <div className="other">
                  <div className="left km">
                    <div className="img">
                        <img src={scholar2} alt="teacher taking tech course" />

                    </div>
                   </div>
                   <div className="right km">
                   <div className="img">
                        <img  src={scholar1} alt="girl in yellow coding around stuent" />
                    </div>
                    <div className="text">
                        <h2 data-animation='header'>Invest in Yourself We’ll Handle the Cost!</h2>
                        <p data-animation='para'>
                        The world is changing fast, and tech skills are in demand more than ever. TechPower is
                         offering fully-funded scholarships to ambitious 
                        learners ready to lead the future. Don’t let financial barriers hold you back, apply today!"
                        </p>
                    </div>
                   </div>
                  </div>
            </div>
            <div className="scholarship_main wrapper medium">
                <div className="scholarship_main_left">
                    <div className="txt">
                        <h1 data-animation='header'>Who is Eligible?</h1>
                        <p data-animation='para'> To apply for a scholarship, students need to meet the following eligibility standards:</p>
                    </div>
                    <div className="card">
                        <AutoSliderEligible/>
                    </div>

                    <div className="txt2">
                        <p data-animation='para'>
                        If you meet the above requirements and wish to
                         apply, please review the scholarship eligibility 
                         details, complete the online 
                        application form, and submit it with the necessary documents.
                        </p>
                    </div>
                </div>
                <div className="scholarship_main_right">
                    <div className="img">
                        <img  src={girl} alt="girl with laptop" />
                    </div>
                </div>
            </div>

            <div className="scholarship_lar wrapper medium">
                <div className="txt-intro">
                    <h1>Available Scholarships</h1>
                </div>
            </div>
        </section>
    )
}