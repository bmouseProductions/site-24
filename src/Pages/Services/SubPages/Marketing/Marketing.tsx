import SectionOne from "./Sections/SectionOne/SectionOneMarketing";
import SectionTwo from "./Sections/SectionTwo/SectionTwoMarketing";
import SectionFour from "./Sections/SectionFour/SectionFourMarketing";

export default function MarketingService(){
    return (
        <>
            <SectionOne />
            <SectionTwo />
            {/* <SectionThree /> */}
            <SectionFour />
        </>
    )
}