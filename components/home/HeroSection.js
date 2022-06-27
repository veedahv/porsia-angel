export default function HeroSection() {
  return (
      <section className="">
        <div className="bg-[url('/assets/home-hero-bg.jpg')] bg-[#151515A1] bg-cover bg-norepeat bg-center bg-blend-overlay min-h-[90vh] w-full relative">
        </div>
        <div className="my-10 absolute md:relative bottom-[10px] left-0 right-0">
          <div className="container xl:max-w-screen-xl mx-auto px-4 w-full md:text-center text-white md:text-dark">
            <h1 className="flex flex-col md:flex-row justify-start md:justify-center gap-5 uppercase text-5xl lg:text-7xl tracking-[2.5px]">
              <span className="font-title">
                insipire.
              </span>
              <span className="font-title">
                Collabrate.
              </span>
              <span className="font-title">
                design
              </span>
            </h1>
          </div>
        </div>
        <div className="container xl:max-w-screen-xl mx-auto px-4 w-full text-center my-10">
          <button className="border border-primary bg-primary w-56 px-1 py-4 text-lg text-white text-center tracking-[2.5px]">
            GET STARTED
          </button>
        </div>
      </section>
  )
}
