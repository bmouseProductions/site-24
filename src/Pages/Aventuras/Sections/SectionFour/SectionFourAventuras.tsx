/*BANNERS*/
import whgAventuras from '../.././../../assets/images/Aventuras/SectionFour/whgAventuras.webp'
import patenseAventuras from '../.././../../assets/images/Aventuras/SectionFour/patenseAventuras.webp'
import agroAventuras from '../.././../../assets/images/Aventuras/SectionFour/agroAventuras.webp'
import petsMellonAventuras from '../.././../../assets/images/Aventuras/SectionFour/petsMellonAventuras.webp'

import domd from '../.././../../assets/images/Aventuras/SectionFour/bomd+Aventuras.webp'

import morgoAventuras from '../.././../../assets/images/Aventuras/SectionFour/morgoAventuras.webp'
import cardealAventuras from '../.././../../assets/images/Aventuras/SectionFour/cardealAventuras.webp'
import zoomiesAventuras from '../.././../../assets/images/Aventuras/SectionFour/zoomiesAventuras.webp'
import neoGeneticsAventuras from '../.././../../assets/images/Aventuras/SectionFour/neoGeneticsAventuras.webp'
import transtrianguloAventuras from '../.././../../assets/images/Aventuras/SectionFour/transtrianguloAventuras.webp'

/*LOGOS*/
import logoWHG from '../../../../assets/images/logos-clientes/whg.png'
import logoPatense from '../../../../assets/images/logos-clientes/patense.svg'
import logoAgroecologia from '../../../../assets/images/logos-clientes/agroecologia.svg'
import logoPetsmellon from '../../../../assets/images/logos-clientes/petsmellon.svg'
import logoBomd from '../../../../assets/images/logos-clientes/logoBomd.webp'
import logoMorgo from '../../../../assets/images/logos-clientes/logoMorgo.webp'
import logoCardeal from '../../../../assets/images/logos-clientes/logoCardeal.png'
import logoNeogenetics from '../../../../assets/images/logos-clientes/neogenetics.svg'
import logoZoomies from '../../../../assets/images/logos-clientes/zoomies.svg'
import logoTranstriangulo from '../../../../assets/images/logos-clientes/transtriangulo.svg'




export default function SectionFour(){

    return (
      <section className="container px-5 lg:px-10 xl:px-20 py-10 pb-20 mx-auto">
        <div className='flex flex-col gap-5 md:gap-0'>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 ">
            <a 
              href="https://bmouseproductions.com/view/atendimento/case/whg/  "
              className='w-full md:w-1/3 casesAventuras'
            >
              <img 
                src={whgAventuras}
                alt="banner da empresa whg" 
                className="w-full"
              />

              <div className='hoverAventuras !transition-all'>
                <img 
                  src={logoWHG}
                  alt="logo da empresa WHG"
                  className='max-w-[300px]  '
                />

                <p className='text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id explicabo assumenda vitae sunt esse 
                  nostrum ratione et temporibus suscipit voluptatem.
                </p>
              </div>
            </a>
            

            <a 
              href="https://bmouseproductions.com/view/atendimento/case/patense/"
              className='w-full md:w-1/3 casesAventuras'
            >
              <img 
                src={patenseAventuras}
                alt="" 
                className="w-full"
              />

              <div className='hoverAventuras !transition-all'>
                <img 
                  src={logoPatense}
                  alt="logo da empresa WHG"
                  className='max-w-[300px]  '
                />

                <p className='text-center'>
                Com mais de 50 anos de história, a Patense é uma marca consolidada no mercado, mas o marketing impulsionou sua trajetória de crescimento.
                </p>
              </div>
            </a>


            <div className='w-full md:w-1/3 flex flex-col gap-5 md:gap-0'>
              <a 
                href="https://bmouseproductions.com/view/atendimento/case/patense-agroecologia/"
                className='casesAventuras'
              >
                <img 
                  src={agroAventuras}
                  alt="" 
                  className=""
                />

                <div className='hoverAventuras !transition-all'>
                  <img 
                    src={logoAgroecologia}
                    alt="logo da empresa WHG"
                    className='max-w-[300px]  '
                  />
  
                  <p className='text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id explicabo assumenda vitae sunt esse 
                    nostrum ratione et temporibus suscipit voluptatem.
                  </p>
                </div>
              </a>
              

              <a 
                href="https://bmouseproductions.com/view/atendimento/case/pets-mellon/"
                className='casesAventuras'
              >
                <img 
                  src={petsMellonAventuras}
                  alt="" 
                  className=""
                />

                <div className='hoverAventuras !transition-all'>
                  <img 
                    src={logoPetsmellon}
                    alt="logo da empresa WHG"
                    className='max-w-[300px]  '
                  />
  
                  <p className='text-center'>
                  Mais uma marca do renomado Grupo Patense, a Pets Mellon é uma copacker de produtos relacionados a alimentação animal no Brasil e no mundo, produzindo para diversas marcas do topo do mercado mundial.
                  </p>
                </div>
              </a>
              
            </div>
          </div>

          <a 
            href="https://bmouseproductions.com/view/atendimento/case/bomd/"
            className='w-full casesAventuras'
          >
            <img 
              src={domd}
              alt="" 
              className="w-full"
            />

            <div className='hoverAventuras !transition-all'>
              <img 
                src={logoBomd}
                alt="logo da empresa WHG"
                className='max-w-[300px]  '
              />

              <p className='text-center md:max-w-[500px] '>
              O bomd+ é a mais recente marca do Grupo Salus, um dos parceiros mais antigos da BMouse Productions. Através de um processo de rebranding, nossa agência esteve envolvida em todas as etapas, desde a concepção do nome até a divulgação da nova identidade.
              </p>
            </div>
          </a>
          
          <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-0">
            <div className='w-full md:w-1/3 flex flex-col gap-5 md:gap-0'>
              <a 
                href="https://bmouseproductions.com/view/atendimento/case/transtriangulo/"
                className='casesAventuras'
              >
                <img 
                  src={transtrianguloAventuras}
                  alt="" 
                  className="w-full"
                />

                <div className='hoverAventuras !transition-all'>
                  <img 
                    src={logoTranstriangulo}
                    alt="logo da empresa WHG"
                    className='max-w-[300px]  '
                  />
  
                  <p className='text-center'>
                  A Transtriângulo é uma transportadora de óleos e gorduras animais e vegetais que se tornou um exemplo de sucesso no setor. Em um mercado altamente competitivo, a BMouse mergulhou profundamente no universo da Transtriângulo, entendendo seus valores, forças e potencial.
                  </p>
                </div>
              </a>
              

              <a 
                href="https://bmouseproductions.com/view/atendimento/case/neo-genetics/"
                className='casesAventuras'
              >
                <img 
                  src={neoGeneticsAventuras}
                  alt="" 
                  className="w-full"
                />

                <div className='hoverAventuras !transition-all'>
                  <img 
                    src={logoNeogenetics}
                    alt="logo da empresa WHG"
                    className='max-w-[300px]  '
                  />
  
                  <p className='text-center'>
                  No ramo da piscicultura, a BMouse tem uma parceria consolidada com a NeoGenetics, que se baseia em princípios sólidos de inovação e excelência. Através de estratégias de marketing personalizadas, criamos conteúdos que destacam a sua diferenciação e se alinham à sua visão de mercado.
                  </p>
                </div>
              </a>
            </div>

            <a 
              href="https://bmouseproductions.com/view/atendimento/case/zoomies-pet-care/"
              className='w-full md:w-1/3 casesAventuras'
            >
              <img 
                src={zoomiesAventuras}
                alt="" 
                className=""
              />

              <div className='hoverAventuras !transition-all'>
                <img 
                  src={logoZoomies}
                  alt="logo da empresa WHG"
                  className='max-w-[300px]  '
                />

                <p className='text-center'>
                A Zoomies, marca que faz parte do Grupo Patense, está revolucionando o mercado pet brasileiro por meio de sua inovação e qualidade. Oferecendo uma variedade de bifinhos e uma linha de produtos naturais, a Zoomies garante o melhor para os pets.
                </p>
              </div>
            </a>

            <div className='w-full md:w-1/3 flex flex-col gap-5 md:gap-0'>
              <a 
                href="https://bmouseproductions.com/view/atendimento/case/morgo/"
                className='casesAventuras'
              >
                <img 
                  src={morgoAventuras}
                  alt="" 
                  className="w-full"
                />

                <div className='hoverAventuras !transition-all'>
                  <img 
                    src={logoMorgo}
                    alt="logo da empresa WHG"
                    className='max-w-[300px]  '
                  />
  
                  <p className='text-center'>
                  Empresa especializada em construção civil, a Morgo é uma nova parceira da BMouse Productions. Além de refazer seu branding, a construtora contou com um planejamento estratégico completo, que visa aumentar o seu alcance nas redes sociais.
                  </p>
                </div>
              </a>
              

              <a 
                href="https://bmouseproductions.com/view/atendimento/case/cardeal-empreendimentos/"
                className='casesAventuras'
              >
                <img 
                  src={cardealAventuras}
                  alt="" 
                  className="w-full"
                />

                <div className='hoverAventuras !transition-all'>
                  <img 
                    src={logoCardeal}
                    alt="logo da empresa WHG"
                    className='max-w-[300px]  '
                  />
  
                  <p className='text-center'>
                  A Cardeal Empreendimentos é uma empresa de soluções urbanísticas inteligentes que resultou da fusão de diversas empresas do setor com anos de experiência no mercado imobiliário.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}