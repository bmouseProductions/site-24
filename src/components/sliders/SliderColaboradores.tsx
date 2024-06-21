
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import naia from '../../assets/images/colaboradores/naia.webp'
import bruno from '../../assets/images/colaboradores/bruno.webp'
import leo from '../../assets/images/colaboradores/leo.webp'
import matheus from '../../assets/images/colaboradores/matheus.webp'
import melissa from '../../assets/images/colaboradores/melissa.webp'
import nalberthy from '../../assets/images/colaboradores/nalberthy.webp'
import rafael from '../../assets/images/colaboradores/rafael.webp'
import ricardo from '../../assets/images/colaboradores/ricardo.webp'
import veras from '../../assets/images/colaboradores/veras.webp'
import jenifer from '../../assets/images/colaboradores/jenifer.webp'
import tom from '../../assets/images/colaboradores/tom.webp'
import roberta from '../../assets/images/colaboradores/roberta.webp'
import wesley from '../../assets/images/colaboradores/wesley.webp'
import joaoPaulo from '../../assets/images/colaboradores/joaoPaulo.webp'

export default function SliderColaborador() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 4,
                }
            },
            {
                breakpoint: 1040,
                settings: {
                  slidesToShow: 3,
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
            nome: "Bruno",
            setor: "Editor",
            imagem: bruno
        },
        {
            nome: "Leo",
            setor: "Designer",
            imagem: leo
        },
        {
            nome: "matheus",
            setor: "Programador",
            imagem: matheus
        },{
            nome: "melissa",
            setor: "Redator",
            imagem: melissa
        },

        {
            nome: "nalberthy",
            setor: "Editor",
            imagem: nalberthy
        },
        {
            nome: "rafael",
            setor: "Editor",
            imagem: rafael
        },
        {
            nome: "ricardo",
            setor: "Editor",
            imagem: ricardo
        },
        {
            nome: "Veras",
            setor: "Gerente",
            imagem: veras
        },
        {
            nome: "Jenifer",
            setor: "Programação e ADS",
            imagem: jenifer
        },
        {
            nome: "Tom",
            setor: "CEO",
            imagem: tom
        },
        {
            nome: "Roberta",
            setor: "CEO",
            imagem: roberta
        },
        {
            nome: "Wesley",
            setor: "Gestor de mídias sociais",
            imagem: wesley
        },
        {
            nome: "João Paulo",
            setor: "Modelador 3D e Designer",
            imagem: joaoPaulo
        },
    ]

    return (
            <Slider {...settings} className="">
                {colaboradores.map((colaborador, index) => (
                    <div key={index} className=" !flex justify-center text-white  ">
                        <img src={colaborador.imagem} className=" md:max-h-[300px] rounded-[30px] md:mx-2 bg-[#0fff94]" alt="" />
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