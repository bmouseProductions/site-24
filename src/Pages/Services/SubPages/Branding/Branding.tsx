import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoBrading";
import SectionFour from "./Sections/SectionFour/SectionFourBrading";
//import SectionThree from "./Sections/SectionThree/SectionThreeBrading";

import banner from '../../../../assets/images/Services/Banners/'
import title from '../../../../assets/images/Services/Titles/'

export default function BradingService(){
    return (
        <>
            <SectionOneServices 
                banner={banner}
                title={title} 
                text="" 
            />
            <SectionTwo />
            {/* <SectionThree /> */}
            <SectionFour />
        </>
    )
}