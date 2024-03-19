import Header from "../../../../../../components/Header/Header";
import banner from "../../../../../../assets/images/Services/SubPages/Audiovisual/cameraUrsa-icon.webp"


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
                        Audiovisual
                    </h1>
                    <p className="md:pr-5">
                    Uma história, muitas vezes, é melhor contada em formato de imagens. Um vídeo, então, tem o potencial ainda maior de atingir pessoas, transmitir mensagens e engajar o público-alvo para determinados objetivos. Por isso, não nos cansamos de investir na nossa capacidade criativa e técnica de aprimoramento desse setor.
                    </p>
                </div>
            </div>
        </section>
    )
}