import { useState } from 'react';
import circlePlusImg from '../../images/circlePlus.svg';
import circleMinusImg from '../../images/circleMinus.svg';
import PropTypes from 'prop-types';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200 pb-6 md:pb-8">
            <button className="flex justify-between items-center w-full pt-6 text-left" onClick={onToggle}>
                <span className="font-medium text-lg">{title}</span>
                {isOpen ? (
                    <img src={circleMinusImg} alt="circle minus" className="h-5 w-5 text-gray-500" />
                ) : (
                    <img src={circlePlusImg} alt="circle plus" className="h-5 w-5 text-gray-500" />
                )}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                <div className="pt-4 pr-8 text-md text-dimmed">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full mx-auto">
            {items?.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
}

Accordion.propTypes = {
    items: PropTypes.array
}