import title from '../../../assets/images/Services/nossos-serviços.webp'
import Header from '../../../components/Header/Header'

export default function SectionOne(){
    return (
        <> 
            
            <div className="md:pt-10 pb-16 md:pb-20 lg:pb-[110px]  bg-blur-top ">
                <Header />
                <section className='mt-10  container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col items-center gap-[44px] '>
                    <img className="md:max-w-[80%]  "  src={title} alt="" />

                    <p className='max-w-[995px] md:w-[90%] '>
                        A BMouse é especialista em Marketing Médico, criando conteúdos comerciais e informativos, além de um 
                        planejamento de carreira eficiente para profissionais da saúde. Centralizamos todos os serviços essenciais 
                        para entregar o seu sucesso comercial. Com uma equipe de profissionais para cada área, nosso time é completo. 
                        Estamos preparados para atender à sua demanda e elevar sua maneira de fazer marketing.
                    </p>
                </section>
            </div>
        </>
    )
}