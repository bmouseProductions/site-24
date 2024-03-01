import SectionOne from "./Sections/SectionOneServices";
import SectionTwo from "./Sections/SectionTwoServices";


export default function Services(){
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <section className="flex flex-col items-center pb-12 mt-10 w-full bg-zinc-300 max-w-[811px] rounded-[30px] max-md:mt-10 max-md:max-w-full">
                <header className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-12 w-full min-h-[181px] max-md:px-5 max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d35eb769182caa84c563a88b99af88368469c49e0485473fb8bb1c3678d24fe?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&" className="object-cover absolute inset-0 size-full" alt="" />
                </header>
                <input placeholder="Seu melhor e-mail" />
                <input placeholder="Telefone" />
                <div className="flex gap-5 justify-between items-start mt-5 mb-3.5 max-w-full text-center capitalize whitespace-nowrap w-[563px] max-md:flex-wrap">
                    <div className="flex gap-5 justify-between px-7 py-6 text-sm font-light bg-stone-300 leading-[70.98px] rounded-[29px] text-neutral-500 max-md:px-5">
                    <div>Segmento</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/648c862e20de09c526a4f539b1ae10655fd76ee7980bb487eb384cee2901d1fc?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&" className="self-start aspect-[1.37] fill-neutral-500 w-[11px]" alt="Select icon" />
                    </div>
                    <button className="grow justify-center items-center px-16 py-6 text-base font-semibold bg-violet-700 leading-[70.95px] rounded-[29px] text-zinc-300 max-md:px-5">
                    Enviar
                    </button>
                </div>
            </section>
        </>
    )
}