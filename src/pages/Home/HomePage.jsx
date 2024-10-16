import Slider from "react-slick";
import tickImg from '../../images/tick.svg';
import { companiesImg, pricingCards, processCards, services, sliderSettings } from '../../constants';
import { Badge, BorderSection, GradientSection, ProcessCard, QRSection, OurTeam, HeroBgSection, WhyChooseHelptag365, ServiceBadge, TrialButton } from '../../components';

export function HomePage() {
    return (
        <main className='w-full h-full px-2.5 md:px-8 overflow-hidden'>
            <HeroBgSection>
                <div className="grid justify-center justify-items-center gap-8 md:gap-20">
                    <div className="max-w-full md:max-w-[52rem] text-center space-y-6">
                        <Badge text="10K+ Users | 100% Satisfaction" wrapperClassName='mx-auto !border-primary-light-hover' textClassName='!text-primary-dark !normal-case' />
                        <h1 className="text-primary-darker text-5xl md:text-7xl font-semibold tracking-tight !leading-tight">
                            In an Emergency, <br /> Help is One Scan Away
                            {/* We are your only buddy <br /> at times of need in traffic! */}
                        </h1>
                        <p className="text-md font-medium text-dimmed mt-2 md:mt-4">
                            Whether your car is in trouble or passengers are at risk, ensure immediate contact with emergency
                            services, family, or roadside assistance—all just one scan away.
                        </p>
                    </div>
                    <div className="text-center mb-0 w-full">
                        {/* <button className="w-full sm:w-fit 'drop-shadow-md' py-3 px-8 rounded-xl bg-primary-normal hover:bg-primary-normal-hover text-white cursor-pointer">
                            Get a FREE trial
                        </button> */}
                        <TrialButton />
                        <p className="text-sm text-dimmed mt-5">365 Days  |  No credit card require!</p>
                    </div>
                </div>
            </HeroBgSection>
            <section className='relative w-full p-4 md:p-8 py-16 md:py-12 grid grid-flow-row-dense grid-cols-3 md:grid-cols-11 gap-0'>
                <p className='flex col-span-1 md:col-span-2 text-lg text-dimmed items-center whitespace-nowrap'>
                    Featured on
                </p>
                <div className='col-span-2 md:col-span-9 w-screen overflow-hidden relative'>
                    <div className="w-full h-full absolute">
                        <div className="w-1/6 h-full absolute z-10 left-0" style={{ background: 'linear-gradient(to right, #ffffff 0%, #ffffff00 100%)' }}></div>
                    </div>
                    <div className='flex justify-start items-center gap-14 animate-smooth-scroll-mobile md:animate-smooth-scroll opacity-80'>
                        {
                            [...companiesImg, ...companiesImg, ...companiesImg, ...companiesImg].map((img, index) => (
                                <img key={index} src={img} alt="company" className='w-auto h-fit object-contain' />
                            ))
                        }
                    </div>
                </div>
            </section>
            <GradientSection wrapperClassName='!py-0' className='flex flex-col justify-center items-center gap-6'>
                <Badge text="Our Services" />
                {/* <h1 className='text-5xl font-semibold tracking-tight text-center'>Revolutionizing Automotive <br /> Safety and Communication</h1> */}
                <h1 className='text-3xl md:text-5xl font-semibold tracking-tight !leading-tight text-center'>Proprietary Next <br /> Generation Intelligent</h1>
                <p className='text-md font-medium text-dimmed text-center'>We’re all in one solution buddy in traffic whenever, wherever you need! Help is just a scan away.</p>
            </GradientSection>
            <section className=" overflow-hidden relative pt-0 md:pt-0 mb-0 md:mb-12">
                {/* {services.map((service, index) => (
                    <div key={index} className="w-full mb-5 overflow-hidden">
                        <div className={`inline-flex gap-5 whitespace-nowrap ${index % 2 === 0 ? 'animate-smooth-scroll' : 'animate-smooth-scroll-reverse'} hover:pause`}>
                            {[...service, ...service].map((item, itemIndex) => (
                                <span
                                    key={itemIndex}
                                    className='px-4 py-1.5 bg-primary-light text-primary-dark text-sm rounded-full whitespace-nowrap'
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))} */}
                <div className="w-full h-full absolute">
                    <div className="w-1/12 md:w-1/6 h-full absolute z-10 left-0" style={{ background: 'linear-gradient(to right, #ffffff 0%, #ffffff00 100%)' }}></div>
                    <div className="w-1/12 md:w-1/6 h-full absolute z-10 right-0" style={{ background: 'linear-gradient(to left, #ffffffff 0%, #ffffff00 100%)' }}></div>
                </div>
                <div className='flex justify-start items-center gap-6 animate-smooth-scroll-mobile md:animate-smooth-scroll'>
                    {
                        services.map((service, index) => (
                            <ServiceBadge key={index} {...service} />
                        ))
                    }
                </div>
            </section>
            <WhyChooseHelptag365 wrapperClassName='pt-20' />
            <QRSection />
            {/* <BorderSection className='flex flex-col gap-12'>
                <div className='flex flex-col justify-between items-center gap-8'>
                    <Badge text="Process" />
                    <h1 className='text-4xl md:text-5xl font-semibold tracking-tight'>How It Works?</h1>
                    <p className='text-dimmed text-center'>At Helptag 365, we specialize in providing innovative QR sticker solutions designed to enhance safety and streamline communication for the automotive industry. Our cutting-edge technology ensures that you can connect with car owners effortlessly, without compromising on privacy.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    {
                        processCards.map((process, index) => <ProcessCard key={index} {...process} />)
                    }
                </div>
            </BorderSection> */}
            <GradientSection className='!px-0 !py-0'>
                <div className='px-4 md:p-16 py-12 md:py-16 space-y-12 text-center pb-12 md:pb-16'>
                    <div className='flex flex-col justify-center items-center gap-6'>
                        <Badge text='How it works' />
                        <h2 className='text-4xl md:text-5xl font-semibold tracking-tight !leading-tight'>Truly Simple and <br />Super Easy Process</h2>
                        <p className='text-md font-medium text-dimmed'>Simple steps to activate your vehicle safety system.</p>
                    </div>
                    {/* <button className="w-full sm:w-fit py-2 px-8 rounded-xl bg-primary-normal hover:bg-primary-normal-hover text-white cursor-pointer">
                        Get a FREE trial
                    </button> */}
                    <TrialButton />
                </div>
                <div className='hidden md:grid px-8 grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        processCards.map((process, index) => <ProcessCard key={index} {...process} />)
                    }
                </div>
                <Slider className='grid md:hidden' {...sliderSettings}>
                    {
                        processCards.map((process, index) => <ProcessCard key={index} {...process} />)
                    }
                </Slider>
            </GradientSection>
            {/* <GradientSection className='flex flex-col md:flex-row justify-between items-center gap-12 my-10'>
                <div className='px-4 flex flex-col justify-between items-center md:items-start gap-12'>
                    <Badge text='Reviews' />
                    <div className='flex flex-col justify-between items-start gap-6'>
                        <h1 className='text-4xl md:text-5xl font-semibold tracking-tight text-center md:text-start'>Customer feedback</h1>
                        <p className='text-dimmed text-center md:text-start'>At Helptag 365, we specialize in providing innovative QR sticker solutions designed to enhance safety and streamline communication for the automotive industry.</p>
                    </div>
                    <button className="w-full sm:w-fit py-2 px-4 border-2 rounded-xl bg-white hover:bg-primary-normal-hover border-primary-normal-hover text-primary-normal-hover hover:text-white cursor-pointer">
                        Get a FREE trial
                    </button>
                </div>
                <div className="container mx-auto w-full overflow-hidden relative">
                    <div className="w-full h-full absolute">
                        <div className="w-1/6 h-full absolute z-10 left-0" style={{ background: 'linear-gradient(to right, #ffffffa8 0%, #ffffff00 100%)' }}></div>
                        <div className="w-1/6 h-full absolute z-10 right-0" style={{ background: 'linear-gradient(to left, #ffffffa8 0%, #ffffff00 100%)' }}></div>
                    </div>
                    <div className="w-fit flex items-center justify-between gap-6 animate-carousel-scroll hover:pause">
                        {
                            reviewCards.map((review, index) => <ReviewCard key={index} {...review} />)
                        }
                    </div>
                </div>
            </GradientSection> */}
            <BorderSection className='!p-0.5 bg-gradient-to-b from-primary-light-active  to-transparent border-none'>
                <div className='bg-white rounded-[1.9rem] md:rounded-[3.3rem] p-0'>
                    <div className='w-full px-2 md:px-16 py-12 md:py-16 flex flex-col justify-between items-center gap-12 text-center'>
                        <Badge text='Reviews' />
                        <div className='flex flex-col justify-between items-center gap-6'>
                            <h1 className='text-4xl md:text-5xl font-semibold tracking-tight !leading-tight'>Thousands of Customers <br />are Happy with HelpTag365</h1>
                            <p className='max-w-5xl text-md font-medium text-dimmed'>At Helptag 365, we specialize in providing innovative QR sticker solutions designed to enhance safety and streamline communication for the automotive industry.</p>
                        </div>
                        <TrialButton />
                    </div>
                </div>
            </BorderSection>
            <GradientSection className='flex flex-col justify-between items-center gap-12'>
                <div className='flex flex-col justify-between items-center gap-8'>
                    <Badge text="Pricing" />
                    <h1 className='text-4xl md:text-5xl font-semibold tracking-tight text-center'>Stay Safe for Just ₹199<span className='text-3xl font-medium'>/Year</span></h1>
                    <p className='text-md font-medium text-dimmed text-center'>Ensure peace of mind for you and your loved ones, no matter where the road takes you.</p>
                </div>
                <div className='w-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12'>
                    {
                        pricingCards.map((pricing, index) => (
                            <BorderSection key={index} wrapperClassName='max-w-md !p-0' className={`!p-6 !rounded-3xl grid gap-6 ${index === 0 ? 'border-primary-normal' : ''}`}>
                                <div className='space-y-2'>
                                    <p className='text-dimmed text-md font-medium'>{pricing.type}<span className='text-xs font-medium'>{pricing?.typeDesc}</span></p>
                                    <h2 className='font-semibold text-3xl'>{pricing.price}<span className='text-sm font-medium'>{pricing?.per}</span></h2>
                                    <p className='text-md font-medium text-dimmed'>{pricing.description}</p>
                                </div>
                                <div className='space-y-3'>
                                    {
                                        pricing.features.map((feature, i) => (
                                            <span key={i} className='flex'>
                                                <img src={tickImg} alt="check" className='w-5 h-auto mr-2' />
                                                <p className='text-sm font-medium'>{feature}</p>
                                            </span>
                                        ))
                                    }
                                </div>
                                <button className={`full py-2 px-4 border rounded-xl text-md font-medium ${pricing.button.type === 'filled' ? 'bg-primary-normal hover:bg-primary-normal-hover border-primary-normal-hover text-white' : 'border-primary-normal-hover text-primary-normal'} cursor-pointer`}>
                                    {pricing.button.text}
                                </button>
                            </BorderSection>
                        ))
                    }
                </div>
            </GradientSection>
            <OurTeam />
            <QRSection />
        </main>
    )
}
