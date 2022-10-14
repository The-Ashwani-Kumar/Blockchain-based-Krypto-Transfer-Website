import React from "react";
import { FaFacebookSquare, FaGithub, FaInstagram, FaYoutube, FaTwitterSquare } from 'react-icons/fa';
import logo from "../../images/logo.png";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

const iconStyles = { color: "white", fontSize: "1.5em" };
const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
        </div>
        
        <div className="flex flex-1 justify-center items-center flex-wrap sm:mt-0 mt-5 w-full">
            <a href='https://www.facebook.com/people/Ashwani-Kumar/100009356696714/' className="p-2 hover:p-3 hover:bg-black" rel="noreferrer" target='_blank'>
                <FaFacebookSquare style={iconStyles} />              
            </a>
            <a href='https://github.com/The-Ashwani-Kumar/' className="p-2 hover:p-3 hover:bg-black" rel="noreferrer" target='_blank'>
                <FaGithub style={iconStyles} /> 
            </a>
            <a href='https://www.instagram.com/_the_ashwani_/' className="p-2 hover:p-3 hover:bg-black" rel="noreferrer" target='_blank'>
                <FaInstagram style={iconStyles} /> 
            </a>
            <a href='https://www.youtube.com/channel/UCtK9EB5kM9Q2F-VkkG4mmBA' className="p-2 hover:p-3 hover:bg-black" rel="noreferrer" target='_blank'>
                <FaYoutube style={iconStyles} /> 
            </a>
            <a href='https://twitter.com/The_Ashwani_K' className="p-2 hover:p-3 hover:bg-black" rel="noreferrer" target='_blank'>
                <FaTwitterSquare style={iconStyles} /> 
            </a>
        </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm white-glassmorphism hover:bg-white hover:text-black px-4 py-1 text-center font-medium mt-2">
        <Mailto email="ashwanikumar26102001@gmail.com" subject="Query in Krypto" body="Hey there !">
          ashwanikumar26102001@gmail.com
        </Mailto>
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />    {/* Horizontal Line */}

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">&copy;TheAshwaniKumar2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;