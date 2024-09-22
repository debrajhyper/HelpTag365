import PropTypes from 'prop-types';
import ellipseGroupImg from '../../images/ellipseGroup.svg';
import backgroundGridImg from '../../images/backgroundGrid.svg';

export const ProcessCard = ({ image, imageHeight, imgPosition, title, subTitle }) => {
    const position =
        imgPosition === 'top' ? 'justify-center items-start'
            : imgPosition === 'bottom' ? 'justify-center items-end'
                : 'justify-center items-center'

    return (
        <div className='w-full h-full bg-primary-light border border-primary-light-active rounded-3xl overflow-hidden'>
            <div className={`relative h-[206px] flex ${position}`}>
                <img src={backgroundGridImg} alt="img" className='w-auto h-full mx-auto object-contain' />
                {title === 'Step 03 - Connect' && <img src={ellipseGroupImg} alt="img" className='absolute w-auto h-full mx-auto object-contain' />}
                <div className={`absolute w-auto h-${imageHeight}`}>
                    <img src={image} alt="img" className='w-auto h-full mx-auto object-contain' />
                </div>
            </div>
            <div className='bg-white p-4 border-t border-t-inherit'>
                <h2 className='font-semibold'>{title}</h2>
                <p className='text-sm text-dimmed line-clamp-1'>{subTitle}</p>
            </div>
        </div>
    )
}

ProcessCard.propTypes = {
    image: PropTypes.string.isRequired,
    imageHeight: PropTypes.string,
    imgPosition: PropTypes.oneOf(['top', 'bottom', 'center']),
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}