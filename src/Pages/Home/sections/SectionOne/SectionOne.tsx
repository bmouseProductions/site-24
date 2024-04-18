import React, { useState,  } from 'react';

import { Botao } from "../../../../components/BotaoEscuro/Botao";
import Header from "../../../../components/Header/Header";
import franchising from '../../../../assets/images/Home/header-section-1.svg'
import agromouse from '../../../../assets/images/Home/agromouse.webp'
import story from '../../../../assets/images/Home/story2.webp'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SectionOne = () => {
  /*MODAL VIDEO*/
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const ModalVideo: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  
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
                src="https://www.youtube.com/embed/dJmUMM-m2Wo?si=J6AIbRnem7C4ixz-"
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
    <section className=" md:pt-10 bg-section-one mx-auto">
      <Header />
      <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex gap-10 flex-col">
        <div className=" flex flex-col-reverse lg:flex-row items-end gap-10 justify-between my-10">
          <div className="flex-1 flex flex-col gap-10">
            <h1 className="font-tittle  md:!text-[140px]  xl:!text-[150px] ">
              marketing 360º personalizado para você!
            </h1>
            <div className="flex items-center justify-between gap-3 md:gap-10">
              <div className="w-full">
                <Botao
                  tipo="tipo1"
                  text="Ver nosso portfólio"
                ></Botao>
              </div>
              <div className="w-full">
                <Botao tipo="tipo2" text="RECAP 2023"></Botao>
              </div>
            </div>
          </div>

          <div className=" flex-1 flex flex-col items-center justify-end rounded-[29px]  w-full">
            <a
              className="relative w-full flex justify-center rounded-[29.5px] overflow-hidden transition-all cursor-pointer card-empresa"
              onClick={openModal}
            >
              <img className='w-full md:w-[80%] lg:w-full transition-all' src={franchising} alt="" />
              <div className="hidden absolute bottom-0 h-[160px] w-full md:w-[80%] lg:w-full px-10 efeito-vidro md:flex items-center justify-between gap-10 text-white ">
                <div className="flex flex-col gap-5">
                  {" "}
                  <h2 className="text-xl font-bold">Seja bem-vindo a BMouse!</h2>
                  <p>Clique e assista o vídeo.</p>
                </div>
                <div>
                  <div
                    className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border border-white button-card transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 !text-black">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </div>
                </div>
              </div> 
            </a>
            <ModalVideo isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 xl:gap-10 justify-between items-center  ">
          
          <a 
            className="!h-full lg:!h-[300px] w-full lg:!w-[70%] flex flex-col items-center justify-end rounded-[29px] transition-all bg-agromouse card-empresa"
            href=""
          >
            <img className="lg:hidden" src={agromouse}  alt="" />
            <div className="h-[140px] px-5 xl:px-7 efeito-vidro rounded-[29px] hidden lg:flex items-center justify-between gap-10 text-white ">
              <div className="flex flex-col gap-3">
                {" "}
                <h2 className="text-xl font-bold">AgroMouse</h2>
                <p className="">
                Mais do que uma escolha, a evolução é uma necessidade! Com a BMouse, o agro sai do campo e vai para o mundo digital, alcançando novos públicos, novos horizontes e novos lugares.
                </p>
              </div>
              <div>
                <div
                  className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border  border-white transition-all button-card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 !text-black">
                    <path strokeLinecap="round" className='' strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:hidden mt-5 max-w-[90%]">
              <h2 className="text-xl font-bold">AgroMouse</h2>
              <p className="">
                Mais do que uma escolha, a evolução é uma necessidade! Com a BMouse, o agro sai do campo e vai para o mundo digital, alcançando novos públicos, novos horizontes e novos lugares.
              </p>
            </div>
          </a>


          <a
            className="!h-full lg:!h-[300px] lg:!w-[30%] flex flex-col items-center justify-end rounded-[29px] transition-all bg-story card-empresa"
            href="/servicos/audiovisual"
          >
            <img className="lg:hidden rounded-[30px] w-full" src={story}  alt="" />
            <div className="h-[140px] px-5 xl:px-7 efeito-vidro rounded-[29px] hidden lg:flex items-center justify-between xl:gap-5 text-white ">
              <div className="flex flex-col gap-3">
                {" "}
                <h2 className="text-xl font-bold">Storytellers</h2>
                <p>Somos especialistas em transformar histórias em obras impactantes!</p>
              </div>
              <div>
                <div
                  className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border  border-white transition-all button-card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 !text-black">
                    <path strokeLinecap="round" className='' strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:hidden mt-5 max-w-[90%]">
              <h2 className="text-xl font-bold">Storytellers</h2>
              <p className="">
                Somos especialistas em transformar histórias em obras impactantes!
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};
