import marketing from '../../../../../../assets/images/Services/SubPages/Marketing/sectionTwo-mkt.webp'

import corsiva from '../../../../../../assets/images/corsiva.png'

export default function SectionTwo(){
    return (
        <section className=" bg-blur-left !bg-bottom md:!bg-left">
            <div className='container px-5 lg:px-10 xl:px-20 mx-auto mt-20 flex flex-col-reverse md:flex-row-reverse justify-center gap-5 lg:gap-10'>
                <div className='w-full flex justify-center items-center'>
                    <img className='max-h-[400px] lg:max-h-[600px] xl:max-h-[800px] ' src={marketing} alt="" />
                </div>
                
                <div className='w-full mt-10 lg:pr-10 xl:pr-20 flex flex-col gap-5 mb-10'>
                    <div className=" md:ml-0 mb-5 py-2 px-3 max-w-[180px] lg:max-w-[180px] xl:max-w-[220px]  text-center uppercase rounded-3xl border-2 border-white">
                        <h3>o que fazemos</h3>
                    </div>
                    
                    <div className='relative'>
                        <h1 className='font-tittle !text-[33px] md:!text-[38px] lg:!text-[45px] xl:!text-[60px] !leading-[50px] xl:!leading-[70px] '>
                            Planejamento estraégico
                        </h1>
                        <img 
                            src={corsiva} 
                            alt="" 
                            className='absolute top-8 xl:top-11 right-0 xl:right-5 w-[250px] xl:w-[300px]  '
                        />
                    </div>
                    

                    <div className="container mx-auto w-full h-[3px] bg-[#0fff94] rounded-xl" />

                    <div className='w-[90%] mx-auto flex flex-col gap-5'>
                        <ul className='list-disc '>
                            Veja as etapas:
                            <li>Social Media (manutenção, postagens e responsividade);</li>
                            <li>Remarketing;</li>
                            <li>Impulsionamento de conteúdos;</li>
                            <li>Criação de landing pages;</li>
                            <li>Campanhas performadas;</li>
                            <li>Criação de conteúdos de sucesso;</li>
                            <li>Monitoramento de críticas;</li>
                            <li>Interatividade com seguidores;</li>
                            <li>Marketing.</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}