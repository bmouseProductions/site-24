import logo from '../../assets/images/logos/logo-bmouse.svg'

import { Bubble } from "@typebot.io/react";

export default function Footer(){
    return (
        <footer className=''>
            <div className='container px-5 lg:px-10 xl:px-20 mx-auto grid grid-cols-1 gap-7 md:grid-cols-3  md:justify-items-center'>
                <div className=' font-delligual  '>
                    <img src={logo} alt="" className='w-[180px] mb-5' />
                    <p className='md:text-base lg:text-lg'>
                        Somos a maior agência de Marketing Médico do Brasil. Faça parte dessa revolução na área da saúde. 
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
                        href="https://maps.app.goo.gl/b51VELzwuPrhMtoV9" 
                        target='_blank'
                        className='md:text-base lg:text-lg  '
                    >
                        Rua Dr. José Olímpio <br />
                        Borges, 134 - Vila Santa Luzia,
                        Patos de Minas - MG,
                        38700-080
                    </a>
                </div>
            </div>

            <div className="container my-20 mx-auto w-full max-w-[90%] md:max-w-[728px] lg:max-w-[944px] xl:max-w-[1120px] 2xl:max-w-[1376px] h-[3px] bg-[#0fff94] rounded-xl" />

            <p className='text-xl text-center container lg:px-10 xl:px-20 mx-auto mb-14'>
                <strong>Copyright</strong> © 2024 - Bmouse Productions
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