import Image from 'next/image';

export default function ProcesSection() {
  return (
      <section className="">
        <div className="container xl:max-w-screen-xl mx-auto px-4 py-20">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 mb-14">
            <div className="flex-auto w-full lg:w-6/12 text-center lg:text-left">
              <div className="flex lg:flex-col gap-x-5 gap-y-10 my-10 overflow-x-auto text-left">
                <div className="w-[300px] lg:w-full flex-none">
                  <h2 className="text-xl md:text-3xl font-title tracking-[2.5px]">
                    Get Started
                  </h2>
                  <p className="text-sm md:text-lg tracking-[1.5px] leading-loose">
                    Share your inspiration and ideas, so we can match you with the perfect designer for your space, style and budget.
                  </p>
                </div>
                <div className="w-[300px] lg:w-full flex-none">
                  <h2 className="text-xl md:text-3xl font-title tracking-[2.5px]">
                    Collaborate
                  </h2>
                  <p className="text-sm md:text-lg tracking-[1.5px] leading-loose">
                    Watch your space transformed online and collaborate with your designer sharing your likes and dislikes. Work with a professional till your space is perfect.
                  </p>
                </div>
                <div className="w-[300px] lg:w-full flex-none">
                  <h2 className="text-xl md:text-3xl font-title tracking-[2.5px]">
                    Shop & Transform
                  </h2>
                  <p className="text-sm md:text-lg tracking-[1.5px] leading-loose">
                    After you receive your final design,
                    a shopping list of products can be purchased at an exclusive discount via our trade partnerships.
                    Begin designing your home with your designer.
                  </p>
                </div>
              </div>
              <button className="border border-primary bg-primary w-56 px-1 py-4 text-base md:text-lg text-white text-center tracking-[2.5px]">
                START NOW
              </button>
            </div>
            <div className="flex-auto w-full lg:w-7/12">
              <Image src="/assets/home-step-img.jpg" width="610px" height="714px" alt="Steps to get started" className='mx-auto w-full' />
            </div>
          </div>
        </div>
      </section>
  )
}
