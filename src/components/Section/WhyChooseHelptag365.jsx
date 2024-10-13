import { Badge } from '../Misc/Badge';
import { featureCards } from '../../constants';
import { FeatureCard } from '../Card/FeatureCard';
import { BorderSection } from '../HOC/BorderSection';

export const WhyChooseHelptag365 = ({ ...props }) => (
    // <BorderSection className='grid grid-cols-1 lg:grid-cols-2 gap-12' {...props}>
    //     <div className='w-full flex flex-col justify-between items-start text-center md:text-left'>
    //         <div className='w-full flex flex-col justify-between items-center md:items-start gap-8'>
    //             <Badge text="Why?" />
    //             <h1 className='text-3xl md:text-5xl font-semibold tracking-tight text-start'>Why Choose <br /> Helptag 365?</h1>
    //             <button className="w-full sm:w-fit py-2 px-4 border-2 rounded-xl bg-white hover:bg-primary-normal-hover border-primary-normal-hover text-primary-normal-hover hover:text-white cursor-pointer">
    //                 Get a FREE trial
    //             </button>
    //         </div>
    //         <p className='text-dimmed mt-10'>
    //             At Helptag 365, we specialize in providing innovative QR sticker solutions designed to enhance safety and streamline communication for the automotive industry.
    //             <br />
    //             <br />
    //             Our cutting-edge technology ensures that you can connect with car owners effortlessly, without compromising on privacy.
    //         </p>
    //     </div>
    //     <div className='grid grid-cols-1 md:grid-cols-2 auto-rows-min md:auto-rows-fr gap-6'>
    //         {
    //             featureCards.map((feature, index) => <FeatureCard key={index} {...feature} />)
    //         }
    //     </div>
    // </BorderSection>
    <BorderSection className='grid grid-cols-1 lg:grid-cols-2 gap-12' {...props}>
        <div className='w-full flex flex-col justify-between items-start text-center md:text-left'>
            <div className='w-full flex flex-col justify-between items-center md:items-start gap-8'>
                <Badge text="Why?" />
                <h1 className='text-3xl md:text-5xl font-semibold tracking-tight text-start'>Why Choose <br /> Helptag 365?</h1>
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
        <div className='grid grid-cols-1 md:grid-cols-2 auto-rows-min md:auto-rows-fr gap-6'>
            {
                featureCards.map((feature, index) => <FeatureCard key={index} {...feature} />)
            }
        </div>
    </BorderSection>
)