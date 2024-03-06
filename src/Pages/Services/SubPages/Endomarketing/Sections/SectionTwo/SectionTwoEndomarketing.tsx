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
                            Para isso, o nosso planejamento de marketing interno é formulado de acordo com as atuais dificuldades da empresa, alinhado com os valores e visão daquele empreendimento para, assim, conseguirmos encontrar a melhor maneira de ouvir e motivar os colaboradores de modo dinâmico e inclusivo.
                        </p>

                        <ul className='list-disc pl-5'>
                            Nosso endomarketing atual conta com:
                            <li>Dicas de produtividade, saúde e boas-práticas via WhatsApp;</li>
                            <li>Calendário anual de ações em datas comemorativas;</li>
                            <li>Campanhas mensais abordando temas importantes para a empresa e para a sociedade;</li>
                            <li>Criação de normas e manuais de treinamento para o time;</li>
                            <li>Valorização de grandes feitos dos colaboradores;</li>
                            <li>Engajamento dos colaboradores nas redes sociais do grupo;</li>
                            <li>Criação do modelo e das ferramentas de comunicação internas do grupo;</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}