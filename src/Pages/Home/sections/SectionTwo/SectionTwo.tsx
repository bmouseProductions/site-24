
export const SectionTwo = () => {
  return (
    <section className="bg-section-one ">
      <div className=" container lg:px-10 xl:px-20 mx-auto flex flex-col gap-20 items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
          <h1 className="font-tittle">
            Somos all in one de verdade!!
          </h1>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            ex incidunt, accusamus natus optio neque consectetur, odio sapiente
            dolores quis totam! Reiciendis facilis quae similique quia? Commodi
            iusto consequuntur accusantium!
          </p>
        </div>
        <iframe
          className="w-full lg:h-[515px] xl:h-[620px] rounded-3xl"
          src="https://www.youtube.com/embed/cq9rtR_XWl8?si=XOxYbcGCkXYv4INJ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
};
