import { Link, useLocation } from 'react-router-dom';
import { CONTACT_US_PATH, ABOUT_PATH, REGISTER_PATH } from '../../routes';

const navbarLinks = [
    { title: 'About us', path: ABOUT_PATH },
    { title: 'Contact us', path: CONTACT_US_PATH },
    { title: 'Register', path: REGISTER_PATH },
];

export function NavbarButtons() {
    const location = useLocation();

    const getLinkStyles = (path) => {
        const baseStyles = "w-full md:w-auto p-3 px-6 bg-white text-darker text-sm font-normal rounded-xl shadow-main text-center";
        const activeStyles = "opacity-50 line-through";
        return `${baseStyles} ${location.pathname === path ? activeStyles : ''}`;
    };

    return (
        <>
            {
                navbarLinks.map(({ title, path }, index) => (
                    <Link key={index} to={path} className={getLinkStyles(path)}>
                        {title}
                    </Link>
                ))
            }
            {/* <Link to={REGISTER_PATH} className="w-full md:w-auto px-8 py-3 bg-white hover:bg-primary-normal-hover border border-primary-normal-hover text-primary-normal hover:text-white text-sm font-semibold rounded-xl shadow-main text-center">
                Register
            </Link> */}
            <button className="w-full md:w-auto px-8 py-3 bg-primary-normal hover:bg-primary-normal-hover border border-primary-normal-hover text-white text-sm font-semibold rounded-xl shadow-main">
                Get a FREE trial
            </button>
        </>
    )
};