import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoAcessoria";

import banner from '../../../../assets/images/Services/Banners/banner-assessoria.webp'
import title from '../../../../assets/images/Services/Titles/acessoria-title.webp'
import Decolar from "../../../../components/Decolar/Decolar";

export default function AcessoriaService(){
    return (
        <>
            <SectionOneServices 
                banner={banner}
                title={title} 
                text="Networking e exposição de marca para as grandes massas ou público especializado fazem parte da nossa atividade. Utilizamos diversos mecanismos próprios para facilitar grandes negociações, posicionamento de mercado e valuation de marca." 
            />
            <SectionTwo />
            {/* <SectionThree /> */}
            {/* <SectionFour /> */}
            <Decolar />
        </>
    )
}