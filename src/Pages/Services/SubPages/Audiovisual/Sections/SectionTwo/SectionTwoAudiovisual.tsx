import camera from '../../../../../../assets/images/Services/SubPages/Audiovisual/sectionTwo-audiovisual.webp'
import logo from '../../../../../../assets/images/logos/logo-colorida.svg'

export default function SectionTwo(){
    return (
        <section className="  bg-blur-left !bg-bottom md:!bg-left">
            <div className='container  mx-auto mt-20 flex flex-col-reverse md:flex-row-reverse justify-center items-center lg:gap-10'>
                <img className='w-fit max-h-[400px] lg:max-h-[500px] xl:max-h-[800px] ' src={camera} alt="" />

                <div className='w-full mt-10 px-5 md:px-0 md:pl-5 lg:pl-10 xl:pl-20 flex flex-col gap-5 '>
                    <img src={logo} alt="" className='mx-auto max-w-[300px] md:max-w-[250px] lg:max-w-[300px]' />

                    <div className="container mx-auto w-full h-[3px] bg-[#0fff94] rounded-xl" />

                    <div className='mx-auto flex flex-col gap-5 mb-10'>
                        <p className='md:text-sm lg:text-base'>
                            Os Studios BMouse são o nosso maior diferencial. Nosso espaço é equipado com tecnologia de ponta 
                            e equipamentos de última geração. São diversas câmeras de cinema e de ação, drones, fundos personalizados, 
                            iluminação profissional e equipamento de edição potente, entregando conteúdo de qualidade inigualável 
                            para os nossos clientes.
                        </p>
                        <p className='md:text-sm lg:text-base'>
                            Aqui, transformamos sonhos em realidade e ideias em projetos profissionais e exclusivos. Com uma equipe 
                            profissional de produtores, filmakers, editores, atores e narradores, criamos peças audiovisuais impactantes 
                            para revolucionarem a sua marca.
                        </p>
                        <p className="text-sm lg:text-base font-meutas-medium font-bold ">
                            Conte com a BMouse para transformar suas histórias em verdadeiras obras de arte!
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}