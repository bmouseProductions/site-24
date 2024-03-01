
import { Botao } from "../../../../components/BotaoEscuro/Botao";
import Header from "../../../../components/Header/Header";
import franchising from '../../../../assets/images/Home/header-section-1.svg'
import agromouse from '../../../../assets/images/Home/agromouse.svg'

export const SectionOne = () => {
  return (
    <section className=" md:pt-10 bg-section-one mx-auto">
      <Header />
      <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex gap-10 flex-col">
        <div className=" flex flex-col-reverse lg:flex-row items-end gap-10 justify-between my-10">
          <div className="flex-1 flex flex-col gap-10">
            <h1 className="font-tittle  md:!text-[140px]  xl:!text-[150px] ">
              marketing 360º personalizado para você!
            </h1>
            <div className="flex items-center justify-between gap-3 md:gap-10">
              <div className="w-full">
                <Botao
                  tipo="tipo1"
                  text="Ver nosso portfólio"
                ></Botao>
              </div>
              <div className="w-full">
                <Botao tipo="tipo2" text="RECAP 2023"></Botao>
              </div>
            </div>
          </div>

          <div className=" flex-1 flex flex-col items-center justify-end rounded-[29px]  w-full">
            <a
              className="relative w-full flex justify-center rounded-[29.5px] overflow-hidden transition-all"
              href=""
            >
              <img className='w-full md:w-[80%] lg:w-full transition-all' src={franchising} alt="" />
              <div className="hidden absolute bottom-0 h-[160px] w-full md:w-[80%] lg:w-full px-10 efeito-vidro md:flex items-center justify-between gap-10 text-white ">
                <div className="flex flex-col gap-5">
                  {" "}
                  <h2 className="text-xl font-bold">BMouse franchising</h2>
                  <p>Expanda suas fronteiras com um marketing especializado em franchising! Com um time de especialistas ao seu lado, sua marca e seu know-how tornam-se ferramentas poderosas.</p>
                </div>
                <div>
                  <a
                    href=""
                    className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border border-white hover:bg-white hover:text-black"
                  >
                    {" "}
                    {`>`}
                  </a>
                </div>
              </div> 
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center  ">
          
          <div className=" xl:!h-[330px] w-full lg:!w-[70%] flex flex-col items-center justify-end rounded-[29px] bg-agromouse ">
            <img className="lg:hidden" src={agromouse}  alt="" />

            <div className="h-[140px] px-10 efeito-vidro rounded-[29px] hidden lg:flex items-center justify-between gap-10 text-white ">
              <div className="flex flex-col gap-3">
                {" "}
                <h2 className="text-xl font-bold">AgroMouse</h2>
                <p className="">
                  Mais do uma escolha, a evolução é uma necessidade! Com a
                  BMouse, o agro sai do campo e vai para o mundo digital,
                  alcançando novos públicos, novos horizontes e novos lugares
                </p>
              </div>
              <div>
                <a
                  href=""
                  className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border  border-white hover:bg-white hover:text-black"
                >
                  {" "}
                  {`>`}
                </a>
              </div>
            </div>

            <div className="lg:hidden mt-5 max-w-[90%]">
              <h2 className="text-xl font-bold">AgroMouse</h2>
              <p className="">
              Mais do que uma escolha, a evolução é uma necessidade! Com a BMouse, o agro sai do campo e vai para o mundo digital, alcançando novos públicos, novos horizontes e novos lugares.
              </p>
            </div>
          </div>

            
            

          <div className="xl:!h-[330px] flex flex-col items-center justify-end rounded-[29px] bg-story !h-full !w-[30%]">
            <div className="h-[140px] px-10 efeito-vidro rounded-[29px] hidden md:flex items-center justify-between gap-10 text-white ">
              <div className="flex flex-col gap-3">
                {" "}
                <h2 className="text-xl font-bold">Storytellers</h2>
                <p>Somos especialistas em transformar histórias em obras impactantes!</p>
              </div>
              <div>
                <a
                  href=""
                  className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border  border-white hover:bg-white hover:text-black"
                >
                  {" "}
                  {`>`}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
