import React from "react";
import {
  Navbar,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logos/logo-bmouse.svg'
 
function NavList() {
  return (
    <ul className="pt-5 xl:pt-0 flex flex-col xl:flex-row xl:items-center gap-3 text-sm ">
      <NavLink to="/sobre" className=" hover:!text-black !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 ">
        Sobre
      </NavLink>

      <NavLink to="/servicos/audiovisual" className=" hover:!text-black !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 ">
        Studios Bmouse
      </NavLink>

      <a 
        href="https://bmouseproductions.com/view/atendimento/nossos-trabalhos/"
        className=" hover:!text-black !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 "
      >
        Nossos trabalhos
      </a>

      <NavLink to="/servicos" className=" hover:!text-black !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 ">
        Serviços
      </NavLink>

      <NavLink to="/aventuras" className=" hover:!text-black !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 ">
        Outras Aventuras
      </NavLink>

      <a 
        href="https://bmouseproductions.com/view/atendimento/trabalhe-conosco/"
        className=" hover:!text-black !font-montserrat cursor-pointer hover:underline decoration-white underline-offset-8 "
      >
        Trabalhe conosco
      </a>

      
      <a
        href="https://bmouseproductions.com/view/atendimento/"
        className="w-full max-w-[170px] px-5 py-3 text-black text-center rounded-[30px] bg-[#0fff94] hover:bg-white transition-all shadow-xl hover:shadow-none"
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
    <Navbar className="pt-5 mx-auto max-w-[1300px] px-5 py-5 md:pb-10 lg:pb-20 bg-transparent rounded-none border-none" placeholder="">
      <div className="flex items-center justify-between text-blue-gray-900">

        <NavLink to="/" className="xl:w-1/3 cursor-pointer">
          <img src={logo} alt="" className="w-[200px] md:w-[150px] lg:w-[200px] " />
        </NavLink>

        <div className="hidden xl:block w-full">
          <NavList />
        </div>
        
        <button
            className="xl:hidden"
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