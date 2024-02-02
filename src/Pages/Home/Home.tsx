
import { SectionFour } from "./sections/SectionFour/SectionFour";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";

import Border from "../../assets/images/border.svg";
import SectionFive from "./sections/SectionFive/SectionFive";
import SectionSix from "./sections/SectionSix/SectionSix";

export default function Home(){
    return (
        <>
            <div className="mt-10 flex flex-col gap-20 lg:mb-[100px] xl:mb-[250px] ">
                <SectionOne/>
                <img src={Border} alt="" className="container lg:px-10 xl:px-20 mx-auto w-[10%]" />
                <SectionTwo/>
                <img src={Border} alt="" className="container lg:px-10 xl:px-20 mx-auto w-[100%]" />
                <SectionThree/>
                <img src={Border} alt="" className="container lg:px-10 xl:px-20 mx-auto w-[100%]" />
                <SectionFour/>
                <img src={Border} alt="" className="container lg:px-10 xl:px-20 mx-auto w-[100%]" />
                <SectionFive />
                <SectionSix />
            </div>

        </>
    )
}