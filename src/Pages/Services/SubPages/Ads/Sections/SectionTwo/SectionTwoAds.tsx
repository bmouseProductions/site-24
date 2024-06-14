import banner from '../../../../../../assets/images/Services/SubPages/Ads/sectionTwo-ads.webp' 

import corsiva from '../../../../../../assets/images/corsiva.png'

export default function SectionTwo(){
    return (
        <section className="  bg-blur-left !bg-bottom md:!bg-left">
            <div className='container px-5 lg:px-10 xl:px-20 mx-auto mt-20 flex flex-col-reverse md:flex-row-reverse justify-center xl:gap-10'>
                <div className='w-full flex justify-center'>
                    <img className='max-h-[350px] md:max-h-[600px] xl:max-h-[800px] ' src={banner} alt="" />
                </div>
                
                <div className='w-full mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 '>
                    <div className="mb-5 py-2 px-3 max-w-[180px] lg:max-w-[180px] xl:max-w-[220px]  text-center uppercase rounded-3xl border-2 border-white">
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

                    <div className='w-[90%] mx-auto flex flex-col gap-5 mb-10'>
                        <p className='md:text-sm lg:text-base'>
                            Criamos campanhas comerciais inteligentes, aproveitando todas as ferramentas que as plataformas oferecem. Todas as campanhas são acompanhadas e aprimoradas diariamente, de modo a aproveitar melhor cada centavo investido pelos nossos clientes, garantindo o maior retorno do investimento.
                        </p>
                        <p className='md:text-sm lg:text-base'>
                            Geramos relatórios mensais de todas as plataformas para que você possa acompanhar como o seu dinheiro está sendo investido e todos os resultados obtidos pelas campanhas de anúncios.
                        </p>
                        <ul className='list-disc pl-5'>
                            <li>Facebook ADS;</li>
                            <li>Google ADS;</li>
                            <li>Linkedin ADS;</li>
                            <li>Tiktok ADS;</li>
                            <li>Kwai ADS;</li>
                            <li>Captura de Leads / E-mail Marketing.</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}