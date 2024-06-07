
import { SectionFour } from "./sections/SectionFour/SectionFour";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";

import SectionFive from "./sections/SectionFive/SectionFive";
import Decolar from "../../components/Decolar/Decolar";

export default function Home(){
    return (
        <>
            
            <SectionOne/>
            <div className="container my-20 mx-auto w-full max-w-[90%] md:max-w-[728px] lg:max-w-[944px] xl:max-w-[1120px] 2xl:max-w-[1376px] h-[3px] bg-[#0fff94] rounded-xl" />
            <SectionTwo/>
            <div className="container my-20 mx-auto w-full max-w-[90%] md:max-w-[728px] lg:max-w-[944px] xl:max-w-[1120px] 2xl:max-w-[1376px] h-[3px] bg-[#0fff94] rounded-xl" />
            <SectionThree/>
            <div className="container my-20 mx-auto w-full max-w-[90%] md:max-w-[728px] lg:max-w-[944px] xl:max-w-[1120px] 2xl:max-w-[1376px] h-[3px] bg-[#0fff94] rounded-xl" />
            <SectionFour/>
            <div className="container my-20 mx-auto w-full max-w-[90%] md:max-w-[728px] lg:max-w-[944px] xl:max-w-[1120px] 2xl:max-w-[1376px] h-[3px] bg-[#0fff94] rounded-xl" />
            <SectionFive />
            <Decolar />
                
        </>
    )
}