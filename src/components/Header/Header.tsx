import React from "react";
import {
  Navbar,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logos/logo-bmouse.svg'
 
function NavList() {
  return (
    <ul className="pt-5  flex flex-col md:flex-row md:items-center gap-3 xl:gap-5  ">
      <NavLink to="/sobre" className="text-sm xl:text-base hover:!text-black !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 transition-all">
        Sobre
      </NavLink>

      <NavLink to="/servicos/audiovisual" className="text-sm xl:text-base hover:!text-[#4bbfed] !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 transition-all">
        Studios Bmouse
      </NavLink>

      <a 
        href="https://bmouseproductions.com/view/atendimento/nossos-trabalhos/"
        className="text-sm xl:text-base hover:!text-[#4bbfed] !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 transition-all"
      >
        Nossos trabalhos
      </a>

      <NavLink to="/servicos" className="text-sm xl:text-base hover:!text-[#4bbfed] !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 transition-all">
        Serviços
      </NavLink>

      <a 
        href="https://bmouseproductions.com/view/atendimento/trabalhe-conosco/"
        className="text-sm xl:text-base hover:!text-[#4bbfed] !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 transition-all"
      >
        Trabalhe conosco
      </a>

      
      <a
        href="https://bmouseproductions.com/view/atendimento/"
        className=" px-5 py-3 text-black text-lg rounded-[30px] bg-[#0fff94] hover:bg-white transition-all shadow-xl hover:shadow-none"
      >
        Fale conosco  
      </a>
    </ul>
  );
}
 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="pt-5 mx-auto max-w-[1200px] px-5 py-5 md:pb-10 lg:pb-20 bg-transparent rounded-none border-none" placeholder="">
      <div className="flex items-center justify-between text-blue-gray-900">

        <NavLink to="/" className=" cursor-pointer">
          <img src={logo} alt="" className="w-[200px] md:w-[150px] lg:w-[200px] " />
        </NavLink>

        <div className="hidden md:block">
          <NavList />
        </div>
        
        <button
            className="md:hidden"
            onClick={() => setOpenNav(!openNav)}
        >
          { openNav ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          }
        </button>

        
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>

      
    </Navbar>
  );
}