import PropTypes from 'prop-types';
import { FormButton } from './FormButton';

export const ModularForm = ({ title, description, onSubmit, className, children }) => (
    <section className={`w-full h-full p-4 md:p-6 bg-white border border-primary-light-active rounded-2xl shadow-lg ${className}`}>
        <div className='flex flex-col gap-4 mb-6'>
            <h1 className='text-3xl md:text-4xl font-semibold tracking-tight'>{title}</h1>
            <p className='text-md text-dimmed'>{description}</p>
        </div>
        <form onSubmit={onSubmit} className="h-full w-full space-y-4 pt-4">
            {children}
            <FormButton type="submit">Submit</FormButton>
        </form>
    </section>
);

ModularForm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
};