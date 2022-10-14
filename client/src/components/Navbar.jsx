import logo from '../../images/logo.png';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import React from 'react';

const NavbarItem = ({title,classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);
    
    const scrollToBottom = () => {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0, 
            behavior: 'smooth',
        })
    };

    return (
        <div className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="Logo" className='w-32 cursor-pointer'/>
            </div>
            <ul className='mx-10 text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                <a href='https://www.futuremarketinsights.com/reports/blockchain-market' className='my-2 rounded-full mx-5 p-2 hover:text-xl hover:bg-white hover:text-black hover:px-5' target="_blank" rel="noreferrer">
                    Market
                </a>
                <a href='https://ethereum.org/en/what-is-ethereum/' className='my-2 rounded-full mx-5 p-2 hover:text-xl hover:bg-white hover:text-black hover:px-5' target="_blank" rel="noreferrer">
                    Ethereum
                </a>
                <button
                            type='button' onClick={scrollToBottom}
                            className='flex flex-row justify-center items-center my-2 p-2 rounded-full cursor-pointer'>
                            <p className='text-white text-base  rounded-full mx-5 p-2 hover:text-xl hover:bg-white hover:text-black hover:px-5'> Contact us </p>
                </button>
            </ul>
            <div className='flex relative'>
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className='text-white md-hidden cursor-pointer' onClick={()=>setToggleMenu(false)}/>
                        : <HiMenuAlt4 fontSize={28} className='text-white md-hidden cursor-pointer' onClick={()=>setToggleMenu(true)}/>
                    }
                    {toggleMenu && (
                        <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                                       flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                            <li className='text-xl w-full my-2'>
                                <AiOutlineClose onClick={()=>setToggleMenu(false)}/>
                            </li>
                            <a href='https://www.futuremarketinsights.com/reports/blockchain-market' className='my-3 px-10 hover:px-20 white-glassmorphism rounded-full mx-5 p-2 hover:text-xl' target="_blank" rel="noreferrer">
                                Market
                            </a>
                            <a href='https://ethereum.org/en/what-is-ethereum/' className='my-3 px-10 hover:px-20 white-glassmorphism rounded-full mx-5 p-2 hover:text-xl' target="_blank" rel="noreferrer">
                                Ethereum
                            </a>
                            <button type='button' onClick={scrollToBottom}>
                                <p className='px-10 hover:px-20 my-3 white-glassmorphism text-white text-base rounded-full mx-5 p-2 hover:text-xl'> Contact us </p>
                            </button>
                        </ul>
                    )}
            </div>
        </div>
    );
}

export default Navbar;