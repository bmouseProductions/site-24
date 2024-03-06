import React, { useState,  } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  
  return (
    <>
      {isOpen && (
        <div className="pt-10 fixed z-[10000] inset-0 bg-black bg-opacity-50 flex items-start justify-center">
          <div className=" w-[90%] max-w-[600px] bg-[#d9d9d9] rounded-[30px]  ">
            <div className='p-6 rounded-[30px] bg-blur-top !bg-[#0f182d] '>
              <h1 className="font-tittle2 text-center">Entre em Contato</h1>
            </div>
            
            <form
              className='mt-10 px-5 md:px-10 flex flex-col gap-3'
            >
              <input
                placeholder="Seu melhor e-mail"
                className="w-full h-[60px] px-5 rounded-3xl bg-[#c2c2c2] "
              />

              <input
                placeholder="Telefone"
                className="w-full h-[60px] px-5 rounded-3xl bg-[#c2c2c2] "
              />

              <input
                placeholder="Segmento"
                className="w-full h-[60px] px-5 rounded-3xl bg-[#c2c2c2] "
              />

              <div className='my-5 w-full flex gap-5 justify-between md:justify-end'>
                <button 
                  onClick={onClose}
                  className='px-7 py-2 font-semibold text-red-600 rounded-lg bg-white hover:bg-red-200'
                >
                  Cancelar
                </button>
                <button className='px-7 py-2 font-semibold rounded-lg bg-green-500'>
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={ isModalOpen ? " flex items-center justify-center" : "min-h-none"}>
      <button
        onClick={openModal}
        className=" px-5 py-3 text-white text-lg rounded-[30px] bg-[#760BFF] shadow-botao shadow-[#760BFF]"
      >
        Fale conosco  
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
