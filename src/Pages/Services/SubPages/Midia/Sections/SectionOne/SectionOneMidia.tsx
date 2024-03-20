import Header from "../../../../../../components/Header/Header";
import banner from "../../../../../../assets/images/Services/SubPages/Midia/banner-midia.webp"


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
                        Grande Midia
                    </h1>
                    <p className="md:pr-5">
                    Nossa equipe especializada está pronta para alcançar os melhores resultados em campanhas on-line e off-line na grande mídia. Desde anúncios na televisão e rádio a jornais de destaque, estamos preparados para desenvolver produtos de qualidade para atender suas demandas para os diferentes canais de comunicação. Independentemente se é para impulsionar vendas ou aumentar o reconhecimento da marca frente ao público, te ajudaremos a alcançar suas metas, junto à grande mídia.
                    </p>
                </div>
            </div>
        </section>
    )
}