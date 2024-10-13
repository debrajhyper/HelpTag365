import PropTypes from 'prop-types';

export const Badge = ({ text, className }) => (
    <div className={`px-4 py-2 w-fit rounded-full border-2 border-primary-light-hover bg-white ${className}`}>
        <p className="text-xs font-semibold text-primary-dark">{text}</p>
    </div>
)


Badge.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string
}