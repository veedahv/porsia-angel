import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';


export default function PortfolioSection() {
    return (
        <section className="my-20 max-w-full overflow-x-hidden">
            <div className="container xl:max-w-screen-xl mx-auto px-4 py-20">
                <div className="overflow-x-auto md:overflow-x-visible">
                    <div className="columns-2 gap-10 lg:gap-24 min-w-[650px] w-full">
                        <div className="">
                            <div className={styles.case1 + " relative z-10 w-full "}>
                                <Image src="/assets/case1.jpg" width="542px" height="375px" alt="Steps to get started" className='mx-auto w-full' />
                            </div>
                            <div className="py-8">
                                <h2 className="text-xl md:text-3xl font-title tracking-[2.5px] uppercase">
                                    LITTLE TOWN
                                </h2>
                                <p className="text-sm md:text-lg text-dark tracking-[1.5px] leading-loose my-2">
                                    Alessia Clarke works on this new experience-led home at 7th Avenue of New York, USA.
                                    She calls it a little town. Read her case study
                                </p>
                                <button className="border border-primary w-56 py-4 uppercase text-base md:text-lg text-primary text-center tracking-[2.5px]">
                                    Read case study
                                </button>
                            </div>
                        </div>
                            <div className="w-fit my-10 lg:my-24 ml-auto lg:mx-0">
                        <Link href="/portfolio">
                            <button className="border border-primary bg-primary w-56 px-1 py-4 text-base md:text-lg text-white text-center tracking-[2.5px] my-10 lg:my-24">
                                VIEW PORTFOLIO
                            </button>
                        </Link>
                            </div>
                        <div className="">
                            <div className={styles.case2 + " relative z-10 w-full md:mb-[40px] flex items-center justify-center h-[212px] md:h-fit overflow-y-hidden md:overflow-visible"}>
                                <Image src="/assets/case2.jpg" width="610px" height="714px" alt="Steps to get started" className='mx-auto w-full' />
                            </div>
                            <div className="py-8 mb-44 md:mb-0">
                                <h2 className="text-xl md:text-3xl font-title tracking-[2.5px] uppercase">
                                    REFURNISHED K
                                </h2>
                                <p className="text-sm md:text-lg text-dark tracking-[1.5px] leading-loose my-2">
                                    A full refurnished office of Shopify, bursting with vibrant,
                                    comfort and high-tech friendly enivornment to boost creativity and team work.
                                </p>
                                <button className="border border-primary w-56 py-4 uppercase text-base md:text-lg text-primary text-center tracking-[2.5px]">
                                    Read case study
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
