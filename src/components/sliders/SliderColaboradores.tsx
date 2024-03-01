
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import naia from '../../assets/images/colaboradores/naia.webp'
import joyce from '../../assets/images/colaboradores/joyce.webp'

export default function SliderColaborador() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1040,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 765,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
        ]
    };

    const colaboradores = [
        {
            nome: "Naiá",
            setor: "Redator",
            imagem: naia
        },

        {
            nome: "Joyce",
            setor: "Designer",
            imagem: joyce
        },{
            nome: "Naiá",
            setor: "Redator",
            imagem: naia
        },

        {
            nome: "Joyce",
            setor: "Designer",
            imagem: joyce
        },{
            nome: "Naiá",
            setor: "Redator",
            imagem: naia
        },

        {
            nome: "Joyce",
            setor: "Designer",
            imagem: joyce
        },{
            nome: "Naiá",
            setor: "Redator",
            imagem: naia
        },

        {
            nome: "Joyce",
            setor: "Designer",
            imagem: joyce
        },
    ]

    return (
            <Slider {...settings} className="">
                {colaboradores.map((colaborador, index) => (
                    <div key={index} className=" !flex justify-center text-white">
                        <img src={colaborador.imagem} className="md:max-h-[300px] " alt="" />
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