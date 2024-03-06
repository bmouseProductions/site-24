
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nalberthy from '../../assets/images/Home/SectionThree/nalberthy.webp'
import ricardo from '../../assets/images/Home/SectionThree/ricardo.webp'
import veras from '../../assets/images/Home/SectionThree/veras.webp'

export default function SliderHome() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const colaboradores = [

        {
            nome: "nalberthy",
            setor: "Designer",
            imagem: nalberthy
        },
        {
            nome: "ricardo",
            setor: "Redator",
            imagem: ricardo
        },
        {
            nome: "Veras",
            setor: "Redator",
            imagem: veras
        },
    ]

    return (
            <Slider {...settings} className="w-full md:max-w-[300px] lg:max-w-md ">
                {colaboradores.map((colaborador, index) => (
                    <div key={index} className=" !flex justify-center text-white">
                        <img src={colaborador.imagem} className="md:max-h-[500px] rounded-[30px] " alt="" />
                    </div>
                ))}
            
            </Slider>
    );
}




/* arrays que precisma estar na pagina onde o swiper vai ser chamado contendo o conteudo dos sliders

const slideContent = [
    'Texto do Slide 1', 
    'Texto do Slide 2', 
    'Texto do Slide 3', 
    <Image key={1} src={import da imagem} alt="imagem tiago tessmann" className="w-auto h-[300px]"/>
];
        
const slideCount = slideContent.length;

o coponente será chamado assim:
<Slider
    slideContent= {slideContent}
    slideCount= {slideCount}
/>

<Swiper
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
    clickable: true,
    }}
    navigation={true}
    modules={[ Pagination, Navigation]}
    className="mySwiper rounded"
>
    {slideContent.map((content, index:number) => (
        <SwiperSlide key={index} className='w-full h-full flex justify-center items-center px-5'>
            {content}
        </SwiperSlide>
    ))}
</Swiper>
*/