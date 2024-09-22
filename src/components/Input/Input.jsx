import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export const Input = ({ label, id, name, type, placeholder, className, wrapperClassName, value, onChange, required }) => {
    const baseInputClasses = `
        w-full 
        p-3.5
        border-2 
        border-primary-light-active 
        focus-visible:outline-none 
        focus:border-primary-normal 
        focus-visible:border-primary-normal 
        active:border-primary-normal 
        rounded-xl 
        bg-white
    `;

    const mergedClasses = twMerge(baseInputClasses, className);
    
    return (
        <div className={twMerge("mb-4", wrapperClassName)}>
            {label && <label htmlFor={id} className="block text-md font-semibold mb-2">{label}{required ? '*' : ''}</label>}
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={mergedClasses}
                required={required}
            />
        </div>
    )
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool
};