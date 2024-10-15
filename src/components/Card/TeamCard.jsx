import PropTypes from 'prop-types';

export const TeamCard = ({ image, name, title, description }) => (
    <div className='w-full p-4 border border-primary-light-hover rounded-3xl bg-white space-y-6'>
        <div className='w-full h-[20rem] rounded-2xl overflow-hidden'>
            <img src={image} className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col justify-start items-start text-start gap-1'>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <h4 className='text-md font-medium text-dimmed'>{title}</h4>
            <p className='text-md font-medium text-dimmed mt-2'>{description}</p>
        </div>
    </div>
)

TeamCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}