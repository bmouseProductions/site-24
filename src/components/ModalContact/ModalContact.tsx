import React, { useState,  } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-red-600 p-6 rounded-md w-[90%] max-w-[600px] ">
            <h1 className="font-tittle">Entre em Contato</h1>
            <form
              className='flex flex-col gap-3'
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

              <div>
                <button className='px-7 py-2 rounded-2xl bg-green-500'>
                  enviar
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
    <div className={ isModalOpen ? "min-h-screen flex items-center justify-center" : "min-h-none "}>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Abrir Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
