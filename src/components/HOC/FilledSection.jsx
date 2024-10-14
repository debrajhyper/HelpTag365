import PropTypes from 'prop-types';

export const FilledSection = ({ wrapperClassName, className, children }) => (
    <section className={`px-1 'lg:px-8 xl:px-20' py-12 ${wrapperClassName}`}>
        <div className={`px-4 py-12 md:p-14 bg-primary-light rounded-[2rem] md:rounded-[3.5rem] ${className}`}>
            {children}
        </div>
    </section>
)


FilledSection.propTypes = {
    wrapperClassName: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
}