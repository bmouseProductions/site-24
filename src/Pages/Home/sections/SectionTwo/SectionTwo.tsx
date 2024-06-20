

export const SectionTwo = () => {
  return (
    <section className="bg-blur-left  ">
      <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col gap-10  items-center justify-center">
        <div className="flex flex-col xl:flex-row items-center gap-5 md:gap-10 justify-between">
          <div className="w-full flex flex-col items-start">
            <div className="px-5 py-1 pt-2 mb-3 w-fit flex items-center justify-center  border-2 rounded-[30px] border-[#0fff94]">
              <p className="font-franieRegular uppercase text-[12px] md:text-xl text-center text-[#0fff94] ">
                sobre nós
              </p>
            </div>
            <h1 
              className="w-full font-franieSemiBold uppercase 
              text-[26px] leading-[40px]
              md:text-[60px] md:leading-[80px] 
              xl:text-[50px] xl:leading-[70px] 
              2xl:text-[60px] 2xl:leading-[80px] "
            >
              Especialistas em <br />
              <span className="mr-1 font-franiExtraBold text-[#0fff94] ">marketing</span> 
              médico
            </h1>
          </div>
          
          <p className="text-white w-full">
            Nós transformamos o Marketing Médico! Com expertise, estudos detalhados, uma equipe qualificada e tecnologia de ponta, 
            estamos redefinindo a forma de conectar esse setor. Nossa missão é elevar o patamar do Marketing Médico e construir 
            um novo cenário para a saúde na era digital, aproximando as pessoas e auxiliando na construção de carreira desses 
            profissionais.
          </p>
        </div>
        <iframe
          className="w-full h-[200px] md:h-[515px] xl:h-[620px] rounded-3xl"
          src="https://www.youtube.com/embed/9aloZiyEsOA?si=vytsTmPOjP7fTH19"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
};
