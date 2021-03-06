// import Head from 'next/head';
import styles from '../styles/Service.module.css';

export default function Service() {
    return (
        <div className="">
            <section className={styles.hero + " bg-primary text-white relative"}>
                <div className="container px-4 py-5 mx-auto">
                    <div className="flex justify-start items-center min-h-[85vh]">
                        <div className="max-w-[590px] w-full md:w-1/2">
                            <h1 className="text-5xl lg:text-7xl font-title my-5">
                                OUR SERVICES
                            </h1>
                            <p className="text-base lg:text-lg tracking-[1px] leading-loose my-5">
                                Whether you are looking for a complete brand improvement,
                                a transformative space, a breath-taking comfort zone or simply wanting to show- off your imagination,
                                we will walk you through it step by step… maybe even with our eyes closed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container px-4 py-14 md:py-24 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                        <div className="">
                            <h2 className="text-2xl lg:text-3xl font-title tracking-[2.5px]">
                                MATCH WITH A DESIGNER
                            </h2>
                            <p className="text-base lg:text-lg text-dark tracking-[1.5px] leading-loose">
                                We let the professional do their job to match your dream space. We nevr let you do all the hard work alone.
                            </p>
                        </div>
                        <div className="">
                            <h2 className="text-2xl lg:text-3xl font-title tracking-[2.5px] uppercase">
                                Work with comfort
                            </h2>
                            <p className="text-base lg:text-lg text-dark tracking-[1.5px] leading-loose">
                                Working from home is the new  trend. Work online via our platform with your matched designer till your final design is ready to be produced.
                            </p>
                        </div>
                        <div className="">
                            <h2 className="text-2xl lg:text-3xl font-title tracking-[2.5px]">
                                SHOP
                            </h2>
                            <p className="text-base lg:text-lg text-dark tracking-[1.5px] leading-loose">
                                Don’t know where to buy your furnitures/decorations. Leave that to us.
                                We create a curated list of products that can be purchased with just a click with our valued partners at a discounted rate
                            </p>
                        </div>
                        <div className="">
                            <h2 className="text-2xl lg:text-3xl font-title tracking-[2.5px]">
                                PRODUCTION
                            </h2>
                            <p className="text-base lg:text-lg text-dark tracking-[1.5px] leading-loose">
                                Ready for your close-up?  Taking you through every step by step process.
                                We work leanly to optimize your budget, consistently producing beautiful yet simple space according to your taste.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
