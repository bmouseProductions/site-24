import Header from "../../../../../../components/Header/Header";
import banner from "../../../../../../assets/images/Services/SubPages/Branding/banner-brading.webp"


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
                        Branding
                    </h1>
                    <p className="md:pr-5">
                        A estética importa muito, mas credibilizar uma marca e atrair o público vai muito além da arte veiculada nas ruas ou de um feed visualmente agradável. Decisões estratégicas são necessárias no planejamento para que o sucesso da campanha seja alcançado, e nisso nós também podemos ajudar.
                    </p>
                </div>
            </div>
        </section>
    )
}