import logo from '../../assets/images/logos/logo-bmouse.svg'
import Border from '../../assets/images/border.svg'

import { Bubble } from "@typebot.io/react";

export default function Footer(){
    return (
        <footer className=''>
            <div className='container px-5 lg:px-10 xl:px-20 mx-auto grid grid-cols-1 gap-7 md:grid-cols-3  md:justify-items-center'>
                <div className=' font-delligual  '>
                    <img src={logo} alt="" className='w-[180px] mb-5' />
                    <p className='md:text-base lg:text-lg'>
                        Transforme a sua empresa com marketing de verdade. Embarque nessa jornada conosco!
                    </p>
                </div>

                <div className=' font-delligual  '>
                    <h2 className="md:text-xl text-wrap lg:text-3xl font-bold mb-5">Fale Conosco</h2>
                    
                    <a href="tel:+5534999306776" className='md:text-base lg:text-lg'>
                        (34) 99930-6776
                    </a>
                    <br />
                    <a href="mailto:info@bmouseproductions.com" className='overflow-x-hidden md:text-base lg:text-lg'>
                        info@bmouseproductions <br className='hidden md:block lg:hidden' />.com
                    </a>
                    
                </div>

                <div className=' font-delligual  '>
                    <h2 className="md:text-xl text-wrap lg:text-3xl font-bold mb-5">Endereço:</h2>
                    <a 
                        href="https://www.google.com/maps/dir/-18.5858187,-46.50845/ag%C3%AAncia+de+marketing+%7C+bmouse+productions+%7C+marketing+digital+patos+de+minas+endere%C3%A7o/@-18.5837763,-46.523119,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94ae8b4414941bf9:0xcb640417f8da94dc!2m2!1d-46.5162056!2d-18.5831493?entry=ttu" 
                        className='md:text-base lg:text-lg  '
                    >
                        Rua Dr. José Olímpio <br />
                        Borges, 134 - Vila Santa Luzia,
                        Patos de Minas - MG,
                        38700-080
                    </a>
                </div>
            </div>
            <img src={Border} alt="" className="w-full my-20" />
            <p className='text-xl text-center container lg:px-10 xl:px-20 mx-auto mb-14'>
                <strong>Copyright</strong> © 2024 - Bmouse
            </p>

            <Bubble
                typebot="bmouse"
                previewMessage={{
                    message: "Olá, podemos lhe ajudar?",
                    autoShowDelay: 10000,
                    avatarUrl:
                    "https://s3.typebot.io/public/workspaces/clv2tewr6000hh80cwwlpcfjg/typebots/clv2thip6000112k79mwnke6i/hostAvatar?v=1713359359581",
                }}
                theme={{
                    button: {
                    backgroundColor: "#FFFFFF",
                    customIconSrc:
                        "https://s3.typebot.io/public/workspaces/clv2tewr6000hh80cwwlpcfjg/typebots/clv2thip6000112k79mwnke6i/bubble-icon?v=1713895393916",
                    },
                    previewMessage: {
                    closeButtonBackgroundColor: "#0042DA",
                    closeButtonIconColor: "#33ac45",
                    },
                }}
            />
        </footer>
    )
}