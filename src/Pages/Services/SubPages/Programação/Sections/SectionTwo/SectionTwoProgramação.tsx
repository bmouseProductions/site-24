import programaçao from '../../../../../../assets/images/Services/SubPages/Programação/programaçao.webp'
import border from '../../../../../../assets/images/border.svg'

export default function SectionTwo(){
    return (
        <section className="bg-blur-left !bg-bottom md:!bg-left">
            <div className=' container mx-auto mt-20 flex flex-col-reverse md:flex-row justify-center lg:gap-10'>
                <div className='w-full flex justify-center'>
                    <img className='max-h-[400px] lg:max-h-[600px] xl:max-h-[800px] ' src={programaçao} alt="" />
                </div>
                
                <div className='mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 mb-10'>
                    <div className="ml-5 md:ml-0 mb-5 py-2 px-3 max-w-[180px] lg:max-w-[180px] xl:max-w-[220px]  text-center uppercase rounded-3xl border-2 border-white">
                        <h3>o que fazemos</h3>
                    </div>
                    
                    <h1 className='font-tittle lg:!text-[110px] xl:!text-[130px] 2xl:!text-[170px] text-center lg:text-start'>
                        Site e muito mais
                    </h1>

                    <img src={border} className=' ' alt="" />
                    
                    <div className='w-[90%] mx-auto flex flex-col gap-5'>
                        <ul className='list-disc pl-5'>
                            <li>Sites Institucionais;</li>
                            <li>Landing Pages;</li>
                            <li>E-commerce;</li>
                            <li>Blog;</li>
                            <li>SEO (Search Engine Optimization ou Otimização para Mecanismos de Busca).</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}