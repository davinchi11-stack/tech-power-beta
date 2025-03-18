import InternshipForm from "./intership-form";
import InternshipIntro from "./intership-intro";

export default function InterShipMain () {
    return (
        <section className="intership">
            <div className="intership_main wrapper medium">
                <InternshipIntro/>
                <InternshipForm/>
            </div>
        </section>
    )
}