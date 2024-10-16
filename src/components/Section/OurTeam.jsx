import { Badge } from '../Misc/Badge';
import { TeamCard } from '../Card/TeamCard';
import { sliderSettings, teamCards } from '../../constants';
import { BorderSection } from '../HOC/BorderSection';
import Slider from "react-slick";

export const OurTeam = () => (
    <BorderSection className='!p-0.5 bg-gradient-to-b from-primary-light-active  to-transparent border-none'>
        <div className='bg-white rounded-[1.9rem] md:rounded-[3.3rem] w-full px-2 md:px-16 py-12 md:py-16 flex flex-col justify-between items-center gap-12 text-center'>
            <div className='flex flex-col justify-between items-center gap-8'>
                <Badge text="Our team" />
                <h1 className='text-4xl md:text-5xl font-semibold tracking-tight !leading-tight text-center'>Meet the People <br />Behind the Innovation</h1>
                <p className='max-w-[65rem] text-md font-medium text-dimmed text-center'>Led by visionaries like <a className='font-semibold text-primary-dark'>Harmeet Godhani</a>, our team combines expertise in automotive technology, emergency response systems, and user-centric design. We&apos;re not just tech enthusiasts – we&apos;re committed to making a real difference in people&apos;s lives.</p>
            </div>
            <div className='hidden md:grid grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    teamCards.map((team, index) => <TeamCard key={index} {...team} />)
                }
            </div>
            <Slider className='grid md:hidden' {...sliderSettings}>
                {
                    teamCards.map((team, index) => <TeamCard key={index} {...team} />)
                }
            </Slider>
        </div>
    </BorderSection>
)