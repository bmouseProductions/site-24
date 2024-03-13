import marketing from '../../../../../../assets/images/Services/SubPages/Marketing/marketing.webp'
import border from '../../../../../../assets/images/border.svg'

export default function SectionTwo(){
    return (
        <section className=" bg-blur-left !bg-bottom md:!bg-left">
            <div className='container mx-auto mt-20 flex flex-col-reverse md:flex-row justify-center lg:gap-10'>
                <div className='w-full flex justify-center'>
                    <img className='max-h-[400px] lg:max-h-[600px] xl:max-h-[800px] ' src={marketing} alt="" />
                </div>
                
                <div className='mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 mb-10'>
                    <div className="ml-5 md:ml-0 mb-5 py-2 px-3 max-w-[180px] lg:max-w-[180px] xl:max-w-[220px]  text-center uppercase rounded-3xl border-2 border-white">
                        <h3>o que fazemos</h3>
                    </div>
                    
                    <h1 className='font-tittle !text-[120px] lg:!text-[100px] xl:!text-[110px]  text-center lg:text-start'>
                        Planejamento estraégico
                    </h1>

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