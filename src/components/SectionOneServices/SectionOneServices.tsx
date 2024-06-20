import Header from "../../components/Header/Header";

interface PropsSectionOneServices {
    banner:string;
    title: string;
    text: string;
    mkt?: boolean;
    endo?: boolean;
}

export default function SectionOneServices( {banner, title, text, mkt, endo }:PropsSectionOneServices ){

    console.log(banner)

    return (
        <section className="pt-10 ">
            <Header />
            <div className="pt-10 xl:min-h-[675px] flex flex-col-reverse md:flex-row justify-center gap-5 lg:gap-10 bg-services rounded-t-[20px] ">
                <div className={ mkt ? 'pb-10 mb-10 md:pb-0 md:mb-0' : ''}>
                    <img 
                        src={banner} 
                        alt="" 
                        className= {`'w-full ' + ${ endo ? 'max-w-[70%] xl:max-w-[100%] mx-auto' : 'max-w-[100%] '} `}
                    />
                </div>
                <div className="px-5 md:px-0 md:pr-5 lg:px-[50px] xl:pl-[100px] 2xl:pl-[200px] flex flex-col justify-center md:max-w-[300px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] ">
                    <img 
                        src={title} 
                        alt="" 

                    />
                    <p className={`mt-7  text-[#00295b] + ${ mkt ? 'mb-[50px] md:mb-0' : 'mb-10 '} `}>
                        {text}
                    </p>
                </div>
            </div>
        </section>
    )
}
//className=""