import starImg from '../../images/star.svg';
import { Badge, BorderSection, GradientSection, ProcessCard, ReviewCard, QRSection, OurTeam, HeroBgSection, WhyChooseHelptag365 } from '../../components';
import processQRImg from '../../images/processQR.svg';
import processScanImg from '../../images/processScan.svg';
import processConnectImg from '../../images/processConnect.svg';
import company1Img from '../../images/company1.svg';
import company2Img from '../../images/company2.svg';
import company3Img from '../../images/company3.svg';
import company4Img from '../../images/company4.svg';
import company5Img from '../../images/company5.svg';
import company6Img from '../../images/company6.svg';
import company7Img from '../../images/company7.svg';
import profilePicImg from '../../images/profilePic.svg';
import tickImg from '../../images/tick.svg';

const companiesImg = [company1Img, company2Img, company3Img, company4Img, company5Img, company6Img, company7Img]

const services = [
    ['Lights are on', 'Vehicle is on', '⁠Vehicle alarm is ringing', 'Vehicle in no parking', 'Vehicle wrongly parked', '⁠Vehicle had accident', '⁠Vehicle broke down', 'Vehicle is impounded'],
    ['Pet inside vehicle', 'Child inside vehicle', '⁠Elderly inside vehicle', 'Driver of vehicle is in trouble', 'Vehicle is stolen/misplaced', 'Vehicle fuel empty', 'vehicle on fire'],
    ['Vehicle needs tyre repair', 'Vehicle windows open', 'Driver misbehaving with passenger', 'Driver driving dangerously', 'Driver taking unsafe route', 'Driver keeping car dirty']
]

const processCards = [
    {
        image: processQRImg,
        imageHeight: 36,
        title: 'Step 01 - Attach',
        subTitle: 'Place the QR sticker on your vehicle.',
    },
    {
        image: processScanImg,
        imageHeight: 206,
        imgPosition: 'bottom',
        title: 'Step 02 - Scan',
        subTitle: 'Anyone needing to contact you can scan the QR code with their smartphone.',
    },
    {
        image: processConnectImg,
        imageHeight: 206,
        imgPosition: 'top',
        title: 'Step 03 - Connect',
        subTitle: 'The scanner is directed to a secure platform where they can leave a message or get in touch without accessing your personal details.',
    }
]

const reviewCards = [
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: profilePicImg,
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: profilePicImg,
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: profilePicImg,
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: profilePicImg,
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: profilePicImg,
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: profilePicImg,
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: profilePicImg,
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: profilePicImg,
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: profilePicImg,
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: profilePicImg,
        name: 'Yeshe Hagl',
    },
]

const pricingCards = [
    {
        type: 'For Individual',
        price: '₹199/Year',
        description: 'Ensure peace of mind for you and your loved ones, no matter where the road takes you.',
        features: [
            '24/7 emergency assistance',
            'Real-time alerts and notifications',
            'Privacy-first vehicle monitoring',
            'Easy setup with any vehicle',
            'Hassle-free communication with loved ones',
        ],
        button: {
            text: 'Secure Your Vehicle Now',
            type: 'filled',
        }
    },
    {
        type: 'Partner with Us (for Bulk Safety Solutions)',
        price: 'Request a quote',
        description: 'Empower your customers with reliable vehicle safety at scale.',
        features: [
            'All Individual services',
            'Customizable plans for large fleets',
            'Seamless integration with existing services',
            'Enhanced safety features for all users',
            'Dedicated support for bulk orders',
        ],
        button: {
            text: 'Contact Us',
            type: 'outlined',
        }
    }
]

export function HomePage() {
    return (
        <main className='w-full h-full px-2.5 md:px-8 overflow-hidden'>
            <HeroBgSection>
                <div className="grid justify-center justify-items-center gap-8 md:gap-12">
                    <Badge text="10000+ Users | 100% Satisfaction Rate" />
                    <div className="max-w-full md:max-w-[52rem] text-center">
                        <h1 className="text-primary-darker text-7xl font-semibold tracking-tight leading-tight">
                            In an emergency, <br /> help is one scan away
                            {/* We are your only buddy <br /> at times of need in traffic! */}
                        </h1>
                        <p className="text-md text-dimmed mt-2 md:mt-4">
                            Whether your car is in trouble or passengers are at risk, ensure immediate contact with emergency
                            services, family, or roadside assistance—all just one scan away.
                        </p>
                    </div>
                    <div className="text-center mb-14 md:mb-0">
                        <button className="drop-shadow-md py-2 px-8 border-2 rounded-xl bg-white hover:bg-primary-normal-hover border-primary-normal-hover text-primary-normal-hover hover:text-white cursor-pointer">
                            Get a FREE trial
                        </button>
                        <p className="text-xs text-dimmed mt-5">365 Days  |  No credit card require!</p>
                    </div>
                </div>
            </HeroBgSection>
            <section className='relative w-full p-8 py-12 md:py-16 grid grid-flow-row-dense grid-cols-1 md:grid-cols-8 gap-20'>
                <p className='hidden md:flex col-span-2 text-lg text-dimmed'>
                    Trusted by thousand
                    companies in the world
                </p>
                <div className='col-span-6 w-screen overflow-hidden relative'>
                    <div className="w-full h-full absolute">
                        <div className="w-1/6 h-full absolute z-10 left-0" style={{ background: 'linear-gradient(to right, #ffffff 0%, #ffffff00 100%)' }}></div>
                    </div>
                    <div className='flex justify-start items-center gap-14 animate-smooth-scroll opacity-80'>
                        {
                            [...companiesImg, ...companiesImg].map((img, index) => (
                                <img key={index} src={img} alt="company" className='w-auto h-fit object-contain' />
                            ))
                        }
                    </div>
                </div>
            </section>
            <GradientSection className='flex flex-col justify-center items-center gap-6'>
                <Badge text="Our Services" />
                {/* <h1 className='text-5xl font-semibold tracking-tight text-center'>Revolutionizing Automotive <br /> Safety and Communication</h1> */}
                <h1 className='text-5xl font-semibold tracking-tight text-center'>Next generation of <br /> automotive safety evolution</h1>
                <p className='text-md text-dimmed text-center'>We specialize in providing innovative QR sticker solutions designed to enhance <br /> safety and streamline communication for the automotive industry.</p>
            </GradientSection>
            <section className='overflow-hidden pt-0 md:pt-8 -mx-8 mb-12'>
                {services.map((service, index) => (
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
                ))}
            </section>
            <WhyChooseHelptag365 wrapperClassName='pt-20' />
            <QRSection />
            <BorderSection wrapperClassName='hidden md:block' className='flex flex-col gap-12'>
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
            </BorderSection>
            <GradientSection className='flex flex-col md:flex-row justify-between items-center gap-12 my-10'>
                <div className='px-4 flex flex-col justify-between items-center md:items-start gap-12'>
                    <Badge text='Reviews' />
                    <div className='flex flex-col justify-between items-start gap-6'>
                        <h1 className='text-4xl md:text-5xl font-semibold tracking-tight text-center md:text-start'>Our secure customers</h1>
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
            </GradientSection>
            <BorderSection className='flex flex-col justify-between items-center gap-12'>
                <div className='flex flex-col justify-between items-center gap-8'>
                    <Badge text="Pricing" />
                    <h1 className='text-4xl md:text-5xl font-semibold tracking-tight text-center'>Stay Safe for Just ₹199/Year</h1>
                    <p className='text-dimmed text-center'>Ensure peace of mind for you and your loved ones, no matter where the road takes you.</p>
                </div>
                <div className='w-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12'>
                    {
                        pricingCards.map((pricing, index) => (
                            <BorderSection key={index} wrapperClassName='max-w-md !p-0' className='!p-6 !rounded-3xl grid gap-6'>
                                <div className='space-y-2'>
                                    <p className='font-semibold'>{pricing.type}</p>
                                    <h2 className='font-semibold text-3xl'>{pricing.price}</h2>
                                    <p className='text-sm text-dimmed'>{pricing.description}</p>
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
                                <button className={`full py-2 px-4 border rounded-xl ${pricing.button.type === 'filled' ? 'bg-primary-normal hover:bg-primary-normal-hover border-primary-normal-hover text-white' : 'border-primary-normal-hover text-primary-normal'} cursor-pointer`}>
                                    {pricing.button.text}
                                </button>
                            </BorderSection>
                        ))
                    }
                </div>
            </BorderSection>
            <OurTeam />
            <QRSection />
        </main>
    )
}
