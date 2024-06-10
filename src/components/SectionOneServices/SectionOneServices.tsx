import Header from "../../components/Header/Header";

interface PropsSectionOneServices {
    banner:string;
    title: string;
    text: string;
}

export default function SectionOneServices( {banner, title, text}:PropsSectionOneServices ){
    return (
        <section className="pt-10 bg-[#052b6f] ">
            <Header />
            <div className="pt-10 flex flex-col-reverse md:flex-row justify-center gap-5 lg:gap-10 bg-services rounded-t-[20px] ">
                <div>
                    <img src={banner} alt="" className="w-full " />
                </div>
                <div className="px-5 md:px-0 lg:px-[50px] xl:pl-[100px] 2xl:pl-[200px] flex flex-col justify-center md:max-w-[300px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] ">
                    <img 
                        src={title} 
                        alt="" 

                    />
                    <p className="mt-7 text-[#00295b]">
                        {text}
                    </p>
                </div>
            </div>
        </section>
    )
}