import SectionOneServices from "../../../../components/SectionOneServices/SectionOneServices";
import SectionTwo from "./Sections/SectionTwo/SectionTwoMarketing";
import SectionFour from "./Sections/SectionFour/SectionFourMarketing";

import banner from '../../../../assets/images/Services/Banners/banner-mktDigital.webp'
import title from '../../../../assets/images/Services/Titles/mktDigital-title.webp'

export default function MarketingService(){
    return (
        <>
            <SectionOneServices 
                banner={banner}
                title={title} 
                mkt={true}
                text="A internet: a mais cobiçada esfera de comunicação atual, onde todos vislumbram causar impacto. O mundo gira em torno dos smartphones, que se tornaram grandes ferramentas e proporcionam oportunidades gigantescas de crescimento para qualquer negócio. Somos especialistas em transformar os seus objetivos, sonhos e desejos em realidade através desse universo que desbravaremos juntos." 
            />
            <SectionTwo />
            {/* <SectionThree /> */}
            <SectionFour />
        </>
    )
}