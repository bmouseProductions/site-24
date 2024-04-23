
import draelis from "../../../../assets/images/logos-clientes/draelis.svg";
import farol from "../../../../assets/images/logos-clientes/farol.svg";
import giolaser from "../../../../assets/images/logos-clientes/giolaser.svg";
import leoni from "../../../../assets/images/logos-clientes/leoni.svg";
import mga from "../../../../assets/images/logos-clientes/mid.svg";
import neo from "../../../../assets/images/logos-clientes/neogenetics.svg";
import nova from "../../../../assets/images/logos-clientes/novageracao.svg";
import olha from "../../../../assets/images/logos-clientes/olharcerto.svg";
import patense from "../../../../assets/images/logos-clientes/patense.svg";
import pets from "../../../../assets/images/logos-clientes/petsmellon.svg";
import profat from "../../../../assets/images/logos-clientes/Profat.svg";
import sorridents from "../../../../assets/images/logos-clientes/sorridents.svg";
import transtri from "../../../../assets/images/logos-clientes/transtriangulo.svg";
import whg from "../../../../assets/images/logos-clientes/whg.png";
import zoomies from "../../../../assets/images/logos-clientes/zoomies.svg";
import mira from "../../../../assets/images/logos-clientes/mira.svg";
import docbiz from "../../../../assets/images/logos-clientes/docbiz.svg";
import insti from "../../../../assets/images/logos-clientes/institutosalus.svg";
import lj from "../../../../assets/images/logos-clientes/lj.svg";
import aligner from "../../../../assets/images/logos-clientes/newaligner.svg";
import salus from "../../../../assets/images/logos-clientes/salus.svg";
import amo from "../../../../assets/images/logos-clientes/amovacinas.svg";
import agro from "../../../../assets/images/logos-clientes/agroecologia.svg";
import SliderImagem from "../../../../components/sliders/SliderClientes";



export default function SectionFive(){
    const slideContent = [
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={draelis} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={farol} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={giolaser} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={leoni} alt="" />,
        //<img  className='max-w-[300px] h-28 py-3 mx-5 ' src={mImagem} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={mga} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={neo} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={olha} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={patense} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={pets} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={profat} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={sorridents} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={transtri} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={whg} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={zoomies} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={mira} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={docbiz} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={insti} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={lj} alt="" />,
        //<img  className='max-w-[300px] h-28 py-3 mx-5 ' src={petisco} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={aligner} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={neo} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={olha} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={salus} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={amo} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={nova} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={agro} alt="" />,
    ];

    const slideCount = slideContent.length;
    return (
        
        <section className=" md:mb-[100px] lg:mb-[150px] max-w-screen ">
            <h1 className="mb-10 font-tittle lg:!text-[200px]  text-center">
                nossos clientes
            </h1>

            <SliderImagem slideContent={slideContent} slideCount={slideCount} />
        </section>
    )
}