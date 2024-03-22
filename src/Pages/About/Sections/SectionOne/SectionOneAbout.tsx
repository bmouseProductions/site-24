import tom from "../../../../assets/images/About/tom.webp"
import Header from "../../../../components/Header/Header"
import SliderColaborador from "../../../../components/sliders/SliderColaboradores"

export function SectionOne(){
    return(
        <section className="md:pt-10 mx-auto bg-sobre ">
            <Header />
            <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col lg:flex-row lg:justify-around">
                <div className="mt-10 flex flex-col gap-5 xl:gap-7 lg:max-w-[450px] xl:max-w-[590px] ">
                    <h1 className="font-tittle xl:!text-[200px] ">
                        Quem somos?
                    </h1>
                    <p>
                        Ao longo do tempo, a BMouse consolidou-se como uma força inovadora, indo além dos limites convencionais do marketing. 
                        Sob a direção de Tom Gonçalves e Roberta Almeida, a BMouse é um projeto que se transformou em realidade. Desde então, temos transformado a realidade de dezenas de clientes que confiaram suas ideias e negócios em nossas mãos.
                    </p>

                    <p>
                        A BMouse vai além de ser apenas uma agência de marketing, nós somos verdadeiros experts na criação de campanhas que não apenas buscam resultados, mas também se destacam como obras estratégicas. Com uma equipe composta por um time de especialistas, nós somos profissionais da arte de criar!
                    </p>
                </div>

                <div className="flex justify-center lg:justify-end mt-10 md:mt-0">
                    <img src={tom} alt="" className="max-h-[550px] lg:max-h-[850px] " />
                </div>
            </div>

            <div className="container mt-20 px-5 lg:px-10 xl:px-20 mx-auto">
                <SliderColaborador />
            </div>
            
        </section>
    )
}