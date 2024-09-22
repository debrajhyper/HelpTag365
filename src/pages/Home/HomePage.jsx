import starImg from '../../images/star.svg';
import communicationImg from '../../images/communication.svg';
import privacyImg from '../../images/privacy.svg';
import safetyImg from '../../images/safety.svg';
import easyToUseImg from '../../images/easyToUse.svg';
import QRImg from '../../images/QR.svg';
import { MoveUpRight } from 'lucide-react';
import { Badge, BorderSection, FilledSection, GradientSection, FeatureCard, ProcessCard, ReviewCard, TeamCard } from '../../components';
import processQRImg from '../../images/processQR.svg';
import processScanImg from '../../images/processScan.svg';
import processConnectImg from '../../images/processConnect.svg';

const services = [
    ['Lights are on', 'Vehicle is on', '⁠Vehicle alarm is ringing', 'Vehicle in no parking', 'Vehicle wrongly parked', '⁠Vehicle had accident', '⁠Vehicle broke down', 'Vehicle is impounded'],
    ['Pet inside vehicle', 'Child inside vehicle', '⁠Elderly inside vehicle', 'Driver of vehicle is in trouble', 'Vehicle is stolen/misplaced', 'Vehicle fuel empty', 'vehicle on fire'],
    ['Vehicle needs tyre repair', 'Vehicle windows open', 'Driver misbehaving with passenger', 'Driver driving dangerously', 'Driver taking unsafe route', 'Driver keeping car dirty']
]

const featureCards = [
    {
        image: communicationImg,
        title: 'Seamless Communication',
        description: 'Our QR stickers allow for instant contact between car owners and concerned parties, ensuring quick and efficient communication.',
        rowSpan: 3,
    },
    {
        image: privacyImg,
        title: 'Privacy Protection',
        description: 'We prioritize your privacy. Our solutions enable contact without revealing sensitive personal information.',
        rowSpan: 2,
    },
    {
        image: safetyImg,
        title: 'Enhanced Safety',
        description: 'Our stickers are designed to improve safety by providing a reliable way to communicate in case of emergencies or incidents.',
        rowSpan: 3,
    },
    {
        image: easyToUseImg,
        title: 'Easy to Use',
        description: 'Simply scan the QR code to access essential information and connect with the car owner.',
        rowSpan: 2,
    },
]

const processCards = [
    {
        image: processQRImg,
        title: 'Step 01 - Attach',
        subTitle: 'Place the QR sticker on your vehicle.',
    },
    {
        image: processScanImg,
        imgPosition: 'bottom',
        title: 'Step 02 - Scan',
        subTitle: 'Anyone needing to contact you can scan the QR code with their smartphone.',
    },
    {
        image: processConnectImg,
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
        profilePic: 'adadadasdadasdasdasd',
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: 'adadadasdadasdasdasd',
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: 'adadadasdadasdasdasd',
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: 'adadadasdadasdasdasd',
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: 'adadadasdadasdasdasd',
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: 'adadadasdadasdasdasd',
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: 'adadadasdadasdasdasd',
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: 'adadadasdadasdasdasd',
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: 'adadadasdadasdasdasd',
        name: 'Yeshe Hagl',
    },
    {
        image: starImg,
        title: 'Super effective!',
        description: 'Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.',
        profilePic: 'adadadasdadasdasdasd',
        name: 'Yeshe Hagl',
    },
]

const teamCards = [
    {
        image: '',
        name: 'Harmeet Godhani',
        title: 'Founder @HelpTag365',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    }
]


export function HomePage() {
    return (
        <main className='w-full h-full px-2.5 md:px-8 overflow-hidden'>
            <section className="hero-gradient p-4 md:p-10 pt-24 md:pt-40 relative">
                <div className="mx-auto grid justify-center justify-items-center gap-8 md:gap-12">
                    <Badge text="6000+ Users | 100% Satisfaction Rate" />
                    <div className="max-w-full md:max-w-[52rem] text-center">
                        <h1 className="text-primary-darker text-6xl md:text-7xl font-semibold tracking-tight leading-tight">
                            In an emergency, <br /> help is one scan away
                        </h1>
                        <p className="text-md text-dimmed mt-2 md:mt-6">
                            Whether your car is in trouble or passengers are at risk, ensure immediate contact with emergency
                            services, family, or roadside assistance—all just one scan away.
                        </p>
                    </div>
                    <div className="text-center mb-14 md:mb-0">
                        <button className="py-2 px-4 border-2 rounded-xl bg-white hover:bg-primary-normal-hover border-primary-normal-hover text-primary-normal-hover hover:text-white cursor-pointer">
                            Get a FREE trial
                        </button>
                        <p className="text-xs text-dimmed mt-5">365 Days  |  No credit card require!</p>
                    </div>
                    <div className="max-w-[45rem] hidden md:flex mt-20 text-center flex-col gap-5">
                        <span className="flex justify-center items-center gap-1">
                            {
                                Array(5).fill(0).map((_, i) => (<img key={i} src={starImg} alt="star" className='w-4' />))
                            }
                        </span>
                        <p>
                            “Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.”
                        </p>
                        <p className='text-sm text-dimmed'>
                            — Rohan Desai
                        </p>
                    </div>
                </div>
            </section>
            <div className="flex md:hidden mt-5 px-5 text-center flex-col gap-5">
                <span className="flex justify-center items-center gap-1">
                    {
                        Array(5).fill(0).map((_, i) => (<img key={i} src={starImg} alt="star" className='w-4' />))
                    }
                </span>
                <p>
                    “Within a few days, I was able to pinpoint the issue, test a solution, and confirm its effectiveness—all by interacting with my support team through the Helptag 365 app. The entire process was seamless and hassle-free.”
                </p>
                <p className='text-sm text-dimmed'>
                    — Rohan Desai
                </p>
            </div>
            <section className='w-full p-8 py-12 md:py-16 grid grid-flow-row-dense grid-cols-1 md:grid-cols-8 gap-20'>
                <p className='hidden md:flex col-span-2 text-lg text-dimmed'>
                    Trusted by thousand
                    companies in the world
                </p>
                <div className='col-auto w-full flex justify-start items-center gap-14 overflow-auto'>
                    PRESS TRUST OF INDIA
                </div>
            </section>
            <GradientSection className='flex flex-col justify-center items-center gap-6'>
                <Badge text="Our Services" />
                <h1 className='text-5xl font-semibold tracking-tight text-center'>Revolutionizing Automotive <br /> Safety and Communication</h1>
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
            <BorderSection wrapperClassName='pt-20' className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div className='w-full flex flex-col justify-between items-start text-center md:text-left'>
                    <div className='w-full flex flex-col justify-between items-center md:items-start gap-8'>
                        <Badge text="Why?" />
                        <h1 className='text-5xl font-semibold tracking-tight text-start'>Why Choose <br /> Helptag 365?</h1>
                        <button className="w-full sm:w-fit py-2 px-4 border-2 rounded-xl bg-white hover:bg-primary-normal-hover border-primary-normal-hover text-primary-normal-hover hover:text-white cursor-pointer">
                            Get a FREE trial
                        </button>
                    </div>
                    <p className='text-dimmed mt-10'>
                        At Helptag 365, we specialize in providing innovative QR sticker solutions designed to enhance safety and streamline communication for the automotive industry.
                        <br />
                        <br />
                        Our cutting-edge technology ensures that you can connect with car owners effortlessly, without compromising on privacy.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-5 gap-6'>
                    {
                        featureCards.map((feature, index) => <FeatureCard key={index} {...feature} />)
                    }
                </div>
            </BorderSection>
            <FilledSection className='grid grid-cols-1 md:grid-flow-col grid-rows-2 gap-12 md:gap-2'>
                <h1 className='text-4xl md:text-5xl font-semibold tracking-tight text-center md:text-start'>Take control of <br /> your safety today!</h1>
                <div className='mt-auto flex justify-center md:justify-start gap-2'>
                    <button className="w-fit py-2 px-4 flex items-center gap-2 border rounded-xl bg-white border-white whitespace-nowrap cursor-pointer">
                        <MoveUpRight className='w-4 h-auto' />
                        Contact us
                    </button>
                    <button className="w-full sm:w-fit py-2 px-4 font-semibold border rounded-xl bg-primary-normal hover:bg-primary-normal-hover border-primary-normal-hover text-white cursor-pointer">
                        Get a FREE trial
                    </button>
                </div>
                <img src={QRImg} alt="QR code" className='row-span-2 w-56 h-auto mx-auto md:ml-auto' />
            </FilledSection>
            <BorderSection className='flex flex-col gap-12'>
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
                        <div className="w-1/6 h-full absolute z-50 left-0" style={{ background: 'linear-gradient(to right, #ffffffa8 0%, #ffffff00 100%)' }}></div>
                        <div className="w-1/6 h-full absolute z-50 right-0" style={{ background: 'linear-gradient(to left, #ffffffa8 0%, #ffffff00 100%)' }}></div>
                    </div>
                    <div className="w-fit flex items-center justify-between gap-6 animate-carousel-scroll hover:pause">
                        {
                            reviewCards.map((review, index) => <ReviewCard key={index} {...review} />)
                        }
                    </div>
                </div>
            </GradientSection>
            <BorderSection className='flex flex-col justify-center items-center gap-12 py-10'>
                <div className='flex flex-col justify-between items-center gap-8'>
                    <Badge text="Our team" />
                    <h1 className='text-4xl md:text-5xl font-semibold tracking-tight text-center'>Meet the People Behind the Innovation</h1>
                    <p className='text-dimmed text-center'>Led by visionaries like Harmeet Godhani, our team combines expertise in automotive technology, emergency response systems, and user-centric design. We&apos;re not just tech enthusiasts – we&apos;re committed to making a real difference in people&apos;s lives.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
                    {
                        teamCards.map((team, index) => <TeamCard key={index} {...team} />)
                    }
                </div>
            </BorderSection>
            <FilledSection className='grid grid-cols-1 md:grid-flow-col grid-rows-2 gap-12 md:gap-2'>
                <h1 className='text-4xl md:text-5xl font-semibold tracking-tight text-center md:text-start'>Take control of <br /> your safety today!</h1>
                <div className='mt-auto flex justify-center md:justify-start gap-2'>
                    <button className="w-fit py-2 px-4 flex items-center gap-2 border rounded-xl bg-white border-white whitespace-nowrap cursor-pointer">
                        <MoveUpRight className='w-4 h-auto' />
                        Contact us
                    </button>
                    <button className="w-full sm:w-fit py-2 px-4 font-semibold border rounded-xl bg-primary-normal hover:bg-primary-normal-hover border-primary-normal-hover text-white cursor-pointer">
                        Get a FREE trial
                    </button>
                </div>
                <img src={QRImg} alt="QR code" className='row-span-2 w-56 h-auto mx-auto md:ml-auto' />
            </FilledSection>
        </main>
    )
}
