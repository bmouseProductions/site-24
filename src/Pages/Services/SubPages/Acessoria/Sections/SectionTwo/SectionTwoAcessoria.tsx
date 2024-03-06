import camera from '../../../../../../assets/images/About/camera.webp'
import logo from '../../../../../../assets/images/logos/logo-colorida.svg'
import border from '../../../../../../assets/images/border.svg'

export default function SectionTwo(){
    return (
        <section className=" container mx-auto bg-blur-left !bg-bottom md:!bg-left">
            <div className='mt-20 flex flex-col-reverse md:flex-row justify-center lg:gap-10'>
                <img className='max-h-[400px] lg:max-h-[600px] xl:max-h-[800px] ' src={camera} alt="" />
                <div className='mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 '>
                    <img src={logo} alt="" className='mx-auto max-w-[300px] md:max-w-[250px] lg:max-w-[300px]' />
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