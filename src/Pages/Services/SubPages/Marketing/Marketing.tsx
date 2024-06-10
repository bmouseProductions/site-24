import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoMarketing";
import SectionFour from "./Sections/SectionFour/SectionFourMarketing";

import banner from '../../../../assets/images/Services/Banners/banner-mktDigital.webp'
import title from '../../../../assets/images/Services/Titles/mktDigital-title.webp'

export default function MarketingService(){
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