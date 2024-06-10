import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoEndomarketing";
import SectionFour from "./Sections/SectionFour/SectionFourEndomarketing";

import banner from '../../../../assets/images/Services/Banners/banner-endoMkt.webp'
import title from '../../../../assets/images/Services/Titles/endomarketing-title.webp'

export default function EndomarketingService(){
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