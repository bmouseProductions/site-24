import {Botao} from '../../../../components/BotaoEscuro/Botao'

import projetos from '../../../../assets/images/Home/SectionFour/nossos-projetos.webp'

import giolaser from "../../../../assets/images/Home/SectionFour/giolaser.webp";
import sorridents from "../../../../assets/images/Home/SectionFour/sorridents.webp";
import draElisangela from "../../../../assets/images/Home/SectionFour/draElisangela.webp";
import draRenata from "../../../../assets/images/Home/SectionFour/draRenata.webp";
import mid from "../../../../assets/images/Home/SectionFour/mid.webp";
import olharCerto from "../../../../assets/images/Home/SectionFour/olharCerto.webp";


const info = [
  {
    img: giolaser,
    title: "GiO 10 anos!",
    link: 'https://bmouseproductions.com/view/atendimento/case/gio-estetica-avancada/'
  },
  {
    img: sorridents,
    title: "Sorridents",
    link: 'https://bmouseproductions.com/view/atendimento/case/sorridents/'
  },
  {
    img: draElisangela,
    title: "Dra. Elisângela",
    link: 'https://bmouseproductions.com/view/atendimento/case/dra-elisangela-menezes/'
  },
  {
    img: draRenata,
    title: "Dra. Renata",
    link: 'https://bmouseproductions.com/view/atendimento/case/dra-renata-caldeira/'
  },
  {
    img: mid,
    title: "Medic Imagens Diagnósticos",
    link: 'https://bmouseproductions.com/view/atendimento/case/medic-imagem-diagnosticos/'
  },
  {
    img: olharCerto,
    title: "Olhar Certo",
    link: 'https://bmouseproductions.com/view/atendimento/case/olhar-certo/'
  },
];

export const SectionFour = () => {
  return (
    <section className="bg-blur-left ">
      <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col gap-14 lg:gap-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-white">
          <img src={projetos} alt="imagem com o titulo nossos projetos" />
          <div className='lg:ml-10 flex flex-col gap-3'>
            <p>
              Ao longo de nossa trajetória, acumulamos uma vasta experiência na produção de conteúdos para o setor de saúde. 
              Nossas campanhas comerciais estratégicas e materiais de alta qualidade já alcançaram milhões de visualizações nas 
              redes sociais, conectando efetivamente o público com este importante segmento. Informamos, impactamos e emocionamos, 
              sempre com excelência e profissionalismo.
            </p>
            <p>
              Confira alguns de nossos trabalhos e veja como podemos ajudar a elevar a visibilidade do setor:
            </p>
          </div>
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
            link='https://bmouseproductions.com/view/atendimento/nossos-trabalhos/'
          />
        
      </div>
    </section>
  );
};
