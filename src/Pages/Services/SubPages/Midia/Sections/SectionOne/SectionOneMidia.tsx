import Header from "../../../../../../components/Header/Header";
import cameraUrsa from "../../../../../../assets/images/Services/cameraUrsa.webp"


export default function SectionOne(){
    return (
        <section className="md:pt-10  bg-gradient-to-b from-[#220860] from-20% via-[#3564e0] to-[#1ac8f8] rounded-b-[40px] ">
            <Header />
            <div className=" flex flex-col-reverse md:flex-row justify-center gap-5 lg:gap-10">
                <div>
                    <img src={cameraUrsa} alt="" className="w-full " />
                </div>
                <div className="px-5 flex flex-col md:max-w-[300px] lg:max-w-[600px] ">
                    <h1 className="font-tittle !text-[130px] md:!text-[120px] lg:!text-[200px]">
                        Midia
                    </h1>
                    <p className="md:pr-5">
                        non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim. Amet minim mollit non deserunt ullamco est sit aliquaAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim. Amet minim mollit non deserunt ullamco est sit aliquaAmet minim mollit non 
                    </p>
                </div>
            </div>
        </section>
    )
}