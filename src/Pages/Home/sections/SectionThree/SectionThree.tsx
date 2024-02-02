import Image from "../../../../assets/images/SectionThree/image.svg";


export const SectionThree = () => {
  return (
    <section className="bg-section-one h-[500px] flex items-center lg:!bg-400 xl:!bg-600 !bg-right ">
      <div className="container lg:px-10 xl:px-20 mx-auto flex gap-10 justify-between ">
        <div className="w-[80%]">
          <img src={Image} alt="" className="rotate-180 w-[85%] " />
        </div>
        <div className="text-white flex flex-col gap-10">
          <h1 className="font-tittle">
            Somos especialistas!
          </h1>
          <div className="flex flex-col items-center gap-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum recusandae eum nostrum numquam! Adipisci maiores,
              mollitia, unde facilis assumenda aspernatur tenetur voluptatem
              reprehenderit laboriosam nulla enim, perferendis distinctio
              commodi corrupti.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              unde dicta! Illo iusto sequi vero nisi deleniti tempore in
              veritatis officiis, laudantium earum fugit repellendus error iste
              aspernatur vel! Molestias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
