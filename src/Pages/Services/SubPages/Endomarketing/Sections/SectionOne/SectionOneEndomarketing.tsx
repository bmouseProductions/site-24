import Header from "../../../../../../components/Header/Header";
import banner from "../../../../../../assets/images/Services/SubPages/Endomarketing/banner-endomarketing.webp"


export default function SectionOne(){
    return (
        <section className="md:pt-10  bg-gradient-to-b from-[#220860] from-20% via-[#3564e0] to-[#1ac8f8] rounded-b-[40px] ">
            <Header />
            <div className=" flex flex-col-reverse md:flex-row justify-center gap-5 lg:gap-10">
                <div>
                    <img src={banner} alt="" className="w-full " />
                </div>
                <div className="px-5 flex flex-col md:max-w-[300px] lg:max-w-[600px] ">
                    <h1 className="font-tittle md:!text-[120px] lg:!text-[200px]">
                        Endomarketing
                    </h1>
                    <p className="md:pr-5">
                    Muitas empresas sofrem com o desinteresse e desmotivação de sua equipe, ou ainda, com a alta rotatividade de seus colaboradores. Isso pode acontecer, dentre outros motivos, pela deficiência na comunicação interna e corporativa, além de falhas ao informar metas, objetivos e dados de forma segura, clara e eficiente.
                    </p>
                </div>
            </div>
        </section>
    )
}