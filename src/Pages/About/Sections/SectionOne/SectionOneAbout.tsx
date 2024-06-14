import tom from "../../../../assets/images/About/tom.webp"
import Header from "../../../../components/Header/Header"
import SliderColaborador from "../../../../components/sliders/SliderColaboradores"
import title from '../../../../assets/images/About/quemSomos-title.webp'

export function SectionOne(){
    return(
        <div className="md:pt-10 mx-auto bg-sobre ">
            <Header />
            
            <section className="container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col lg:flex-row lg:gap-10 lg:justify-around">
                <div className="mt-10 flex flex-col gap-5 xl:gap-7 lg:max-w-[450px] xl:max-w-[590px] ">
                    <img src={title} alt="titulo quem somos nós" />
                    <p>
                        A BMouse Productions é uma agência de marketing e produção audiovisual que se tornou referência no 
                        Brasil e no mundo. Nascida nos Estados Unidos, a BMouse migrou para o Brasil há quatro anos e, desde 
                        então, vem crescendo e se expandindo, atuando em quase todos os estados do país. Nossa trajetória de 
                        sucesso é marcada por bilhões de acessos em conteúdos produzidos, destacando-nos na criação de campanhas 
                        estratégicas e comerciais.
                    </p>

                    <p className="rounded-xl text-white">
                        <strong className="font-bold text-xl">Missão:</strong> <br />
                        Nossa missão é transformar a vida dos profissionais de saúde através do nosso know-how e expertise em 
                        marketing e construção de carreira. Oferecemos caminhos comerciais que permitem a esses profissionais 
                        planejarem suas carreiras de maneira eficaz, ajudando-os a encontrar um ponto de equilíbrio em suas 
                        vidas mais rapidamente.
                    </p>

                    <p className="rounded-xl text-white">
                        <strong className="font-bold text-xl">Visão:</strong> <br />
                        Na BMouse Productions, estamos comprometidos em oferecer o melhor para nossos clientes, seja através de 
                        campanhas criativas e eficazes, produções audiovisuais de alta qualidade ou estratégias de marketing 
                        inovadoras. Estamos sempre buscando superar expectativas e elevar o padrão da indústria em tudo o que 
                        fazemos.
                    </p>
                </div>

                <div className="flex justify-center items-center lg:justify-end mt-10 md:mt-0">
                    <img src={tom} alt="" className="max-h-[550px] lg:max-h-[770px] " />
                </div>
            </section>

            <div className="container mt-20 px-5 lg:px-10 xl:px-20 mx-auto">
                <SliderColaborador />
            </div>
            
        </div>
    )
}