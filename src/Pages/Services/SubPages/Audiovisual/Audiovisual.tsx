import SectionFour from "./Sections/SectionFour/SectionFourAudiovisual";
import SectionOne from "./Sections/SectionOne/SectionOneAudiovisual";
import SectionThree from "./Sections/SectionThree/SectionThreeAudiovisual";
import SectionTwo from "./Sections/SectionTwo/SectionTwoAudiovisual";


export default function AudiovisualService(){
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </>
    )
}