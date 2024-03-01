import joyce from "../../../../assets/images/About/joyce-about.webp"

export default function SectionFour(){
    return (
        <section className="pt-16 pb-28 bg-section-two  ">
            <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col md:flex-row md:justify-around">
                <div className="mt-10 flex flex-col gap-5 xl:gap-7 md:max-w-[400px] lg:max-w-[450px] xl:max-w-[590px] ">
                    <h1 className="font-tittle xl:!text-[200px] ">
                        Como nós trabalhamos?
                    </h1>
                    <p>
                        <strong className="font-meutas-medium font-bold">A BMouse </strong> 
                        trabalha com um sistema 100% personalizado de acordo com as suas demandas. Por meio do nosso 
                        fluxo criativo, garantimos que você tenha acesso prévio aos conteúdos planejados mensalmente e 
                        campanhas anuais.
                    </p>
                    <p>
                        Aqui, você tem contato direto com o processo criativo e personaliza as suas demandas de acordo com 
                        as suas necessidades. Seja para conquistar as mídias digitais ou para marketing out of home, estamos 
                        dispostos a participar da sua jornada de expansão.
                    </p>
                    <p className="font-meutas-medium font-bold">
                        Embarque conosco nessa conquista do mercado!
                    </p>
                </div>

                <div className="flex justify-center lg:justify-end items-center mt-10 md:mt-0">
                    <img src={joyce} alt="" className="md:max-h-[450px] lg:max-h-[850px] " />
                </div>
            </div>
            
        </section>
    )
}