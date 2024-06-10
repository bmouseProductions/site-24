import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoAds";
import SectionFour from "./Sections/SectionFour/SectionFourAds";

import banner from '../../../../assets/images/Services/Banners/banner-ads.webp'
import title from '../../../../assets/images/Services/Titles/ads-title.webp'

export default function AdsService(){
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