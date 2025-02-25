import AutoSlider from "./apply";


export function HomeApply () {
    return (
        <section className="home-apply">
            <div className="home-apply_main wrapper medium">
                 <div className="txt">
                      <h1 data-animation='header'>How to Get Started with TechPower</h1>
                      <p data-animation='para'>
                        At TechPower, we’re committed to providing you with the skills and support you need to thrive in the tech world. 
                        Whether you’re looking to launch your career or level up, applying to our courses is the first step toward unlocking global 
                        opportunities. Follow these simple steps to get started.
                        </p>
                 </div>
                 <div className="step">
                    <AutoSlider/>
                 </div>
            </div>
        </section>
    )
}