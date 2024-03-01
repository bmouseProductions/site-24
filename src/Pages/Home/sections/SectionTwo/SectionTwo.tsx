
export const SectionTwo = () => {
  return (
    <section className="bg-blur-left  ">
      <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col gap-10 md:gap-20 items-center justify-center">
        <div className="flex flex-col xl:flex-row items-center gap-5 md:gap-10 justify-between">
          <h1 className="font-tittle  lg:!text-[150px] xl:text-[110px] ">
            Somos all in one de verdade!!
          </h1>
          <p className="text-white  xl:max-w-[450px] ">
            Com uma agência 360º ao seu lado, você não precisa se preocupar com terceirizações. Nosso time de especialistas das mais diversas áreas está pronto para atender às suas demandas.
          </p>
        </div>
        <iframe
          className="w-full h-[200px] md:h-[515px] xl:h-[620px] rounded-3xl"
          src="https://www.youtube.com/embed/tOUAucHN7QQ?si=Nc9uLH86B0GShAhF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
};
