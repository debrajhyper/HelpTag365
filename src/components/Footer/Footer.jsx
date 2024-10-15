import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../routes';
import logoImg from '../../images/logo.svg';
import brandName from '../../images/brandName.svg';
import { Input } from '../Input/Input';

const footerLinks = {
    'About': [
        { title: 'Blog', path: '/blog' },
        { title: 'Meet the team', path: '/team' },
        { title: 'Contact us', path: '/contact' },
    ],
    'Policy terms': [
        { title: 'Terms & conditions', path: '/terms' },
        { title: 'Refund policy', path: '/refund' },
        { title: 'Privacy policy', path: '/privacy' },
    ],
    'Social media': [
        { title: 'Instagram', path: '/instagram' },
        { title: 'Facebook', path: '/facebook' },
        { title: 'LinkedIn', path: '/linkedin' },
        { title: 'Twitter', path: '/twitter' },
    ]
}

export const Footer = () => (
    <footer className="w-full mt-10 pt-4 md:pt-8 'px-4 md:px-8 bg-primary-light' rounded-t-[2rem] md:rounded-t-[3.5rem]">
        <div className="bg-white p-4 md:p-8 pt-16 pb-2 md:pb-8 divide-y rounded-t-2xl md:rounded-t-3xl">
            <div className="pb-8 grid grid-cols-1 md:grid-cols-2  gap-16 md:gap-8 xl:gap-20">
                <div className='max-w-[34rem] space-y-8'>
                    <Link to={HOME_PATH} className="flex gap-1">
                        <img src={logoImg} alt="logo" className="h-3" />
                        <img src={brandName} alt="brand name" className="h-3" />
                    </Link>
                    <p className='text-dimmed text-md'>Which gives a total solution of 8 problems. It provides solutions to many problems such as car no-parking, car lights staying on, car door staying open, other people&apos;s car not being able to leave because of your car, car accident.</p>
                    <div className='flex flex-col sm:flex-row justify-start items-center gap-3'>
                        <Input wrapperClassName='sm:mb-0 w-full md:6/6 xl:w-3/6' className='p-2.5' id="email" name="email" type="email" placeholder="example@gmail.com" />
                        <button className="w-full sm:w-fit py-2.5 px-8 font-semibold border rounded-xl bg-primary-normal hover:bg-primary-normal-hover border-primary-normal-hover text-white cursor-pointer">
                            Submit
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        Object.entries(footerLinks).map(([title, links], index) => (
                            <div key={index} className='space-y-4'>
                                <h3 className='font-semibold'>{title}</h3>
                                <div className='flex flex-col gap-2'>
                                    {
                                        links.map((link, index) => (
                                            <Link key={index} to={link.path} className='text-dimmed'>{link.title}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-dimmed">
                <p>© 2024 Helptag365. All right reserved.</p>
                {/* <p>Designed by @Zetastudio</p> */}
                <p>Developed by <a className='underline' href="https://www.linkedin.com/in/debrajkarmakar010/" target="_blank" rel="noreferrer">Debraj Karmakar</a></p>
            </div>
        </div>
    </footer>
)
