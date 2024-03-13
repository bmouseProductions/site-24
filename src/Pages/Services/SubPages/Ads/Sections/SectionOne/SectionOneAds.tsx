import Header from "../../../../../../components/Header/Header";
import banner from "../../../../../../assets/images/Services/SubPages/Ads/banner-ads.webp"


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
                        ADS
                    </h1>
                    <p className="md:pr-5">
                        O tráfego orgânico hoje já não entrega o conteúdo das empresas da forma que deveria, tanto no Google quanto nas redes sociais. O tráfego pago, comumente conhecido como anúncios patrocinados, é o modo mais eficaz de alcançar os seus potenciais clientes. Através das plataformas de anúncios patrocinados podemos atingir o seu público-alvo e convertê-lo em clientes reais, de forma objetiva e eficaz.
                    </p>
                </div>
            </div>
        </section>
    )
}