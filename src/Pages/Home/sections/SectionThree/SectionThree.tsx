import SliderHome from "../../../../components/sliders/SliderHome";
import cursiva from '../../../../assets/images/Home/SectionTwo/bmouse-cursivo.webp'
import { Botao } from "../../../../components/BotaoEscuro/Botao";

export const SectionThree = () => {
  return (
    <section className=" bg-section-one2 bg-contain mx-auto  flex items-center lg:!bg-400 xl:!bg-600 ">
      <div className=" container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col md:flex-row gap-5 justify-between ">
        <div className="relative mb-10 w-full md:w-1/3 flex justify-center md:items-center ">
          <SliderHome />
          <div className="absolute bottom-0 mb-[-80px] md:mb-0 lg:mb-[-60px] 2xl:mb-[-80px] w-full max-w-[200px] ">
            <Botao 
              text='Saiba mais' 
              link='/sobre'
            />
          </div>
        </div>
          
        <div className="mt-20 md:mt-0 w-full md:w-2/3 flex flex-col gap-3 xl:gap-10 md:max-w-[60%] ">
          <div className="px-5 py-1 pt-2 mb-3 w-fit flex items-center justify-center border-2 rounded-[30px] border-[#0fff94]">
            <p className="font-franieRegular uppercase text-[12px] md:text-xl text-center text-[#0fff94] ">
              sobre nós
            </p>
          </div>

          <div className="flex">
            <h1 
              className="w-full font-franieSemiBold uppercase flex flex-wrap relative
              text-[25px] leading-[40px]
              md:text-[32px] md:leading-[50px] 
              xl:text-[50px] xl:leading-[70px] 
              2xl:text-[60px] 2xl:leading-[80px] "
            >
                conheça a
                <span className="mx-2 font-franiExtraBold text-[#0fff94] ">bmouse</span> <br />
                <span className="mr-1 font-franiExtraBold text-[#0fff94] ">productions</span> 
                <img 
                  src={cursiva} 
                  alt="" 
                  className="md:w-[100px] lg:w-[150px] xl:w-[200px] absolute right-[50px] lg:right-[70px] xl:right-[0px] bottom-0 hidden md:block"
                />
            </h1>
            
            
          </div>

          <div className="flex flex-col  gap-3">
            <p>
              A BMouse é muito mais do que uma agência de marketing. Somos uma agência de criatividade com um compromisso inabalável em levar a sua marca a novos patamares.
            </p>
            <p>
              Os nossos diferenciais? Além de possuirmos o Studio BMouse, um espaço equipado com tecnologia de ponta para produções audiovisuais de altíssima qualidade, ainda contamos com uma equipe de especialistas em cada setor.
            </p>

            <strong className="font-bold">
              Conte com a BMouse para fazer a diferença no mercado.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
