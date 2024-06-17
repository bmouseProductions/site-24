import corsiva from '../../../../assets/images/corsiva.png'

export default function SectionTwo(){
    return (
        <section className="container px-5 lg:px-10 xl:px-20 py-10 mx-auto">
            <div className="px-5 py-1 pt-2 mb-3 w-fit flex items-center justify-center  border-2 rounded-[30px] border-[#0fff94]">
              <p className="font-franieRegular uppercase text-[12px] md:text-xl text-center text-[#0fff94] ">
                sobre nós
              </p>
            </div>

            <div>
                <div className='relative lg:mt-10'>
                    <h1 className='font-franiExtraBold uppercase
                        text-[32px] leading-[50px]
                        md:text-[70px] md:leading-[90px]
                        lg:text-[90px] lg:leading-[120px]
                        xl:text-[100px] 
                        2xl:text-[120px] '
                    >
                        nossas outras aventuras
                    </h1>
                    <img 
                        src={corsiva} 
                        alt="" 
                        className='absolute 
                        top-8 right-0
                        md:top-16 
                        lg:top-24 lg:w-[400px]
                        xl:right-5 
                        w-[250px] '
                    />
                </div>

                <div className='mt-5 flex flex-col gap-5'>
                    <p>
                        Ao longo dos últimos 8 anos, a BMouse Productions se dedicou a criar projetos e campanhas comerciais 
                        impactantes para uma ampla variedade de setores. Com mais de 50 marcas atendidas em quase todos os 
                        estados do Brasil, trabalhamos com segmentos como agronegócio, Direito, construção civil, indústrias 
                        alimentícias, mercado pet, mercado financeiro, comércio, varejo, e-commerce, entre outros.
                    </p>

                    <p>
                        Confira alguns dos nossos projetos e descubra o impacto que causamos!
                    </p>
                </div>
            </div>
        </section>
    )
}