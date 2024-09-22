import PropTypes from 'prop-types';

export const FormButton = ({ type, className, children }) => (
    <button
        type={type}
        className={`w-full p-3 bg-primary-normal text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors ${className}`}
    >
        {children}
    </button>
);

FormButton.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};