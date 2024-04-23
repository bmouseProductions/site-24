import foguete from '../../../../assets/images/foguete.png'

export default function SectionSix(){
    return (
        <section className='my-20  md:mb-[200px] lg:mb-[250px] relative container px-5 lg:px-10 xl:px-20 mx-auto'>
            <div className=" max-w-[1238px] w-full mx-auto h-[350px] lg:h-[400px] flex rounded-[45px] bg-[#6000f8] ">
                <div className='px-5 flex flex-col justify-center md:pl-5 lg:pl-20'>
                    <h1 className='font-deligual font-semibold text-2xl md:text-3xl'>
                        Quer fazer seu projeto
                    </h1>
                    <h1 className="font-tittle flex items-center !text-[170px] md:!text-[200px] xl:!text-[250px] ">
                        decolar?
                    </h1>
                    <div className='flex justify-center md:justify-end'>
                        <a 
                            href='/servicos'
                        className='max-w-[190px] w-full text-xl md:text-2xl text-center text-black px-2 py-3 bg-white rounded-3xl'
                        >
                            Saiba mais
                        </a>
                    </div>
                    
                </div>
                <img 
                    src={foguete} 
                    alt="" 
                    className='iluminado hidden md:block md:w-[350px] lg:w-[450px] absolute md:left-[50%] lg:left-[48%] xl:left-[50%] top-0 hover:scale-125 hover:translate-y-[-100px] '
                />
            </div>
        </section>
    )
}