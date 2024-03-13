import img1 from '../../../../../../assets/images/Services/SubPages/Audiovisual/img1.webp'
import img2 from '../../../../../../assets/images/Services/SubPages/Audiovisual/img2.webp'
import img3 from '../../../../../../assets/images/Services/SubPages/Audiovisual/img3.webp'

export default function SectionFour(){
    return (
        <section className=" bg-blur-left">
            <div className='container px-5 lg:px-10 xl:px-20 mx-auto'>
                <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
                    <h1 className="font-tittle !text-[90px] md:!text-[130px] ">
                        nossa capacidade produtiva
                    </h1>
                    <div className="xl:mb-10 flex flex-col justify-end gap-5 lg:gap-10">
                        <p>
                            non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim. Amet minim mollit non deserunt 
                            ullamco est sit aliquaAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet 
                            minim. Amet minim mollit non deserunt ullamco est sit aliquaAmet minim mollit non non deserunt ullamco est sit aliqua 
                            dolor do amet sint. Velit officia Amet minim. Amet minim mollit non deserunt ullamco est sit aliquaAmet minim mollit 
                            non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim. Amet minim mollit non deserunt 
                            ullamco est sit aliquaAmet minim mollit non non deserunt ullamco est sit aliqua dolor do amet sint. 
                        </p>

                        <p>
                            non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim. Amet minim mollit non deserunt 
                            ullamco est sit aliquaAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet 
                            minim. Amet minim mollit non deserunt ullamco est sit aliquaAmet minim mollit non non deserunt ullamco est sit v
                        </p>
                    </div>
                </div>
                <div className="mt-10 mb-32 flex flex-col md:flex-row justify-center gap-5 md:gap-0">
                    <img src={img1} alt="" className='md:w-1/2  !max-h-[550px]' />
                    <div className="flex flex-col gap-5 md:gap-0">
                        <img src={img2} alt="" className='md:w-full ' />
                        <img src={img3} alt="" className='md:w-full ' />
                    </div>
                </div>
            </div>
        </section>
    )
}