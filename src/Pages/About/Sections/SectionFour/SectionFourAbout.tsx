import roberta from "../../../../assets/images/About/robertaSobre.webp"
import title from "../../../../assets/images/About/experienciaTitle.webp"


export default function SectionFour(){
    

    return (
      <section className="pt-20 pb-20 bg-section-two  ">
          <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col md:flex-row md:justify-between">
            <div className="mt-10  flex flex-col gap-5 xl:gap-7 md:max-w-[50%] lg:max-w-[450px] xl:max-w-[590px] ">
              <img 
                src={title}
                alt="Experiência e alcance" 
              />
              <ul className="pl-3 mt-5 list-disc flex flex-col gap-5">
                <li>
                  Atuação Nacional: Trabalhamos em quase todos os estados
                  do Brasil. trazendo nossa expertise para diversas regiões e
                  contextos;
                </li>

                <li>
                  Clientes Diversificados: Nossa carteira de clientes inclui profissionais da saúde, clínicas, 
                  hospitais e franquias de saúde;
                </li>

                <li>
                  Visualizações: Nossos conteúdos audiovisuais acumularam bilhões de visualizações, demonstrando a 
                  eficácia e o alcance de nossas produções.
                </li>
              </ul>
            </div>

            <img src={roberta} alt="" className="md:max-h-[450px] lg:max-h-[700px] rounded-[30px] " />
          </div>
      </section>
    )
}