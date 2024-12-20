import PropTypes from 'prop-types';
import ellipseGroupImg from '../../images/ellipseGroup.svg';
import backgroundGridImg from '../../images/backgroundGrid.svg';

// eslint-disable-next-line no-unused-vars
export const ProcessCard = ({ image, imageHeight, imgPosition, title, subTitle }) => {
    const position =
        imgPosition === 'top' ? 'justify-center items-start'
            : imgPosition === 'bottom' ? 'justify-center items-end'
                : 'justify-center items-center'

    return (
        // <div className='w-full h-full bg-primary-light border border-primary-light-active rounded-3xl overflow-hidden'>
        //     <div className={`relative h-[206px] flex ${position}`}>
        //         <img src={backgroundGridImg} alt="img" className='w-auto h-full mx-auto object-contain' />
        //         {title === 'Step 03 - Connect' && <img src={ellipseGroupImg} alt="img" className='absolute w-auto h-full mx-auto object-contain' />}
        //         <div className={`absolute w-auto h-${imageHeight}`}>
        //             <img src={image} alt="img" className='w-auto h-full mx-auto object-contain' />
        //         </div>
        //     </div>
        //     <div className='bg-white p-4 border-t border-t-inherit'>
        //         <h2 className='font-semibold'>{title}</h2>
        //         <p className='text-sm text-dimmed line-clamp-1'>{subTitle}</p>
        //     </div>
        // </div>
        <div className='mx-3 md:mx-0 mb-4 md:mb-0 space-y-2'>
            <div className='p-4 bg-white border border-primary-light-hover rounded-3xl overflow-hidden'>
                <div className={`relative h-[206px] bg-[#F8F8FF] rounded-xl flex ${position} overflow-hidden`}>
                    {/* <img src={backgroundGridImg} alt="img" className='w-auto h-full mx-auto object-contain' /> */}
                    {title === 'Step 03 - Connect' && <img src={ellipseGroupImg} alt="img" className='absolute w-auto h-full mx-auto object-contain' />}
                    <div className={`absolute w-auto h-${imageHeight} overflow-hidden`}>
                        <img src={image} alt="img" className='w-auto h-full mx-auto object-contain' />
                    </div>
                </div>
            </div>
            <div className='bg-white p-4 border border-primary-light-hover rounded-2xl text-center'>
                <h2 className='font-semibold'>{title}</h2>
                {/* <p className='text-sm text-dimmed line-clamp-1'>{subTitle}</p> */}
            </div>
        </div>
    )
}

ProcessCard.propTypes = {
    image: PropTypes.string,
    imageHeight: PropTypes.number,
    imgPosition: PropTypes.oneOf(['top', 'bottom', 'center']),
    title: PropTypes.string,
    subTitle: PropTypes.string
}