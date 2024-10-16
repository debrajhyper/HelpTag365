import PropTypes from 'prop-types';

export const ReviewCard = ({ image, title, description, profilePic, name }) => (
    <div className='carousel-focus w-[28rem] p-4 flex flex-col items-start gap-6 bg-white border border-primary-light-active rounded-lg'>
        <span className="flex justify-center items-center gap-1">
            {
                Array(5).fill(0).map((_, i) => (<img key={i} src={image} alt="star" className='w-4' />))
            }
        </span>
        <div className='flex flex-col gap-3'>
            <h1 className='font-semibold'>{title}</h1>
            <p className='text-sm text-dimmed'>{`“${description}”`}</p>
        </div>
        <div className='flex justify-start items-center gap-4'>
            <div className='w-8 h-8 rounded-full border border-primary-light-active overflow-hidden'>
                <img src={profilePic} alt="" className='w-full h-full object-cover' />
            </div>
            <p className='text-xs font-semibold'>{name}</p>
        </div>
    </div>
)

ReviewCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    profilePic: PropTypes.string,
    name: PropTypes.string
}