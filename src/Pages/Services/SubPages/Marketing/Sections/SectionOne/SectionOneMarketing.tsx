import Header from "../../../../../../components/Header/Header";
import banner from "../../../../../../assets/images/Services/SubPages/Marketing/banner-marketing.webp"


export default function SectionOne(){
    return (
        <section className="md:pt-10  bg-gradient-to-b from-[#220860] from-20% via-[#3564e0] to-[#1ac8f8] rounded-b-[40px] ">
            <Header />
            <div className=" flex flex-col-reverse md:flex-row justify-center gap-5 lg:gap-10">
                <div>
                    <img src={banner} alt="" className="w-full " />
                </div>
                <div className="px-5 flex flex-col md:max-w-[300px] lg:max-w-[600px] ">
                    <h1 className="font-tittle !text-[130px] md:!text-[120px] lg:!text-[200px]">
                        Marketing
                    </h1>
                    <p className="md:pr-5">
                    A internet: a mais cobiçada esfera de comunicação atual, onde todos vislumbram causar impacto.
                    O mundo gira em torno dos smartphones, que se tornaram grandes ferramentas e proporcionam oportunidades gigantescas de crescimento para qualquer negócio. Somos especialistas em transformar os seus objetivos, sonhos e desejos em realidade através desse universo que desbravaremos juntos. 
                    </p>
                </div>
            </div>
        </section>
    )
}