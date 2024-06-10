import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoProgramação";
import SectionFour from "./Sections/SectionFour/SectionFourProgramação";

import banner from '../../../../assets/images/Services/Banners/'
import title from '../../../../assets/images/Services/Titles/'

export default function ProgramaçãoService(){
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