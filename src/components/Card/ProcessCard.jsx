import PropTypes from 'prop-types';

export const ProcessCard = ({ image, imgPosition, title, subTitle }) => {
    const position =
        imgPosition === 'top' ? 'justify-center items-start'
            : imgPosition === 'bottom' ? 'justify-center items-end'
                : 'justify-center items-center'

    return (
        <div className='w-full h-full bg-primary-light border border-primary-light-active rounded-3xl overflow-hidden'>
            <div className={`h-[206px] flex ${position}`}>
                <div className='w-auto h-36'>
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
    imgPosition: PropTypes.oneOf(['top', 'bottom', 'center']),
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}