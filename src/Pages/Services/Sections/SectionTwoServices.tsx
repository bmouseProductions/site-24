import marketing from "../../../assets/images/Services/SubPages/marketing/marketing-icon.webp";
import endomarketing from "../../../assets/images/Services/SubPages/endomarketing/endomarketing-icon.webp";
import audiovisual from "../../../assets/images/Services/SubPages/audiovisual/audiovisual-icon.webp";
import ads from "../../../assets/images/Services/SubPages/ads/ads-icon.webp";
import programacao from "../../../assets/images/Services/SubPages/Programação/programacao-icon.webp";
import acessoria from "../../../assets/images/Services/SubPages/acessoria/acessoria-icon.webp";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function SectionTwo(){
    const info = [
        {
          img: marketing,
          title: "MARKETING",
          text: "Transforme a direção do seu negócio com um marketing estratégico.",
          link: '/servicos/marketing'
        },
        {
          img: endomarketing,
          title: "ENDOMARKETING",
          text: "Melhore a comunicação interna da sua empresa e a sinergia dos colaboradores.",
          link: '/servicos/endomarketing'
        },
        {
          img: audiovisual,
          title: "AUDIOVISUAL",
          text: "Transforme suas ideias em verdadeiras obras de arte.",
          link: '/servicos/audiovisual'
        },
        {
          img: ads,
          title: "ADS",
          text: "Impulsione a sua marca e alcance mais clientes e contatos.",
          link: '/servicos/ads'
        },
        {
          img: programacao,
          title: "PROGRAMAÇÃO",
          text: "Automatize seus processos e crie uma presença virtual de respeito.",
          link: '/servicos/programacao'
        },
        {
            img: acessoria,
            title: "ASSESSORIA",
            text: "Tenha a representação e opinião de especialistas.",
            link: '/servicos/acessoria'
          },
    ];
    return (
        <>
            <section className="container px-5 md:px-10 lg:px-10 xl:px-20 mb-32 mx-auto">
                <div className="max-w-[950px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20">
                    {info.map((item, index) => {
                        return (
                        <a
                            className="relative !max-h-[380px] mx-auto grayscale hover:grayscale-0 shadow-card rounded-[35px] overflow-hidden card-empresa transition-all"
                            key={index}
                            href={item.link}
                        >
                            <img className='block w-full transition-all' src={item.img} alt="" />
                            <div className="absolute bottom-0 efeito-vidro flex items-center justify-between gap-5 lg:gap-10 text-white h-[160px] w-full px-5 lg:px-10 ">
                                <div className="flex flex-col gap-5">
                                    {" "}
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p>{item.text}</p>
                                </div>
                                <div>
                                    <div
                                        className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border border-white button-card transition-all"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                      </svg>
                                    </div>
                                </div>
                            </div> 
                        </a>
                        );
                    })}
                </div>
            </section>
        </>
    )
}