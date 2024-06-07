import capacete from '../../assets/images/capacete.webp'

export default function Decolar(){
    return (
        <section className='my-20 md:mb-[200px] lg:mb-[250px] relative container px-5 lg:px-10 xl:px-20 mx-auto'>
            <div className=" max-w-[1238px] w-full mx-auto md:h-[250px] lg:h-[350px] flex justify-end rounded-[15px] bg-[#004ebf] ">
                <div className='xl:pr-[100px] md:pl-[250px] lg:pl-[350px] w-full px-3 py-5 flex flex-col justify-center '>
                    <h1 className='flex flex-col md:block font-franieLight font-semibold text-3xl lg:text-5xl xl:leading-[60px] text-wrap uppercase'>
                        Quer se conectar com o verdadeiro <br className='hidden md:block lg:hidden' />
                        <strong className='w-fit mr-2 font-franiExtraBold text-4xl md:text-3xl lg:text-5xl'>marketing</strong> <br className='hidden lg:block xl:hidden'/>
                        <strong className='mt-2 w-fit font-franiExtraBold text-4xl md:text-3xl lg:text-5xl'>médico?</strong>
                    </h1>
                    <div className=' flex justify-center md:justify-end'>
                        <a 
                            href='/servicos'
                            className='max-w-[300px] px-5 py-3 w-full font-franieSemiBold text-xl md:text-2xl text-center text-black uppercase bg-[#0fff94] rounded-3xl'
                        >
                            Saiba mais aqui
                        </a>
                    </div>
                    
                </div>
                <img 
                    src={capacete} 
                    alt="" 
                    className='hidden md:block absolute md:left-[0px] xl:left-[50px] 2xl:left-[100px] md:w-[250px] lg:w-[360px] '
                />
            </div>
        </section>
    )
}
/*
        <section className='my-20 md:mb-[200px] lg:mb-[250px] relative container px-5 lg:px-10 xl:px-20 mx-auto'>
            <div className=" max-w-[1238px] w-full mx-auto h-[350px] lg:h-[400px] flex rounded-[45px] bg-[#6000f8] ">
                <div className='px-5 flex flex-col justify-center md:pl-5 lg:pl-20'>
                    <h1 className='font-deligual font-semibold text-2xl md:text-3xl'>
                        Quer fazer seu projeto
                    </h1>
                    <h1 className="font-tittle flex items-center !text-[40px] md:!text-[60px] xl:!text-[80px] ">
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
                    src={capacete} 
                    alt="" 
                    className='iluminado hidden md:block md:w-[350px] lg:w-[450px] absolute md:left-[50%] lg:left-[48%] xl:left-[50%] top-0 hover:scale-125 hover:translate-y-[-100px] transition-all '
                />
            </div>
        </section>
*/