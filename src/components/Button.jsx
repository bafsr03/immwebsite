import React from "react";
import { Link, animateScroll as scroll} from 'react-scroll'

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    <Link to="cta" smooth={true} offset={50} duration={200}>
      Hable con nuestro equipo hoy
      </Link>
  </button>
);

export default Button;
