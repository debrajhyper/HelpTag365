import PropTypes from 'prop-types';
import backgroundGridHeaderImg from '../../images/backgroundGridHeader.svg';

export const HeroBgSection = ({ sectionClassName, children, grid }) => (
    <section className={`relative hero-gradient pb-16 ${sectionClassName}`}>
        <div className="absolute inset-0 hero-gradient"></div>
        {
            grid &&
            <div className="absolute inset-0 z-10 flex justify-center items-center">
                <img src={backgroundGridHeaderImg} className='w-auto h-full mx-auto object-cover' />
            </div>
        }
        <div className='relative z-20 p-4 md:p-10 pt-24 md:pt-28 mx-auto '>
            {children}
        </div>
    </section>
)

HeroBgSection.propTypes = {
    sectionClassName: PropTypes.string,
    children: PropTypes.node,
    grid: PropTypes.bool
};