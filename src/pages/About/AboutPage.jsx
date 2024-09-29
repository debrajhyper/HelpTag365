
import { HeroBgSection, OurTeam, QRSection, Testimony } from "../../components";
import { WhyChooseHelptag365 } from "../../components/Section/WhyChooseHelptag365";

export function AboutPage() {
    return (
        <main className='w-full h-full px-2.5 md:px-8 overflow-hidden'>
            <HeroBgSection>
                <div className="grid justify-center justify-items-center gap-8 md:gap-12">
                    <Testimony />
                    <div className="max-w-full md:max-w-[52rem] text-center">
                        <h1 className="text-primary-darker text-6xl font-semibold tracking-tight leading-tight">
                            About us
                        </h1>
                        <p className="text-md text-dimmed mt-2 md:mt-4">
                            Whether your car is in trouble or passengers are at risk, ensure immediate contact with emergency
                            services, family, or roadside assistance—all just one scan away.
                        </p>
                    </div>
                </div>
            </HeroBgSection>
            <section className="px-5 lg:px-8 xl:px-20 py-10 pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4 md:space-y-6">
                    <h4 className="text-md font-medium text-primary-normal">About HelpTag365</h4>
                    <p className="text-sm md:text-md">
                        At HelpTag 365, we believe that in emergencies, help should be just a scan away. Our mission is to revolutionize automotive safety by creating smart, simple, and reliable communication solutions. Whether you&apos;re facing an accident, vehicle breakdown, or any other critical scenario, our platform is designed to connect you to the assistance you need - instantly.
                        <br /><br />
                        By leveraging innovative QR technology, we empower drivers, passengers, and emergency responders to communicate seamlessly. With just one scan, vital information can be shared, ensuring that help arrives fast, even when you can&apos;t speak for yourself.
                    </p>
                </div>
                <div className="space-y-4 md:space-y-6">
                    <h4 className="text-md font-medium text-primary-normal">Our Innovation</h4>
                    <p className="text-sm md:text-md">
                        We&apos;ve developed a groundbreaking QR code-based system that transforms how drivers access help in critical situations. By seamlessly connecting vehicle owners with assistance, we&apos;re not just offering a service - we&apos;re providing peace of mind on every journey.
                    </p>
                </div>
            </section>
            <section className="px-5 lg:px-8 xl:px-20 py-10 space-y-4 md:space-y-6">
                <h4 className="text-md font-medium text-primary-normal">Join the Safety Revolution</h4>
                <p className="text-sm md:text-md">
                    Join the Safety Revolution
                    <br />
                    At HelpTag365, we believe that everyone deserves to feel secure on the road. Whether you&apos;re a daily commuter, a long-distance traveler, or someone who simply values preparedness, our solution is designed with you in mind.
                    <br />
                    Take control of your safety today. With HelpTag365, you&apos;re never alone on the road.
                    <br />
                    <br />
                    HelpTag365 - Your lifeline in motion.
                </p>
            </section>
            <WhyChooseHelptag365 />
            <OurTeam />
            <QRSection />
        </main>
    )
}
