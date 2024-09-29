import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, Search } from 'lucide-react';

export const Select = ({
    label,
    id,
    name,
    options,
    placeholder,
    className,
    wrapperClassName,
    value,
    onChange,
    required,
    search,
    disabled
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    const baseSelectClasses = `
        w-full 
        p-3.5
        pr-10
        border-2 
        border-primary-light-active 
        focus-visible:outline-none 
        focus:border-primary-normal 
        focus-visible:border-primary-normal 
        active:border-primary-normal 
        rounded-xl 
        bg-white
        appearance-none
        cursor-pointer
        transition-colors
        ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}
    `;

    const mergedClasses = twMerge(baseSelectClasses, className);

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelectClick = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className={twMerge("mb-4", wrapperClassName)}>
            {label && (
                <label htmlFor={id} className={`block text-md font-semibold mb-2 ${disabled ? 'text-gray-400' : ''}`}>
                    {label}{required ? '*' : ''}
                </label>
            )}
            <div className="relative" ref={dropdownRef}>
                <div className={mergedClasses} onClick={handleSelectClick}>
                    {value ? options.find(opt => opt.value === value)?.label : placeholder}
                </div>
                <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none ${disabled ? 'opacity-60' : ''}`} size={20} />
                {isOpen && !disabled && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                        {
                            search && <div className="p-2 border-b">
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full p-1.5 pr-8 border rounded-md bg-inherit"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>
                        }
                        <ul className="max-h-60 overflow-auto">
                            {filteredOptions.map((option) => (
                                <li
                                    key={option.value}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        onChange({ target: { name, value: option.value } });
                                        setIsOpen(false);
                                        setSearchTerm('');
                                    }}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

Select.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    search: PropTypes.bool,
    disabled: PropTypes.bool
};

Select.defaultProps = {
    className: '',
    wrapperClassName: '',
    required: false,
    disabled: false
};

export default Select;