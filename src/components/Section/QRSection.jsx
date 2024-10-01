import QRImg from '../../images/QR.svg';
import { MoveUpRight } from 'lucide-react';
import { FilledSection } from '../HOC/FilledSection';

export const QRSection = () => (
    <FilledSection className='grid grid-cols-1 md:grid-flow-col grid-rows-2 gap-12 md:gap-2'>
        <h1 className='text-3xl md:text-5xl font-semibold tracking-tight text-center md:text-start'>Take control of <br /> your safety today!</h1>
        <div className='mt-auto flex justify-center md:justify-start gap-2'>
            <button className="w-fit py-2 px-4 flex items-center gap-2 text-sm md:text-md border rounded-xl bg-white border-white whitespace-nowrap cursor-pointer">
                <MoveUpRight className='w-4 h-auto' />
                Contact us
            </button>
            <button className="w-full sm:w-fit py-2 px-4 text-xs sm:text-md font-semibold border rounded-xl bg-primary-normal hover:bg-primary-normal-hover border-primary-normal-hover text-white cursor-pointer">
                Get a FREE trial
            </button>
        </div>
        <img src={QRImg} alt="QR code" className='row-span-2 w-56 h-auto mx-auto md:ml-auto' />
    </FilledSection>
)