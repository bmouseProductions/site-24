import { useState } from "react";
import { Drawer, Button} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

import logo from '../../assets/images/logos/logo-bmouse.svg'

export default function Header(){
    const [openLeft, setOpenLeft] = useState(false);
    
    const openDrawerLeft = () => setOpenLeft(true);
    const closeDrawerLeft = () => setOpenLeft(false);

    return (
        <header>
            {/* MENU MOBILE*/}
            <nav className="lg:hidden">
                <div className="w-full p-4 flex justify-between bg-green-700">
                    
                    <Button 
                        onClick={openDrawerLeft}
                        placeholder={undefined}
                        className={openLeft ? 'opacity-0 ' : 'opacity-100 '} 
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </Button>

                    <Button 
                        variant="text" 
                        color="blue-gray" 
                        onClick={closeDrawerLeft} 
                        placeholder={undefined}
                        className={openLeft ? 'opacity-100 ' : 'opacity-0'} 
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    </Button>
                </div>
                
                <Drawer
                    placement="left"
                    open={openLeft}
                    onClose={closeDrawerLeft}
                    className={openLeft ? 'p-4 w-full bg-[#00000099] opacity-100 backdrop-blur-sm !max-w-none ' : 'p-4 w-full bg-black opacity-40'} 
                    placeholder={undefined}
                >
                    <ul className="flex flex-col gap-5 text-white">
                        <NavLink to="/" className="text-2xl font-semibold">
                            Home
                        </NavLink>

                        <NavLink to="/sobre" className="text-2xl font-semibold">
                            Sobre
                        </NavLink>

                        <NavLink to="/nossos-trabalhos" className="text-2xl font-semibold">
                            Nossos Trabalhos
                        </NavLink>

                        <NavLink to="/servicos" className="text-2xl font-semibold">
                            Serviços
                        </NavLink>

                        <NavLink to="/fale-conosco" className="text-2xl font-semibold">
                            Fale Conosco
                        </NavLink>
                    </ul>
                </Drawer>
            </nav>

            {/* MENU DESKTOP*/}
            <nav className="hidden lg:block w-full max-w-[750px] mx-auto mt-20 ">
                <ul className="flex gap-[27px] ">
                    <NavLink to="/" className="text-2xl font-semibold">
                        <img src={logo} alt="" />
                    </NavLink>

                    <NavLink to="/sobre" className="text-2xl font-semibold">
                        Sobre
                    </NavLink>

                    <NavLink to="/nossos-trabalhos" className="text-2xl font-semibold">
                        Nossos Trabalhos
                    </NavLink>

                    <NavLink to="/servicos" className="text-2xl font-semibold">
                        Serviços
                    </NavLink>

                    <NavLink to="/fale-conosco" className="text-2xl font-semibold">
                        Fale Conosco
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}