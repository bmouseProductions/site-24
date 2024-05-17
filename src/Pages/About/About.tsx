import { SectionOne } from "./Sections/SectionOne/SectionOneAbout";
import SectionTwo from "./Sections/SectionTwo/SectionTwoAbout";
import SectionThree from "./Sections/SectionThree/SectionThreeAbout";
import SectionFour from "./Sections/SectionFour/SectionFourAbout";
import Decolar from "../../components/Decolar/Decolar";


export default function About(){
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Decolar />
        </>
    )
}