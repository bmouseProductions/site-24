import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Header from "../../../../components/Header/Header";
import banner from "../../../../assets/images/Aventuras/bannerAventuras.svg";

export function SectionOne() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:pt-10 mx-auto pb-10">
            <Header />
            <section className="container px-5 lg:px-10 xl:px-20 mx-auto relative">
                <img 
                    src={banner} 
                    alt="banner retrospectiva 2023 Bmouse Productions"
                    className="w-full cursor-pointer" // Adiciona o ponteiro do mouse para indicar que a imagem é clicável
                    onClick={() => setOpen(true)} // Abre o modal ao clicar na imagem
                />

                <div className='absolute top-[47%] right-[46%]  xl:right-[48%] hover:cursor-pointer' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 md:size-16 xl:size-20 animate-bounce ">
                        <path className='text-[#0fff94]  ' strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path className='text-[#0fff94]  ' strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                </div>
            </section>

            {/* Modal */}
            <Transition show={open} as={Fragment}>
                <Dialog className="relative z-10" onClose={() => setOpen(false)}>
                    <Transition.Child
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
                        <Transition.Child
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform bg-transparent shadow-xl transition-all w-4/5 h-4/5 max-h-[200px] md:max-h-[300px] lg:max-h-[400px] xl:max-h-none ">
                                
                                {/* Botão de Fechar */}
                                <button
                                    type="button"
                                    className="absolute top-[-40px] right-2 rounded-full bg-red-600 p-1 text-white hover:bg-red-500 focus:outline-none"
                                    onClick={() => setOpen(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                </button>

                                {/* Vídeo do YouTube */}
                                <div className="relative h-full">
                                    <iframe
                                        className="w-full h-full rounded-2xl bg-transparent"
                                        src="https://www.youtube.com/embed/36jOLshV4_M?si=jn8cLniu8AQcHBob"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Vídeo do YouTube"
                                    ></iframe>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}
