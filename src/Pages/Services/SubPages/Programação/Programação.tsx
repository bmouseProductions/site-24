import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoProgramação";
import SectionFour from "./Sections/SectionFour/SectionFourProgramação";

import banner from '../../../../assets/images/Services/Banners/banner-programacao.webp'
import title from '../../../../assets/images/Services/Titles/programacao-title.webp'

export default function ProgramaçãoService(){
    return (
        <>
            <SectionOneServices 
                banner={banner}
                title={title} 
                text="Faz parte do planejamento estratégico o desenvolvimento de sites institucionais, landing pages, e-commerces e tudo o que o seu projeto necessitar. Criamos páginas rápidas e responsivas, com conteúdos comerciais e estratégicos, para mostrar ao mundo o melhor que sua empresa ou produto tem a oferecer." 
            />
            <SectionTwo />
            {/* <SectionThree /> */}
            <SectionFour />
        </>
    )
}