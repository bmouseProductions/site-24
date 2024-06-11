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
                text="O tráfego orgânico hoje já não entrega o conteúdo das empresas da forma que deveria, tanto no Google quanto nas redes sociais. O tráfego pago, comumente conhecido como anúncios patrocinados, é o modo mais eficaz de alcançar os seus potenciais clientes. Através das plataformas de anúncios patrocinados podemos atingir o seu público-alvo e convertê-lo em clientes reais, de forma objetiva e eficaz." 
            />
            <SectionTwo />
            {/* <SectionThree /> */}
            <SectionFour />
        </>
    )
}