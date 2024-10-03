import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';
import brandName from '../../images/brandName.svg';
import { HOME_PATH } from '../../routes';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { NavbarButtons } from './NavbarButtons';

export function Header({ menuOpen, toggleMenu }) {
    return (
        <>
            <nav className="fixed top-0 w-full h-fit px-5 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-5 flex justify-between items-center flex-wrap z-50">
                <Link to={HOME_PATH} className="px-2 md:px-3 py-3 md:py-3.5 flex gap-1 bg-white rounded-xl shadow border border-light-active">
                    <img src={logoImg} alt="logo" className="h-3.5 md:h-4" />
                    <img src={brandName} alt="brand name" className="h-3.5 md:h-4" />
                </Link>
                <div className='flex md:hidden'>
                    <button onClick={toggleMenu} className='p-2 px-2.5 bg-white rounded-xl'>
                        <Menu />
                    </button>
                </div>
                <div className="hidden md:flex justify-start items-center gap-2">
                    <NavbarButtons />
                </div>
            </nav>
            <MobileMenu isOpen={menuOpen} />
        </>
    )
}

Header.propTypes = {
    menuOpen: PropTypes.bool,
    toggleMenu: PropTypes.func
}