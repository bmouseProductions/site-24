import SectionFour from "./Sections/SectionFour/SectionFourAventuras";
import { SectionOne } from "./Sections/SectionOne/SectionOneAventuras";
import SectionThree from "./Sections/SectionThree/SectionThreerAventuras";
import SectionTwo from "./Sections/SectionTwo/SectionTworAventuras";


export default function Aventuras(){
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </>
    )
}