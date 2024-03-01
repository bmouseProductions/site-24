import title from '../../../assets/images/Services/title.svg'
import Header from '../../../components/Header/Header'

export default function SectionOne(){
    return (
        <> 
            
            <section className="md:pt-10 pb-16 md:pb-20 lg:pb-[110px]  bg-blur-top ">
                <Header />
                <div className='mt-10  container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col items-center gap-[44px] '>
                    <img className="md:max-w-[80%] lg:max-w-none "  src={title} alt="" />

                    <p className='max-w-[995px] md:w-[90%] '>
                        A BMouse é All In One porque ela centraliza todos os serviços essenciais para o seu sucesso comercial! 
                        Com uma equipe de profissionais para cada área, nosso time é completo. Estamos preparados para atender à 
                        sua demanda e elevar o seu negócio ou projeto a novos níveis.
                    </p>
                </div>
            </section>
        </>
    )
}