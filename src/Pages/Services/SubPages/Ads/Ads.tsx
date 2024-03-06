import SectionOne from "./Sections/SectionOne/SectionOneAds";
import SectionTwo from "./Sections/SectionTwo/SectionTwoAds";
import SectionFour from "./Sections/SectionFour/SectionFourAds";
import SectionThree from "./Sections/SectionThree/SectionThreeAds";


export default function AdsService(){
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </>
    )
}