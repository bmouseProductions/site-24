import foguete from '../../../../assets/images/foguete.png'

export default function SectionSix(){
    return (
        <section className='relative container lg:px-10 xl:px-20 mx-auto'>
            <div className=" max-w-[1238px] h-[400px] flex rounded-[45px] bg-[#6000f8] ">
                <div className='flex flex-col justify-center  pl-24'>
                    <h1 className='font-deligual font-semibold  !text-[24px]'>
                        Quer fazer seu projeto
                    </h1>
                    <h1 className="font-tittle flex items-center !text-[200px] xl:!text-[250px] ">
                        decolar?
                    </h1>
                </div>
                <img src={foguete} alt="" className='w-[500px] xl:w-[600px] absolute lg:left-[45%] top-0' />
            </div>
        </section>
    )
}