import { Badge } from '../Misc/Badge';
import { TeamCard } from '../Card/TeamCard';
import { teamCards } from '../../constants';
import { BorderSection } from '../HOC/BorderSection';

export const OurTeam = () => (
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
)