import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoMidia";
import SectionFour from "./Sections/SectionFour/SectionFourMidia";

import banner from '../../../../assets/images/Services/Banners/'
import title from '../../../../assets/images/Services/Titles/'

export default function MidiaService(){
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