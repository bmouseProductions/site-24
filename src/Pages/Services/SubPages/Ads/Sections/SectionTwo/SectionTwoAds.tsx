import banner from '../../../../../../assets/images/Services/SubPages/Ads/ads.webp'
import border from '../../../../../../assets/images/border.svg'

export default function SectionTwo(){
    return (
        <section className="  bg-blur-left !bg-bottom md:!bg-left">
            <div className='container mx-auto mt-20 flex flex-col-reverse md:flex-row justify-center xl:gap-10'>
                <div className='w-full flex justify-center'>
                    <img className='max-h-[350px] md:max-h-[600px] xl:max-h-[800px] ' src={banner} alt="" />
                </div>
                
                <div className='w-full mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 '>
                    <div className="ml-5 md:ml-0 mb-5 py-2 px-3 max-w-[180px] lg:max-w-[180px] xl:max-w-[220px]  text-center uppercase rounded-3xl border-2 border-white">
                        <h3>o que fazemos</h3>
                    </div>
                    
                    <h1 className='font-tittle lg:!text-[90px] xl:!text-[100px] 2xl:!text-[130px] text-center lg:text-start'>
                        planejamento estrátegico
                    </h1>

                    <img src={border} className=' ' alt="" />

                    <div className='w-[90%] mx-auto flex flex-col gap-5 mb-10'>
                        <p className='md:text-sm lg:text-base'>
                            Criamos campanhas comerciais inteligentes, aproveitando todas as ferramentas que as plataformas oferecem. Todas as campanhas são acompanhadas e aprimoradas diariamente, de modo a aproveitar melhor cada centavo investido pelos nossos clientes, garantindo o maior retorno do investimento.
                        </p>
                        <p className='md:text-sm lg:text-base'>
                            Geramos relatórios mensais de todas as plataformas para que você possa acompanhar como o seu dinheiro está sendo investido e todos os resultados obtidos pelas campanhas de anúncios.
                        </p>
                        <ul className='list-disc pl-5'>
                            <li>Facebook ADS;</li>
                            <li>Facebook ADS;</li>
                            <li>Facebook ADS;</li>
                            <li>Facebook ADS;</li>
                            <li>Kwai ADS;</li>
                            <li>Captura de Leads / E-mail Marketing;</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}