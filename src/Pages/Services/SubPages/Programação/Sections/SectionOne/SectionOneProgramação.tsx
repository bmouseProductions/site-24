import Header from "../../../../../../components/Header/Header";
import banner from "../../../../../../assets/images/Services/SubPages/Programação/banner-programação.webp"
import title from '../../../../../../assets/images/Services/SubPages/Programação/title-programação-icon.webp'


export default function SectionOne(){
    return (
        <section className="md:pt-10  bg-gradient-to-b from-[#220860] from-20% via-[#3564e0] to-[#1ac8f8] rounded-b-[40px] ">
            <Header />
            <div className=" flex flex-col-reverse md:flex-row justify-center gap-5 lg:gap-10">
                <div>
                    <img src={banner} alt="" className="w-full" />
                </div>
                <div className="px-5 flex flex-col md:max-w-[300px] lg:max-w-[600px] ">
                    <img src={title} alt="" className="mb-5" />
                    <p className="md:pr-5">
                        Faz parte do planejamento estratégico o desenvolvimento de sites institucionais, landing pages, e-commerces e tudo o que o seu projeto necessitar. Criamos páginas rápidas e responsivas, com conteúdos comerciais e estratégicos, para mostrar ao mundo o melhor que sua empresa ou produto tem a oferecer.
                    </p>
                </div>
            </div>
        </section>
    )
}