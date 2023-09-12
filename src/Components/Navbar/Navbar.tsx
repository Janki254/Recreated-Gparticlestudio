import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '../../Assets/svgs/CloseIcon';
import ToggleMenu from '../../Assets/svgs/ToggleMenu';
import Navlinks from './Navlinks';

export type LinkItem = {
    id: string;
    title: string;
};
const nav_links = [
    {id: '_home', title: 'Home'},
    {id: '_about', title: 'About'},
    {id: '_services', title: 'Services'},
    {id: '_portfolio', title: 'Portfolio'},
    {id: '_blogs', title: 'Blogs'},
];
const Navbar: React.FC = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const [isMobileNavbarActive, setIsMobileNavbarActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsNavbarActive(true);
                if (window.scrollY > 800) {
                    setIsMobileNavbarActive(true);
                } else {
                    setIsMobileNavbarActive(false);
                }
            } else {
                setIsNavbarActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <header
                className={`header_styles w-full z-30 ${
                    isNavbarActive ? 'active' : ''
                }`}
            >
                {/* Horizontal Navigation */}
                <div className='navbar hidden md:block' id='navbar'>
                    <div className='nav_container h-16 md:h-20'>
                        {/* Logo */}
                        <Link to='/' className='logo'>
                            <h1 className='logo_img'>
                                <img rel='icon' src='/favicon.ico' />
                            </h1>
                            <span className='logo_text ml-pz'>particle</span>
                        </Link>
                        <div className='md:flex justify-between items-center grow'>
                            {/* NavLinks */}
                            <Navlinks navLinks={nav_links} />
                            {/* Contact Button */}
                            <Link
                                to='#contacts'
                                className='transition ease-in-out delay-150 bg-amber-500  hover:scale-110 hover:bg-orange-400 duration-300 px-4 py-3 rounded-full !text-white'
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Toggle Button */}
                <div className='toggle_menu py-2 pl-4 md:hidden '>
                    <button
                        onClick={toggleMobileMenu}
                        className={`${
                            isMobileNavbarActive
                                ? 'text-slate-700'
                                : 'text-white'
                        } p-2 focus:outline-none`}
                    >
                        <ToggleMenu />
                    </button>
                </div>

                {/* Backdrop */}
                {isMobileMenuOpen && (
                    <div
                        onClick={toggleMobileMenu}
                        className='fixed inset-0 bg-slate-400 bg-opacity-50 z-10 md:hidden'
                    ></div>
                )}

                {/* Vertical Navigation */}
                <div
                    className={`verticle_nav fixed top-0 bottom-0 left-0 h-screen w-60 transform transition-transform duration-300 ease-in-out md:hidden ${
                        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-20`}
                    
                >
                    <div className='p-4 space-y-16'>
                        <div className='flex justify-end'>
                            <button
                                onClick={toggleMobileMenu}
                                className={`text-white focus:outline-none`}
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        <Navlinks
                            navLinks={nav_links}
                            sidebar_handler={isMobileMenuOpen}
                        />
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Navbar;
