import React, { useState } from "react";
import joyce from "../../../../assets/images/About/veras.webp"

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
            <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col md:flex-row md:justify-around">
                <div className="mt-10 flex flex-col gap-5 xl:gap-7 md:max-w-[400px] lg:max-w-[450px] xl:max-w-[590px] ">
                    <h1 className="font-tittle xl:!text-[200px] xl:leading-[170px] ">
                        Como nós trabalhamos?
                    </h1>
                    <p>
                        A BMouse trabalha com um sistema 100% personalizado de acordo com as suas demandas. Por meio do nosso 
                        fluxo criativo, garantimos que você tenha acesso prévio aos conteúdos planejados mensalmente e 
                        campanhas anuais.
                    </p>
                    <p>
                        Aqui, você tem contato direto com o processo criativo e personaliza as suas demandas de acordo com 
                        as suas necessidades. Seja para conquistar as mídias digitais ou para marketing out of home, estamos 
                        dispostos a participar da sua jornada de expansão.
                    </p>
                    <p className="font-meutas-medium font-bold">
                        Embarque conosco nessa conquista do mercado!
                    </p>
                </div>

                <button 
                    className="flex justify-center lg:justify-end items-center mt-10 md:mt-0"
                    onClick={openModalVideoProcessos}
                >
                    <img src={joyce} alt="" className="md:max-h-[450px] lg:max-h-[700px] rounded-[30px] " />
                </button>
                <VideoProcessos isOpen={isModalProcessos} onClose={closeModalVideoProcessos}/>
            </div>
            
        </section>
    )
}