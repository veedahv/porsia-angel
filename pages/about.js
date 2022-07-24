import styles from '../styles/About.module.css';
export default function About() {
    return (
        <div className="">
            <section className={styles.hero + " relative pt-14"}>
                <div className="container xl:max-w-screen-xl mx-auto px-4">
                    <div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-title pb-5">
                            ABOUT US
                        </h1>
                        <div className={styles.heroImg + " pt-[50%] w-full"}>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5">
                <div className="container xl:max-w-screen-xl mx-auto px-4 py-5">
                    <div className="w-full">
                        <div className="lg:max-w-screen-lg">
                            <div className="my-14">
                                <p className="text-lg tracking-[1px] leading-loose">
                                    Transformation, creativity, and innovation under one roof. Angel and porsia has evolved into an independent, interior design agency serving the eye and mind demands of a space with calculated strategic consultancy and dynamic resources to bring your space to life..
                                </p>
                                <p className="text-lg tracking-[1px] leading-loose">
                                    Unique by nature, we offer a seamless extension to your dremas, getting under the skin of your business/home to build modern and cost-effective space.
                                </p>
                            </div>
                            <p className="text-lg tracking-[1px] leading-loose my-14">
                                Our mission?
                            </p>
                            <p className="text-lg tracking-[1px] leading-loose my-14">
                                To create every space with maximum satisfaction for our clients. By managing the concept from beginning to end, we can guarantee quality, integrity, and efficiency throughout the process – driven by research and delivered with passion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
