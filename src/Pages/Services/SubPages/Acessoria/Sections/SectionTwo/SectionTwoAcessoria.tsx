import acessoria from '../../../../../../assets/images/Services/SubPages/Acessoria/acessoria.webp'
import border from '../../../../../../assets/images/border.svg'

export default function SectionTwo(){
    return (
        <section className=" bg-blur-left !bg-bottom md:!bg-left">
            <div className=' container mx-auto mt-20 flex flex-col-reverse md:flex-row justify-center lg:gap-10'>
                <div className='w-full flex justify-center'>
                    <img className='max-h-[400px] lg:max-h-[600px] xl:max-h-[800px] ' src={acessoria} alt="" />
                </div>
                
                <div className='w-full mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 '>
                    <div className="ml-5 md:ml-0 mb-5 py-2 px-3 max-w-[180px] lg:max-w-[180px] xl:max-w-[220px]  text-center uppercase rounded-3xl border-2 border-white">
                        <h3>o que fazemos</h3>
                    </div>
                    
                    <h1 className='font-tittle lg:!text-[120px] xl:!text-[100px] 2xl:!text-[150px] text-center lg:text-start'>
                        posicionamento
                    </h1>

                    <img src={border} className=' ' alt="" />
                    <div className='w-[90%] mx-auto flex flex-col gap-5 mb-10'>
                        <ul className='pl-5 list-disc'>
                            <li>Consultoria de plano de mídia perante orçamento e objetivos;</li>
                            <li>Assessoria de imprensa especializada;</li>
                            <li>Negociação com veículos de comunicação especializados;</li>
                            <li>Materiais e planejamentos para feiras e convenções;</li>
                            <li>Criação de vinhetas para rádios e veículos especializados;</li>
                            <li>Destinação de verba para projetos de leis de incentivo;</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}