import SectionOne from "./Sections/SectionOne/SectionOneBrading";
import SectionTwo from "./Sections/SectionTwo/SectionTwoBrading";
import SectionFour from "./Sections/SectionFour/SectionFourBrading";
import SectionThree from "./Sections/SectionThree/SectionThreeBrading";

export default function BradingService(){
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </>
    )
}