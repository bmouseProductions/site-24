import SectionOne from "./Sections/SectionOne/SectionOneProgramação";
import SectionTwo from "./Sections/SectionTwo/SectionTwoProgramação";
import SectionFour from "./Sections/SectionFour/SectionFourProgramação";

export default function ProgramaçãoService(){
    return (
        <>
            <SectionOne />
            <SectionTwo />
            {/* <SectionThree /> */}
            <SectionFour />
        </>
    )
}