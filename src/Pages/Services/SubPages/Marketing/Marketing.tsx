import SectionOne from "./Sections/SectionOne/SectionOneMarketing";
import SectionTwo from "./Sections/SectionTwo/SectionTwoMarketing";
import SectionFour from "./Sections/SectionFour/SectionFourMarketing";
import SectionThree from "./Sections/SectionThree/SectionThreeMarketing";

export default function MarketingService(){
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </>
    )
}