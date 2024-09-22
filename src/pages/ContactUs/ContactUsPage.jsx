import { useState } from 'react';
import { MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../../routes';
import { SubContent } from './SubContent';
import { Checkbox, Input, ModularForm, Textarea } from '../../components';

const defaultFormData = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
    terms: false
}

export function ContactUsPage() {
    const [contactFormData, setContactFormData] = useState(defaultFormData);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
    }

    const handleCheckboxChange = (e) => {
        setContactFormData({ ...contactFormData, [e.target.name]: e.target.checked });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactFormData);
        setContactFormData(defaultFormData);
    }

    return (
        <main className='w-full px-2.5 md:px-8'>
            <section className="hero-gradient p-4 md:p-10 pt-24 md:pt-32 relative">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 gap-10 xl:gap-20">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-y-10 md:gap-y-16">
                        <button onClick={() => navigate(HOME_PATH)} className='flex justify-start items-center gap-1 text-primary-normal tracking-tight text-sm cursor-pointer'>
                            <MoveLeft size={18} />
                            <p>Back to home</p>
                        </button>
                        <div className='flex flex-col justify-center items-start gap-4'>
                            <h1 className='text-4xl md:text-5xl font-semibold tracking-tight text-primary-darker'>Contact Us</h1>
                            <p className='text-md text-dimmed'>We’d love to hear from you! Please fill and submit the form below and we will reach out to you shortly.</p>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-2 md:gap-4 text-primary-dark underline'>
                            <p className='cursor-pointer'>helptag365@gmail.com</p>
                            <p className='cursor-pointer'>+91 87994 55365</p>
                        </div>
                        <div className='hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-8'>
                            <SubContent />
                        </div>
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-1 xl:px-8'>
                        <ModularForm title="Get in touch" description="You can reach us anytime 24/7." onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-x-4 gap-y-2 md:gap-y-4'>
                                <Input label="First name" id="firstName" name="firstName" type="text" placeholder="Your first name" value={contactFormData.firstName} onChange={handleChange} required />
                                <Input label="Last name" id="lastName" name="lastName" type="text" placeholder="Your last name" value={contactFormData.lastName} onChange={handleChange} required />
                                <Input wrapperClassName='col-span-2' label="Email address" id="email" name="email" type="email" placeholder="example@gmail.com" value={contactFormData.email} onChange={handleChange} required />
                                <Input wrapperClassName='col-span-2' label="Mobile number" id="mobile" name="mobile" type="number" placeholder="+91 00000 00000" value={contactFormData.mobile} onChange={handleChange} required />
                                <Textarea wrapperClassName='col-span-2' label="Description" id="message" name="message" placeholder="Please write here that how we can help you?" rows={4} value={contactFormData.message} onChange={handleChange} />
                                <Checkbox wrapperClassName='col-span-2' label="I agree to the terms & conditions." id="terms" name="terms" isChecked={contactFormData.terms} toggleCheckbox={handleCheckboxChange} required />
                            </div>
                        </ModularForm>
                    </div>
                    <div className='grid md:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8'>
                        <SubContent />
                    </div>
                </div>
            </section>
        </main>
    )
}