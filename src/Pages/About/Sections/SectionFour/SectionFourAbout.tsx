import React, { useState } from "react";
import roberta from "../../../../assets/images/About/robertaSobre.webp"
import title from "../../../../assets/images/About/experienciaTitle.webp"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SectionFour(){
    
    const [isModalProcessos, setIsModalProcessosOpen] = useState(false);

    const openModalVideoProcessos = () => setIsModalProcessosOpen(true);
    const closeModalVideoProcessos = () => setIsModalProcessosOpen(false);

    const VideoProcessos: React.FC<ModalProps> = ({ isOpen, onClose }) => {
        return (
          <>
            {isOpen && (
              <div className="pt-10 fixed z-[10000] inset-0 bg-black bg-opacity-50 flex items-start justify-center">
                <div className='container mx-auto px-5 md:px-10'>
                  <div className='flex justify-end'>
                    <button 
                      className='w-10 h-10 mb-5 md:mb-0 botaoClose'
                      onClick={onClose}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                        <path strokeLinecap="round" className='w-full h-full ' strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <iframe
                    className="mx-auto w-full md:max-w-[600px] md:h-[400px] lg:max-w-[700px] lg:h-[515px] xl:max-w-[1000px] h-[200px] rounded-3xl"
                    src="https://www.youtube.com/embed/UUDHPrQlbwI?si=11JCN66hHlFHNJKT"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </div>
              </div>
            )}
          </>
        );
    };

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
                  Clientes Diversificados: Nossa carteira de clientes inclui
                  profissionais da saúde, clinicas, hospitais e franquias de
                  saúde;
                </li>

                <li>
                  Visualizações: Nossos conteúdos audiovisuais acumularam
                  bilhões de visualizações demonstrando a eficácia e o
                  alcance de nossas produções.
                </li>
              </ul>
            </div>

            <button 
                className="flex justify-center lg:justify-end items-center mt-10 md:mt-0"
                onClick={openModalVideoProcessos}
            >
                <img src={roberta} alt="" className="md:max-h-[450px] lg:max-h-[700px] rounded-[30px] " />
            </button>
            <VideoProcessos isOpen={isModalProcessos} onClose={closeModalVideoProcessos}/>
          </div>
      </section>
    )
}