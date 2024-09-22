import PropTypes from 'prop-types';
import { Check } from 'lucide-react';

export const Checkbox = ({ label, id, name, className, wrapperClassName, isChecked, toggleCheckbox, required }) => (
    <div className={`mb-4 ${wrapperClassName}`}>
        <label className="flex items-center">
            <div className="relative">
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    checked={isChecked}
                    onChange={toggleCheckbox}
                    className="sr-only"
                    required={required}
                />
                <div className={`mr-2 w-5 h-5 border-2 border-primary-light-active rounded-md bg-white transition-colors cursor-pointer ${isChecked ? 'bg-primary-normal border-primary-normal' : ''} ${className}`}>
                    {isChecked && <Check size='100%' />}
                </div>
            </div>
            <span className="text-md text-dimmed">{label}</span>
        </label>
    </div>
);

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    isChecked: PropTypes.bool.isRequired,
    toggleCheckbox: PropTypes.func.isRequired,
    required: PropTypes.bool
};