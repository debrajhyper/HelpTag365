import PropTypes from 'prop-types';

export const FeatureCard = ({ image, title, description, rowSpan = 2 }) => (
    <div className={`w-fit h-fit md:h-full row-span-${rowSpan} p-4 flex flex-col gap-6 bg-primary-light rounded-3xl pb-auto md:pb-16`}>
        <div className='w-full p-3 flex justify-start items-center gap-2 bg-white rounded-lg'>
            <img src={image} alt="communication" className='w-5 h-5' />
            <h3 className='text-xl font-medium break-words'>{title}</h3>
        </div>
        <p className='text-sm text-dimmed'>{description}</p>
    </div>
)

FeatureCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rowSpan: PropTypes.number
}