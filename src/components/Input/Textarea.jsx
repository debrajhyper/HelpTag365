import PropTypes from 'prop-types';

export const Textarea = ({ label, id, name, placeholder, rows, className, wrapperClassName, value, onChange, required }) => (
    <div className={`mb-4 ${wrapperClassName}`}>
        <label htmlFor={id} className="block text-md font-semibold mb-2">{label}{required ? '*' : ''}</label>
        <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className={`w-full p-3.5 border-2 border-primary-light-active focus-visible:outline-none focus:border-primary-normal focus-visible:border-primary-normal active:border-primary-normal rounded-xl bg-white ${className}`}
            required={required}
        />
    </div>
);

Textarea.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool
};