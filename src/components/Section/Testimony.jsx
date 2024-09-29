import PropTypes from 'prop-types';
import starImg from '../../images/star.svg';

export const Testimony = ({ wrapperClassName, startClassName }) => (
    <div className={`max-w-[45rem] hidden md:flex mt-20 text-center flex-col gap-5 ${wrapperClassName}`}>
        <span className={`flex justify-center items-center gap-1 ${startClassName}`}>
            {
                Array(5).fill(0).map((_, i) => (<img key={i} src={starImg} alt="star" className='w-4' />))
            }
        </span>
        <p>
            “Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.”
        </p>
        <p className='text-sm text-dimmed'>
            — Rohan Desai
        </p>
    </div>
)

Testimony.propTypes = {
    wrapperClassName: PropTypes.string,
    startClassName: PropTypes.string
}