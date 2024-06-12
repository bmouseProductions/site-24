import endomarketing from '../../../../../../assets/images/Services/SubPages/Endomarketing/sectionTwo-endo.webp'

import corsiva from '../../../../../../assets/images/corsiva.png'

export default function SectionTwo(){
    return (
        <section className="  bg-blur-left !bg-bottom md:!bg-left">
            <div className='container px-5 lg:px-10 xl:px-20 mx-auto mt-20 flex flex-col-reverse lg:flex-row-reverse justify-center lg:gap-10'>
                <div className='w-full lg:w-2/3 flex justify-center items-center'>
                    <img className='max-h-[400px] lg:max-h-[600px] xl:max-h-[800px] ' src={endomarketing} alt="" />
                </div>
                <div className='w-full lg:w-2/3 mt-10 lg:pr-10 flex flex-col gap-5 '>
                    <div className=" md:ml-0 mb-5 py-2 px-3 max-w-[180px] lg:max-w-[180px] xl:max-w-[220px]  text-center uppercase rounded-3xl border-2 border-white">
                        <h3>o que fazemos</h3>
                    </div>

                    <div className='relative '>
                        <h1 className='font-tittle !leading-[50px] xl:!leading-[70px] '>
                            Dinâmico e Inclusivo
                        </h1>

                        <img 
                            src={corsiva} 
                            alt="" 
                            className='absolute top-8 xl:top-11 right-0 xl:right-5 w-[250px] xl:w-[300px]  '
                        />
                    </div>
                        
                    <div className="container mx-auto w-full h-[3px] bg-[#0fff94] rounded-xl" />

                    <div className=' mx-auto flex flex-col gap-5 mb-10'>
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
                            <li>Criação do modelo e das ferramentas de comunicação internas do grupo.</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}