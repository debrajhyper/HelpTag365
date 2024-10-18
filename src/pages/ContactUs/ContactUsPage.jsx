import { useState, useEffect } from 'react';
import { MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import mapImg from '../../images/map.svg';
import { HOME_PATH } from '../../routes';
import { SubContent } from './SubContent';
import { Checkbox, Input, ModularForm, Textarea, Accordion, QRSection, HeroBgSection } from '../../components';

const defaultFormData = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
    terms: false
}

const accordionItems = [
    {
        title: "Is there a free trial available?",
        content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        title: "Can I change my plan later?",
        content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        title: "What is your cancellation policy?",
        content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        title: "Can other info be added to an invoice?",
        content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        title: "How does billing work?",
        content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        title: "How do I change my account email?",
        content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
];

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <main className='w-full h-full px-2.5 md:px-8 overflow-hidden'>
            <HeroBgSection sectionClassName='!pb-2'>
                <div className="md:pt-4 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 gap-10 xl:gap-20">
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
                        <ModularForm title="Get in touch" description="You can reach us anytime 24/7." submitButtonName='Submit' onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-x-4 gap-y-2 md:gap-y-4'>
                                <Input wrapperClassName='col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1' label="First name" id="firstName" name="firstName" type="text" placeholder="Your first name" value={contactFormData.firstName} onChange={handleChange} required />
                                <Input wrapperClassName='col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1' label="Last name" id="lastName" name="lastName" type="text" placeholder="Your last name" value={contactFormData.lastName} onChange={handleChange} required />
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
            </HeroBgSection>
            <section className='mx-4 md:mx-6 xl:mx-10 my-10 md:my-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16'>
                <div className='w-full h-full md:h-[28rem]'>
                    <img src={mapImg} alt="Map" className='w-full h-full object-contain' />
                </div>
                <div className='space-y-4 md:space-y-8'>
                    <p className='text-sm text-primary-normal'>Our location</p>
                    <h2 className='text-4xl font-semibold'>Connecting near and far</h2>
                    <div className='space-y-2 md:space-y-4'>
                        <p className='font-medium'>Headquarters</p>
                        <p className='text-sm text-dimmed'>Vishalnagar Society
                            <br />Marigold Residency
                            <br />Sarthana, Surat
                            <br />Gujarat, India</p>
                    </div>
                </div>
            </section>
            <section className='py-14 md:py-24 px-4 md:px-8 xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16'>
                <div className='space-y-8'>
                    <p className='text-sm text-primary-normal'>FAQs</p>
                    <div className='space-y-4'>
                        <h2 className='text-5xl font-semibold leading-tight'>Frequently asked questions</h2>
                        <p className='text-sm text-dimmed'>If there are question you want to ask. We’ll answer all your question.</p>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-start items-center gap-3'>
                        <Input wrapperClassName='sm:mb-0 w-full md:2/5 xl:w-2/5' className='p-2.5' id="email" name="email" type="email" placeholder="example@gmail.com" />
                        <button className="w-full sm:w-fit py-2.5 px-8 font-semibold border rounded-xl bg-primary-normal hover:bg-primary-normal-hover border-primary-normal-hover text-white cursor-pointer">
                            Submit
                        </button>
                    </div>
                </div>
                <Accordion items={accordionItems} />
            </section>
            <QRSection />
        </main>
    )
}