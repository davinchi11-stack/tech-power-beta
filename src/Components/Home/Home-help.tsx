import tp from '../../assets/_freepicdownloader.com_-young-student-higschool-portrait-by-png-template-normal-removebg-preview.png'

export function HomeHelp () {
    return (
        <section className="help">
            <div className="help_main wrapper small">
                <div className="help_main_card">
                    <div className="first">
                        <div className="txt">
                            <div className="top">
                            <p data-animation='scale-para'>Need Guidance Selecting a Course?</p>
                            <h2 data-animation='header'>Speak with an Expert</h2>
                            </div>
                            <div className="middle">
                                <p data-animation='para'>Are you indecisive about what course to choose? Would you like to talk to a Tech expert over any tech related issue? We have professionals in place who are ready and willing to be of help.</p>
                            </div>
                            <div className="btn">
                                <button data-animation='bounce'>Get Help</button>
                            </div>
                        </div>
                    </div>
                    <div className="second">
                        <div className="img">
                            <img  src={tp} alt="scholl girl smiling" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}