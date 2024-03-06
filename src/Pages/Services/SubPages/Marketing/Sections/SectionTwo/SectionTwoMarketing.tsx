import camera from '../../../../../../assets/images/About/camera.webp'
import logo from '../../../../../../assets/images/logos/logo-colorida.svg'
import border from '../../../../../../assets/images/border.svg'

export default function SectionTwo(){
    return (
        <section className=" container mx-auto bg-blur-left !bg-bottom md:!bg-left">
            <div className='mt-20 flex flex-col-reverse md:flex-row justify-center lg:gap-10'>
                <img className='max-h-[400px] lg:max-h-[600px] xl:max-h-[800px] ' src={camera} alt="" />
                <div className='mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 mb-10'>
                    <img src={logo} alt="" className='mx-auto max-w-[300px] md:max-w-[250px] lg:max-w-[300px]' />
                    <img src={border} className=' ' alt="" />
                    <div className='w-[90%] mx-auto flex flex-col gap-5'>
                        <ul className='list-disc pl-5'>
                            Veja as etapas:
                            <li>Social Media (manutenção, postagens e responsividade);</li>
                            <li>Remarketing;</li>
                            <li>Impulsionamento de conteúdos;</li>
                            <li>Criação de landing pages;</li>
                            <li>Campanhas performadas;</li>
                            <li>Criação de conteúdos de sucesso;</li>
                            <li>Monitoramento de críticas;</li>
                            <li>Interatividade com seguidores;</li>
                            <li>Marketing;</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}