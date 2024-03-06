
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
            
                <SectionOne/>
                <img src={Border} alt="" className="container lg:px-10 xl:px-20 mx-auto w-[100%] my-20" />
                <SectionTwo/>
                <img src={Border} alt="" className="container lg:px-10 xl:px-20 mx-auto w-[100%] my-20" />
                <SectionThree/>
                <img src={Border} alt="" className="container lg:px-10 xl:px-20 mx-auto w-[100%] my-20" />
                <SectionFour/>
                <img src={Border} alt="" className="container lg:px-10 xl:px-20 mx-auto w-[100%] my-20" />
                <SectionFive />
                <SectionSix />
                
        </>
    )
}