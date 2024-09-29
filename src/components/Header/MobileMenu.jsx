import PropTypes from 'prop-types';
import { NavbarButtons } from "./NavbarButtons";

export const MobileMenu = ({ isOpen }) => (
    <div className={`fixed h-fit inset-0 pt-20 pb-8 bg-white flex-col items-center justify-center space-y-4 p-5 rounded-bl-3xl rounded-br-3xl shadow-xl ${isOpen ? 'flex z-40' : 'hidden -z-10'}`}>
        <NavbarButtons />
    </div>
)

MobileMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};