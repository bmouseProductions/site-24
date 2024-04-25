import {Botao} from '../../../../components/BotaoEscuro/Botao'

import bmod from "../../../../assets/images/Home/SectionFour/bomd+.webp";
import zoomies from "../../../../assets/images/Home/SectionFour/zoomies.webp";
import giolaser from "../../../../assets/images/Home/SectionFour/giolaser.webp";
import agroecologia from "../../../../assets/images/Home/SectionFour/agroecologia.webp";
import sorridents from "../../../../assets/images/Home/SectionFour/sorridents.webp";
import Patense from "../../../../assets/images/Home/SectionFour/patense.webp";


const info = [
  {
    img: bmod,
    title: "bomd+",
    text: "Lançamento do cartão de desconto bomd+",
    link: 'https://bmouseproductions.com/view/atendimento/post_type_case/bomd/'
  },
  {
    img: zoomies,
    title: "Zoomies",
    text: "Lançamento dos produtos Zoomies",
    link: 'https://bmouseproductions.com/view/atendimento/post_type_case/identidade-visual-da-zoomies/'
  },
  {
    img: giolaser,
    title: "GiO 10 anos!",
    text: "Campanha de 10 anos da GiOlaser",
    link: 'https://bmouseproductions.com/view/atendimento/post_type_case/giolaser/'
  },
  {
    img: agroecologia,
    title: "Patense Agroecologia",
    text: "Lançamento dos biofertilizantes mais inovadores do mercado",
    link: 'https://bmouseproductions.com/view/atendimento/post_type_case/agroecologia/'
  },
  {
    img: sorridents,
    title: "Sorridents",
    text: "Produção de conteúdo audiovisual",
    link: 'https://bmouseproductions.com/view/atendimento/post_type_case/sorridents/'
  },
  {
    img: Patense,
    title: "Grupo Patense",
    text: "Campanha “O poder da transformação”",
    link: 'https://bmouseproductions.com/view/atendimento/post_type_case/patense/'
  },
];

export const SectionFour = () => {
  return (
    <section className="bg-blur-left ">
      <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col gap-14 lg:gap-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-white">
          
            <h1 className="w-full font-tittle !text-[95px] md:!text-[150px] xl:!text-[200px] ">
              Nossos projetos
            </h1>
        
            <p className='lg:!max-w-[400px] xl:!max-w-[500px] '>
              Ao longo da nossa trajetória, participamos da criação e execução de diversos projetos. 
              São milhões de visualizações acumuladas nas redes sociais e dezenas de clientes satisfeitos 
              com a nossa performance e comprometimento com a excelência. Confira alguns trabalhos:
            </p>
          
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          {info.map((item, index) => {
            return (
              <a
                className="relative w-full grayscale hover:grayscale-0 shadow-card rounded-[35px] overflow-hidden transition-all card-empresa"
                key={index}
                href={item.link}
              >
                <img className='block w-full transition-all' src={item.img} alt="" />
                <div className="px-10 w-full  h-[100px] xl:h-[120px] hidden absolute bottom-0 efeito-vidro lg:flex items-center justify-between gap-5 xl:gap-7 text-white ">
                  <div className="flex flex-col gap-2 xl:gap-3">
                    {" "}
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                  <div>
                    <div
                      className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border border-white button-card transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 !text-black">
                        <path strokeLinecap="round" className='' strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div> 
              </a>
            );
          })}
        </div>
      </div>

      <div className='w-[225px] mt-12 mx-auto'>
          <Botao 
            text='Saiba mais' 
            tipo='tipo2' 
            link='https://bmouseproductions.com/view/atendimento/nossos-trabalhos/'
          />
        
      </div>
    </section>
  );
};
