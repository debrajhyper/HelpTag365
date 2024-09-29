import PropTypes from 'prop-types';

export const GradientSection = ({ className, children }) => (
    <section className={`p-1 md:p-16 py-12 md:py-16 rounded-[3.5rem] bg-[linear-gradient(0deg,_#FFFFFF_0%,_#EDF4FE_100%)] ${className}`}>
        {children}
    </section>
)

GradientSection.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}