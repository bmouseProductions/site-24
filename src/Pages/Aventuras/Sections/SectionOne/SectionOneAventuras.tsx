import Header from "../../../../components/Header/Header"
import banner from "../../../../assets/images/Aventuras/bannerAventuras.svg"

export function SectionOne(){
    return(
        <div className="md:pt-10 mx-auto pb-10">
            <Header />
            <section className="container px-5 lg:px-10 xl:px-20 mx-auto">
                <img 
                    src={banner} 
                    alt="banner restrospectiva 2023 Bmouse Productions"
                    className="w-full" 
                />
            </section>
            
        </div>
    )
}