import { ArrowRight } from 'lucide-react'
import tp from '../../assets/_freepicdownloader.com_-young-student-higschool-portrait-by-png-template-normal-removebg-preview.png'
import { Button } from '../ui/button'

export function HomeHelp () {
    const whatsappNumber = "+2349068941858"; 
    const message = encodeURIComponent("Hello, I need assistance!");

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
                            <Button variant={'secondary'} className='btn-main bg-red-500 text-white p-6 w-40 ' 
                               onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")}
                            > Get Help
                             <ArrowRight />
                            </Button>
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