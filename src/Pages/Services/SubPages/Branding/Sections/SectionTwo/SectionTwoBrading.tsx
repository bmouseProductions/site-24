import camera from '../../../../../../assets/images/Services/SubPages/Branding/branding.webp'
import logo from '../../../../../../assets/images/logos/logo-colorida.svg'
import border from '../../../../../../assets/images/border.svg'

export default function SectionTwo(){
    return (
        <section className="  bg-blur-left !bg-bottom md:!bg-left">
            <div className='container mx-auto mt-20 flex flex-col-reverse md:flex-row justify-center lg:gap-10'>
                <div className='w-full h-full flex justify-center md:items-center'>
                    <img className=' max-h-[400px] lg:max-h-[600px] xl:max-h-[800px] ' src={camera} alt="" />
                </div>
                
                <div className='w-full mt-10 md:pr-5 lg:pr-10 xl:pr-20 flex flex-col gap-5 mb-10'>
                    <img src={logo} alt="" className='mx-auto max-w-[300px] md:max-w-[250px] lg:max-w-[300px]' />
                    <img src={border} className=' ' alt="" />
                    <div className='w-[90%] mx-auto flex flex-col gap-5'>
                        <ul className='list-disc pl-5'>
                            <li>Planejamento anual de campanha;</li>
                            <li>Calendário de postagens;</li>
                            <li>Criação de endomarketing mensal;</li>
                            <li>Criação das campanhas de ads (impulsionamento pago nas redes sociais);</li>
                            <li>Criação de estratégia de mídia paga (Jornais, TV, Rádios, Blogs);</li>
                            <li>Escolha de influenciador digital;</li>
                            <li>Definição de público-alvo;</li>
                            <li>Valuation de Marca;</li>
                            <li>Relatório de desenvolvimento de campanha mensal;</li>
                            <li>Estratégias voltadas para segurança do trabalho e LGPD;</li>
                            <li>Calendário de marketing de conteúdo;</li>
                        </ul>
                        <p>
                        Não é porque existe um imenso avanço no marketing digital que as estratégias offline ficaram restritivas ou perderam sua influência. Trabalhar em 360º graus é a garantia que estaremos utilizando todos os recursos disponíveis em prol da concretização do nosso projeto.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}