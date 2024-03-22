import midia from '../../../../../../assets/images/Services/SubPages/Midia/midia.webp'
import border from '../../../../../../assets/images/border.svg'

export default function SectionTwo(){
    return (
        <section className="  bg-blur-left !bg-bottom md:!bg-left">
            <div className='container mx-auto mt-20 flex flex-col-reverse md:flex-row justify-center lg:gap-10'>
                <div className='md:ml-[10%] lg:ml-0 w-full flex justify-end'>
                    <img className='max-h-[400px] lg:max-h-[600px]  ' src={midia} alt="" />
                </div>
                
                <div className='mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 '>
                    <div className="ml-5 md:ml-0 mb-5 py-2 px-3 max-w-[180px] lg:max-w-[180px] xl:max-w-[220px]  text-center uppercase rounded-3xl border-2 border-white">
                        <h3>o que fazemos</h3>
                    </div>
                    
                    <h1 className='font-tittle !text-[120px] lg:!text-[100px] xl:!text-[110px]  text-center lg:text-start'>
                        Linguagem própria
                    </h1>

                    <img src={border} className=' ' alt="" />

                    <div className='w-[90%] mx-auto flex flex-col gap-5'>
                        <p className='md:text-sm lg:text-base'>
                            Apesar das redes sociais serem o principal foco de muitas empresas, não se deve menosprezar o poder das grandes mídias, que contam com um público imenso. Por isso, produzir materiais para a televisão, rádios, jornais e revistas é de larga relevância, e a BMouse está ao seu serviço para produzir conteúdo de qualidade.
                            Dentre os produtos desenvolvidos pela agência para a imprensa estão:
                        </p>

                        <ul className='list-disc pl-5'>
                            <li>Press release;</li>
                            <li>Spots para rádio;</li>
                            <li>Anúncios diversos.para mídia impressa ou digital.</li>
                        </ul>

                        <p className='md:text-sm lg:text-base'>
                            Seja em vídeo, imagem ou texto, prezamos pela qualidade e nos atentamos à linguagem de cada canal de comunicação, entregando o que você pediu.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}