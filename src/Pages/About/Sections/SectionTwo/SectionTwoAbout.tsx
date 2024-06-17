import camera from '../../../../assets/images/About/camera.webp'
import logo from '../../../../assets/images/logos/logo-colorida.svg'

export default function SectionTwo(){
    return (
        <section className=" bg-blur-left ">
            <div className='py-20 container mx-auto'>
                <div className='lg:mt-20 flex flex-col md:flex-row justify-center lg:gap-10'>
                    <img className='max-h-[400px] lg:max-h-[600px] xl:max-h-[800px] ' src={camera} alt="" />
                    <div className='mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 '>
                        <img src={logo} alt="" className='mx-auto max-w-[300px] md:max-w-[250px] lg:max-w-[300px]' />

                        <div className="container mx-auto w-full h-[3px] bg-[#0fff94] rounded-xl" />

                        <div className='w-[90%] mx-auto flex flex-col gap-5'>
                            <p className='md:text-sm lg:text-base'>
                                Os Studios BMouse são o nosso maior diferencial. Nosso espaço é equipado com tecnologia de ponta 
                                e equipamentos de última geração. São diversas câmeras de cinema e de ação, drones, fundos personalizados, 
                                iluminação profissional e equipamento de edição potente, entregando conteúdo de qualidade inigualável 
                                para os nossos clientes.
                            </p>
                            <p className='md:text-sm lg:text-base'>
                                Aqui, transformamos sonhos em realidade e ideias em projetos profissionais e exclusivos. 
                                Com uma equipe profissional de produtores, filmmakers, editores, atores e narradores, criamos peças 
                                audiovisuais impactantes para revolucionarem a sua marca.
                            </p>
                            <p className="text-sm lg:text-base font-meutas-medium font-bold ">
                                Conte com a BMouse para transformar suas histórias em verdadeiras obras de arte!
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}