import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';
import brandName from '../../images/brandName.svg';
import { HOME_PATH, CONTACT_US_PATH } from '../../routes';

export function Header() {
    return (
        <nav className="fixed top-0 w-full h-fit px-16 py-5 justify-between items-center inline-flex z-50">
            <Link to={HOME_PATH} className="px-3 py-4 flex gap-1 bg-white rounded-xl shadow border border-light-active">
                <img src={logoImg} alt="logo" />
                <img src={brandName} alt="brand name" />
            </Link>
            <div className="justify-start items-center gap-2 flex">
                <button className="p-3 bg-white opacity-50 text-darker text-sm font-normal line-through rounded-xl shadow-main">
                    Register
                </button>
                <Link to={CONTACT_US_PATH} className="p-3 bg-white text-darker text-sm font-normal rounded-xl shadow-main">
                    Contact us
                </Link>
                <button className="px-8 py-3 bg-primary-normal text-white text-sm font-semibold rounded-xl shadow-main">
                    Get a FREE trial
                </button>
            </div>
        </nav>
    )
}
