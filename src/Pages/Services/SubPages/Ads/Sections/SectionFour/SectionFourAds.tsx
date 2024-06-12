import img1 from '../../../../../../assets/images/Services/SubPages/Ads/img1.webp'
import img2 from '../../../../../../assets/images/Services/SubPages/Ads/img2.webp'
import img3 from '../../../../../../assets/images/Services/SubPages/Ads/img3.webp'

import corsiva from '../../../../../../assets/images/corsiva.png'

export default function SectionFour(){
    return (
        <section className=" bg-blur-left mt-20">
            <div className='container px-5 lg:px-10 xl:px-20 mx-auto'>
                <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
                    <div className='relative '>
                        <h1 className="font-tittle xl:!text-[60px] !leading-[50px] xl:!leading-[80px] 2xl:!leading-[70px] ">
                            nossa capacidade produtiva
                        </h1>
                        <img 
                            src={corsiva} 
                            alt="" 
                            className='absolute bottom-10 md:bottom-7 xl:bottom-[108px] 2xl:bottom-[75px]  right-0 md:right-5 w-[250px] xl:w-[350px]  '
                        />
                    </div>
                    
                    <div className="xl:mb-10 flex flex-col justify-end gap-5">
                        <p>
                        A BMouse trabalha a todo vapor para entregar aos nossos clientes conteúdos de alta qualidade no menor prazo possível. Somos capazes de produzir obras que impactam de acordo com a sua demanda, realizadas por uma equipe de especialistas e um arsenal de cinema.
                        </p>

                        <p>
                            Nossa capacidade produtiva vai do alto volume de materiais curtos à elaboração de materiais 
                            extensos e detalhistas. Somos uma agência criativa preparada para transformar as suas ideias 
                            em conteúdos inesquecíveis.
                        </p>
                    </div>
                </div>
                <div className="mt-10 mb-32 flex flex-col md:flex-row justify-center items-center gap-5 ">
                    <img src={img1} alt="" className='md:w-1/2 rounded-[30px]    ' />
                    
                    <div className="w-fit flex flex-col gap-5 ">
                        <img src={img2} alt="" className='w-fit rounded-[30px]' />
                        <img src={img3} alt="" className='w-fit rounded-[30px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}