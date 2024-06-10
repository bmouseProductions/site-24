import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoAudiovisual";
import SectionFour from "./Sections/SectionFour/SectionFourAudiovisual";

import banner from '../../../../assets/images/Services/Banners/banner-studios.webp'
import title from '../../../../assets/images/Services/Titles/studios-title.webp'

export default function AudiovisualService(){
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