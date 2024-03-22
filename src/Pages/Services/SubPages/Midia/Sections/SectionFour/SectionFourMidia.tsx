import img1 from '../../../../../../assets/images/Services/SubPages/Midia/img1.webp'
import img2 from '../../../../../../assets/images/Services/SubPages/Midia/img2.webp'
import img3 from '../../../../../../assets/images/Services/SubPages/Midia/img3.webp'

export default function SectionFour(){
    return (
        <section className="bg-blur-left mt-20">
            <div className='container px-5 lg:px-10 xl:px-20 mx-auto'>
                <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
                    <h1 className="font-tittle !text-[90px] md:!text-[130px] ">
                        nossa capacidade produtiva
                    </h1>
                    <div className="xl:mb-10 flex flex-col justify-end gap-5 lg:gap-10">
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
                <div className="mt-10 mb-32 flex flex-col md:flex-row justify-center gap-5 md:gap-0">
                    <img src={img1} alt="" className='md:w-1/2 rounded-[30px] !max-h-[550px]' />
                    <div className="flex flex-col gap-5 md:gap-0">
                        <img src={img2} alt="" className='md:w-full rounded-[30px]' />
                        <img src={img3} alt="" className='md:w-full rounded-[30px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}