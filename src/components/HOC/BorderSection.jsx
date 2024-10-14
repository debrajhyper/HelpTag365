import PropTypes from 'prop-types';

export const BorderSection = ({ wrapperClassName, className, children }) => (
    <section className={`px-1 'lg:px-8 xl:px-20' py-10 ${wrapperClassName}`}>
        <div className={`p-4 md:p-8 bg-white border-2 border-primary-light-active rounded-[2rem] md:rounded-[3.5rem] ${className}`}>
            {children}
        </div>
    </section>
)

BorderSection.propTypes = {
    wrapperClassName: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
}