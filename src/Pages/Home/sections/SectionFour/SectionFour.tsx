import {Botao} from '../../../../components/BotaoEscuro/Botao'
import Image from "../../../../assets/images/header-section-1.svg";

const info = [
  {
    img: Image,
    title: "AgroMouse",
    text: "Saindo do campo para o digital!",
  },
  {
    img: Image,
    title: "Zoomies",
    text: "Saindo do campo para o digital!",
  },
  {
    img: Image,
    title: "GiO 10 anos!",
    text: "Saindo do campo para o digital!",
  },
  {
    img: Image,
    title: "Patense Agroecologia",
    text: "Saindo do campo para o digital!",
  },
  {
    img: Image,
    title: "Sorridents",
    text: "Saindo do campo para o digital!",
  },
  {
    img: Image,
    title: "Grupo Patense",
    text: "Saindo do campo para o digital!",
  },
];

export const SectionFour = () => {
  return (
    <section className="bg-section-one">
      <div className="container lg:px-10 xl:px-20 mx-auto flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-white">
          
            <h1 className="w-full font-tittle lg:!text-[150px] xl:!text-[200px] ">
              Nossos projetos
            </h1>
        
            <p className='!max-w-[367px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              quisquam voluptas tenetur accusamus eligendi recusandae omnis
              impedit voluptates libero iste inventore doloribus laborum error
              animi ab atque, illo perferendis amet.
            </p>
          
        </div>
        <div className=" grid grid-cols-2 gap-10">
          {info.map((item, index) => {
            return (
              <div
                className=" flex-1 flex flex-col items-center justify-end rounded-[29px] bg-header-section !h-[420px] w-full"
                style={{ backgroundImage: `url(${item.img})` }}
                key={index}
              >
                <div className="efeito-vidro rounded-[29px] flex items-center justify-between gap-10 text-white h-[160px] w-full px-10">
                  <div className="flex flex-col gap-5">
                    {" "}
                    <h1 className="text-xl font-bold">{item.title}</h1>
                    <p>{item.text}</p>
                  </div>
                  <div>
                    <a
                      href=""
                      className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border  border-white"
                    >
                      {" "}
                      {`>`}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='w-[225px] mt-14 mx-auto'>
        <Botao text='Saiba mais' tipo='tipo2'/>
      </div>
    </section>
  );
};
