import logo from '../../assets/images/logos/logo-bmouse.svg'
import Border from '../../assets/images/border.svg'

export default function Footer(){
    return (
        <footer className=''>
            <div className='container lg:px-10 xl:px-20 mx-auto grid grid-cols-3 justify-items-center '>
                <div className='max-w-[260px] font-delligual '>
                    <img src={logo} alt="" className='w-[180px] mb-5' />
                    <p className='text-lg'>
                        Embarque na jornada do marketing digital com a gente e alcance as estrelas
                    </p>
                </div>

                <div className='max-w-[260px] font-delligual '>
                    <h2 className="text-3xl font-bold mb-5">Fale Conosco</h2>
                    
                    <a href="tel:+5534999306776" className='text-lg'>
                        (34) 99930-6776
                    </a>
                    <br />
                    <a href="mailto:info@bmouseproductions.com" className='text-lg'>
                        info@bmouseproductions.com
                    </a>
                    
                </div>

                <div className='max-w-[260px] font-delligual '>
                    <h2 className="text-3xl font-bold mb-5">Endereço:</h2>
                    <a 
                        href="https://www.google.com/maps/dir/-18.5858187,-46.50845/ag%C3%AAncia+de+marketing+%7C+bmouse+productions+%7C+marketing+digital+patos+de+minas+endere%C3%A7o/@-18.5837763,-46.523119,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94ae8b4414941bf9:0xcb640417f8da94dc!2m2!1d-46.5162056!2d-18.5831493?entry=ttu" 
                        className='text-lg'
                    >
                        Rua Dr. José Olímpio <br />
                        Borges, 124 - Vila Santa Luzia,
                        Patos de Minas - MG,
                        38700-080
                    </a>
                </div>
            </div>
            <img src={Border} alt="" className="w-full my-20" />
            <p className='text-xl container lg:px-10 xl:px-20 mx-auto mb-14'>
                <strong>Copyright</strong> © 2024 - Bmouse
            </p>
        </footer>
    )
}