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