import acessoria from '../../../../../../assets/images/Services/SubPages/Acessoria/sectionTwo-assessoria.webp'

import corsiva from '../../../../../../assets/images/corsiva.png'

export default function SectionTwo(){
    return (
        <section className=" bg-blur-left !bg-bottom md:!bg-left">
            <div className='container px-5 lg:px-10 xl:px-20 mx-auto mt-20 flex flex-col-reverse md:flex-row-reverse justify-center lg:gap-10'>
                <div className='w-full flex justify-center items-center'>
                    <img className='max-h-[400px] lg:max-h-[600px] xl:max-h-[800px] ' src={acessoria} alt="" />
                </div>
                
                <div className='w-full mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 '>
                    <div className=" mb-5 py-2 px-3 max-w-[180px] lg:max-w-[180px] xl:max-w-[220px]  text-center uppercase rounded-3xl border-2 border-white">
                        <h3>o que fazemos</h3>
                    </div>
                    
                    <div className='relative'>
                        <h1 className='font-tittle !text-[38px] md:!text-[45px] lg:!text-[50px] xl:!text-[60px] !leading-[50px] xl:!leading-[70px] '>
                            linguagem própria
                        </h1>
                        <img 
                            src={corsiva} 
                            alt="" 
                            className='absolute top-8 xl:top-11 right-0 xl:right-5 w-[250px] xl:w-[300px]  '
                        />
                    </div>

                    <div className="container mx-auto w-full h-[3px] bg-[#0fff94] rounded-xl" />

                    <div className='w-[90%] mx-auto flex flex-col gap-5 mb-10'>
                        <ul className='pl-5 list-disc'>
                            <li>Consultoria de plano de mídia perante orçamento e objetivos;</li>
                            <li>Assessoria de imprensa especializada;</li>
                            <li>Negociação com veículos de comunicação especializados;</li>
                            <li>Materiais e planejamentos para feiras e convenções;</li>
                            <li>Criação de vinhetas para rádios e veículos especializados;</li>
                            <li>Destinação de verba para projetos de leis de incentivo.</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}