import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoAudiovisual";
import SectionThree from "./Sections/SectionThree/SectionThreeAudiovisual";
import SectionFour from "./Sections/SectionFour/SectionFourAudiovisual";
import SectionFive from "./Sections/SectionFive/SectionFiveAudiovisual";

import banner from '../../../../assets/images/Services/Banners/banner-studios.webp'
import title from '../../../../assets/images/Services/Titles/studios-title.webp'

export default function AudiovisualService(){
    return (
        <>
            <SectionOneServices 
                banner={banner}
                title={title} 
                text="Uma história, muitas vezes, é melhor contada em formato de imagens. Um vídeo, então, tem o potencial ainda maior de atingir pessoas, transmitir mensagens e engajar o público-alvo para determinados objetivos. Por isso, não nos cansamos de investir na nossa capacidade criativa e técnica de aprimoramento desse setor." 
            />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive/>
        </>
    )
}