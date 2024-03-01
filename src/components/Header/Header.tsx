import React from "react";
import {
  Navbar,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logos/logo-bmouse.svg'
import ModalContact from "../ModalContact/ModalContact";
 
function NavList() {
  return (
    <ul className="pt-5 flex flex-col md:flex-row md:items-center gap-5 lg:gap-[27px] ">
      <NavLink to="/sobre" className="text-lg md:text-xl !font-montserrat cursor-pointer">
          Sobre
      </NavLink>

      <NavLink to="/nossos-trabalhos" className="text-lg md:text-xl !font-montserrat cursor-pointer">
          Nossos trabalhos
      </NavLink>

      <NavLink to="/servicos" className="text-lg md:text-xl !font-montserrat cursor-pointer">
          Serviços
      </NavLink>

      <ModalContact />
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
    <Navbar className="pt-5 mx-auto max-w-[950px] px-5 py-5 md:pb-10 lg:pb-20 bg-transparent rounded-none border-none" placeholder="">
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
            abrir menu
        </button>

        
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>

      
    </Navbar>
  );
}