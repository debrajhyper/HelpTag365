import PropTypes from 'prop-types';

export const Badge = ({ text, wrapperClassName, textClassName }) => (
    <div className={`px-4 py-2 w-fit rounded-full border-2 border-primary-light bg-white ${wrapperClassName}`}>
        <p className={`text-xs font-[500] text-primary-normal uppercase ${textClassName}`}>{text}</p>
    </div>
)


Badge.propTypes = {
    text: PropTypes.string,
    wrapperClassName: PropTypes.string,
    textClassName: PropTypes.string
}