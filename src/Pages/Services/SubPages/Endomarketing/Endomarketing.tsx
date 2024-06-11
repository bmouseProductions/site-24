import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoEndomarketing";
import SectionFour from "./Sections/SectionFour/SectionFourEndomarketing";

import bannerEndo from '../../../../assets/images/Services/Banners/banner-endoMkt.webp'
import title from '../../../../assets/images/Services/Titles/endomarketing-title.webp'

export default function EndomarketingService(){
    return (
        <>
            <SectionOneServices 
                banner={bannerEndo}
                title={title} 
                endo= {true}
                text="Muitas empresas sofrem com o desinteresse e desmotivação de sua equipe, ou ainda, com a alta rotatividade de seus colaboradores. Isso pode acontecer, dentre outros motivos, pela deficiência na comunicação interna e corporativa, além de falhas ao informar metas, objetivos e dados de forma segura, clara e eficiente." 
            />
            <SectionTwo />
            {/* <SectionThree /> */}
            <SectionFour />
        </>
    )
}