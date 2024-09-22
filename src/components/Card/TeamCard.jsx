import PropTypes from 'prop-types';

export const TeamCard = ({ image, name, title, description }) => (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='w-full h-[18rem] rounded-3xl overflow-hidden'>
            <img src={image} className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col justify-start items-start gap-1'>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <h4 className='text-dimmed'>{title}</h4>
            <p className='text-dimmed mt-2'>{description}</p>
        </div>
    </div>
)

TeamCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}