import SectionOne from "./Sections/SectionOne/SectionOneAds";
import SectionTwo from "./Sections/SectionTwo/SectionTwoAds";
import SectionFour from "./Sections/SectionFour/SectionFourAds";


export default function AdsService(){
    return (
        <>
            <SectionOne />
            <SectionTwo />
            {/* <SectionThree /> */}
            <SectionFour />
        </>
    )
}