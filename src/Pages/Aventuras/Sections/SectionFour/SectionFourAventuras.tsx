/*BANNERS*/
import cafeAventuras from '../.././../../assets/images/Aventuras/SectionFour/cafeAventuras.webp'
import patenseAventuras from '../.././../../assets/images/Aventuras/SectionFour/patenseAventuras.webp'
import agroAventuras from '../.././../../assets/images/Aventuras/SectionFour/agroAventuras.webp'
import petsMellonAventuras from '../.././../../assets/images/Aventuras/SectionFour/petsMellonAventuras.webp'
import domd from '../.././../../assets/images/Aventuras/SectionFour/bomd+Aventuras.webp'
import morgoAventuras from '../.././../../assets/images/Aventuras/SectionFour/morgoAventuras.webp'
import cardealAventuras from '../.././../../assets/images/Aventuras/SectionFour/cardealAventuras.webp'
import zoomiesAventuras from '../.././../../assets/images/Aventuras/SectionFour/zoomiesAventuras.webp'
import neoGeneticsAventuras from '../.././../../assets/images/Aventuras/SectionFour/neoGeneticsAventuras.webp'
import transtrianguloAventuras from '../.././../../assets/images/Aventuras/SectionFour/transtrianguloAventuras.webp'
import whgAventuras from '../.././../../assets/images/Aventuras/SectionFour/whgAventuras.webp'
import mirianAventuras from '../.././../../assets/images/Aventuras/SectionFour/mirianAventuras.webp'
import leoniAventuras from '../../../../assets/images/Aventuras/SectionFour/leoniAventuras.webp'
import ljAventuras from '../../../../assets/images/Aventuras/SectionFour/ljAventuras.webp'
//import casaSaudeAventuras from '../../../../assets/images/Aventuras/SectionFour/casaAventuras.webp'
import urtAventuras from '../../../../assets/images/Aventuras/SectionFour/capaURT.webp'

/*LOGOS*/
import logoCafe from '../../../../assets/images/logos-clientes/novageracao.svg'
import logoPatense from '../../../../assets/images/logos-clientes/patense.svg'
import logoAgroecologia from '../../../../assets/images/logos-clientes/agroecologia.svg'
import logoPetsmellon from '../../../../assets/images/logos-clientes/petsmellon.svg'
import logoBomd from '../../../../assets/images/logos-clientes/logoBomd.webp'
import logoMorgo from '../../../../assets/images/logos-clientes/logoMorgo.webp'
import logoCardeal from '../../../../assets/images/logos-clientes/logoCardeal.png'
import logoNeogenetics from '../../../../assets/images/logos-clientes/neogenetics.svg'
import logoZoomies from '../../../../assets/images/logos-clientes/zoomies.svg'
import logoTranstriangulo from '../../../../assets/images/logos-clientes/transtriangulo.svg'
import logoWHG from '../../../../assets/images/logos-clientes/whg.png'
import logoMiriam from '../../../../assets/images/logos-clientes/miriam.svg'
import logoLeoni from '../../../../assets/images/logos-clientes/leoni.svg'
import logoLJ from '../../../../assets/images/logos-clientes/lj.svg'
//import logoCasaSaude from '../../../../assets/images/logos-clientes/casaSaude.svg'
import logoURT from '../../../../assets/images/logos-clientes/URT.svg'


export default function SectionFour(){
  return (
    <section className="container px-5 lg:px-10 xl:px-20 py-10 pb-20 mx-auto">
      <div className='w-full flex flex-col md:flex-row gap-5 md:gap-0 flex-wrap'>
        {/* NOVA GERAÇÃO*/}
        <a 
          href="https://bmouseproductions.com/view/atendimento/case/cafe-nova-geracao"
          className='w-full md:w-1/3 casesAventuras'
        >
          <img 
            src={cafeAventuras}
            alt="banner da empresa whg" 
            className="w-full"
          />

          <div className='hoverAventuras !transition-all'>
            <img 
              src={logoCafe}
              alt="logo da empresa WHG"
              className='max-w-[300px]  '
            />

            <p className='text-center'>
              A marca Café Nova Geração e a BMouse compartilharam uma jornada de parceria em um dos setores mais emblemáticos do Brasil: o café.
            </p>
          </div>
        </a>

        {/* PATENSE */}
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

        {/* AGROECOLOGIA E PETS MELLON */}
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
                Na jornada da Patense Agroecologia, a mais recente marca do Grupo Patense, estamos completamente engajados em todos os aspectos desse empreendimento focado na produção de biofertilizantes.
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
        
        {/* BOMD+ */}
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
        
        {/* TRANSTRIANGULO E NEOGENETICS */}
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

        {/* ZOOMIES */}
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

        {/* MORGO E CARDEAL */}
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

        {/* WHG */}
        <a 
          href="https://bmouseproductions.com/view/atendimento/case/whg/"
          className='w-full casesAventuras'
        >
          <img 
            src={whgAventuras}
            alt="" 
            className="w-full"
          />

          <div className='hoverAventuras !transition-all'>
            <img 
              src={logoWHG}
              alt="logo da empresa WHG"
              className='max-w-[300px]  '
            />

            <p className='text-center md:max-w-[500px] '>
              Em nossa trajetória com o agro, estabelecemos uma valiosa parceria com a WHG, uma instituição financeira de renome que oferece soluções personalizadas de investimento e seguros para o mercado. 
            </p>
          </div>
        </a>

        {/* MIRIAM, LEONI E LJ */}
        <div className='w-full flex flex-col md:flex-row gap-5 md:gap-0'>
          <a 
            href="https://bmouseproductions.com/view/atendimento/case/mirian-gontijo/"
            className=' casesAventuras '
          >
            <img 
              src={mirianAventuras}
              alt="" 
              className="w-full"
            />

            <div className='hoverAventuras !transition-all'>
              <img 
                src={logoMiriam}
                alt="logo da empresa WHG"
                className='max-w-[300px]  '
              />

              <p className='text-center'>
              O escritório de advocacia Mirian Gontijo tem se destacado pela excelência e pelo compromisso em oferecer soluções jurídicas inovadoras e eficientes aos seus clientes.
              </p>
            </div>
          </a>

          <a 
            href="https://bmouseproductions.com/view/atendimento/case/lj-empreendimentos-edificio-goldenurt/"
            className='casesAventuras '
          >
            <img 
              src={ljAventuras}
              alt="" 
              className="w-full"
            />

            <div className='hoverAventuras !transition-all'>
              <img 
                src={logoLJ}
                alt="logo da empresa WHG"
                className='max-w-[300px]  '
              />

              <p className='text-center'>
              A BMouse Productions foi responsável pela criação do branding e da identidade visual da LJ Empreendimentos, incluindo o Edifício Golden, que oferece salas comerciais para locação, focadas em consultórios médicos e clínicas.
              </p>
            </div>
          </a>

          <a 
            href="https://bmouseproductions.com/view/atendimento/case/leoni/"
            className='casesAventuras '
          >
            <img 
              src={leoniAventuras}
              alt="" 
              className="w-full"
            />

            <div className='hoverAventuras !transition-all'>
              <img 
                src={logoLeoni}
                alt="logo da empresa WHG"
                className='max-w-[300px]  '
              />

              <p className='text-center'>
              A Leoni Alimentos, uma marca consagrada de espetinhos, cortes de carne selecionados e serviços completos de buffet, já possui mais de 60 anos de tradição. Junto à BMouse, a marca conseguiu se consagrar no mercado como uma das maiores do Brasil em seu segmento, principalmente após uma campanha marcante e deliciosa com a parceria da artista Tânia Mara.
              </p>
            </div>
          </a>
        </div>

        {/* CASA SAUDE 
        <a 
          href="https://bmouseproductions.com/view/atendimento/case/casa-centro-de-atencao-a-saude/"
          className='w-full casesAventuras'
        >
          <img 
            src={casaSaudeAventuras}
            alt="" 
            className="w-full"
          />

          <div className='hoverAventuras !transition-all'>
            <img 
              src={logoCasaSaude}
              alt="logo da empresa WHG"
              className='max-w-[300px]  '
            />

            <p className='text-center md:max-w-[500px] '>
            A BMouse Productions desenvolveu campanhas estratégicas focadas em atrair novos pacientes para o Casa (Centro de Atenção à Saúde), um centro especializado em saúde que oferece serviços integrados em medicina, nutrição, psicologia, e uma academia especializada no tratamento e prevenção de doenças.
            </p>
          </div>
        </a>
        */}

        {/* URT */}
        <a 
          href="https://bmouseproductions.com/view/atendimento/case/urt/"
          className='w-full casesAventuras'
        >
          <img 
            src={urtAventuras}
            alt="" 
            className="w-full"
          />

          <div className='hoverAventuras !transition-all'>
            <img 
              src={logoURT}
              alt="logo da empresa WHG"
              className='md:max-w-[400px]  '
            />

            <p className='text-center md:max-w-[500px] '>
              Com uma nova direção e uma equipe revitalizada, a União Recreativa dos Trabalhadores (URT), um renomado time de futebol da cidade de Patos de Minas/MG, entendeu a importância do marketing na construção de uma nova fase. E foi nesse momento que a BMouse entrou em campo com sua expertise e paixão pelo futebol.
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}