import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoAcessoria";
import SectionFour from "./Sections/SectionFour/SectionFourAcessoria";

import banner from '../../../../assets/images/Services/Banners/banner-assessoria.webp'
import title from '../../../../assets/images/Services/Titles/acessoria-title.webp'

export default function AcessoriaService(){
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