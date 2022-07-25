import styles from '../../styles/Home.module.css';

export default function ReviewsSection() {
  return (
      <section className=" bg-primary text-white relative">
        <div className={styles.reviews + " bg-primary relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:absolute w-full lg:w-3/5 lg:top-0 lg:right-0 lg:bottom-0"}>
        </div>
        <div className={styles.reviewGap + " hidden lg:block bg-white absolute w-full w-1/5 top-0 left-1/2 transform -translate-x-1/2 bottom-0"}>
        </div>
        <div className=" bg-primary text-white relative">
          <div className="container xl:max-w-screen-xl px-4 py-14 mx-auto">
            <div className="flex justify-start items-center md:my-14">
              <div className="max-w-lg w-full lg:w-2/5">
                <h1 className="text-lg md:text-3xl font-title my-5">
                  LET THE NUMBERS SPEAK
                </h1>
                <p className="text-sm md:text-lg tracking-[1px] leading-loose my-5">
                  Since 2010, we’ve grown from an outstanding interior agency to a
                  full entreprise filled with professional interior designers.
                  We’ve been trusted to design for hundreds of spaces, from, homes, hotels,
                  offices, local-shops to multi-national giants including Nike, Airbnb, Google, Nokia, Sheraton.
                </p>
                <div className="flex flex-wrap justify-between gap-5 my-5 text-center">
                  <div className="">
                    <small className="text-xs md:text-sm tracking-[2.5px] uppercase">
                      Years in business
                    </small>
                    <p className="text-xl md:text-3xl font-title">
                      12
                    </p>
                  </div>
                  <div className="">
                    <small className="text-xs md:text-sm tracking-[2.5px] uppercase">
                      Designed spaces
                    </small>
                    <p className="text-xl md:text-3xl font-title">
                      100+
                    </p>
                  </div>
                  <div className="">
                    <small className="text-xs md:text-sm tracking-[2.5px] uppercase">
                      Trusted brands
                    </small>
                    <p className="text-xl md:text-3xl font-title">
                      50+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
