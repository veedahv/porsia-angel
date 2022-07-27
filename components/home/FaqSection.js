import FaqCard from "./FaqCard";

export default function FaqSection() {
  return (
      <section className="" id="faq">
        <div className="container xl:max-w-screen-xl mx-auto px-4 py-20">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-title text-center tracking-[2.5px]">
              FAQ
            </h2>
            <ul className="my-2">
              <FaqCard
                index="1"
                title={"How do I choose a design style?"}
              >
                <p className="text-sm md:text-lg tracking-[1.5px] text-[#3F3B38] leading-loose">
                  Go on Pinterest and pin some designs that you love.
                  Then try to categorize these designs! That’s what we did before we started.
                </p>
              </FaqCard>
              <FaqCard
                index="2"
                title={"How do I get matched with a designer?"}
              >
                <p className="text-sm md:text-lg tracking-[1.5px] text-[#3F3B38] leading-loose">
                  Go on Pinterest and pin some designs that you love.
                  Then try to categorize these designs! That’s what we did before we started.
                </p>
              </FaqCard>
              <FaqCard
                index="3"
                title={"WHAT are the services?"}
              >
                <p className="text-sm md:text-lg tracking-[1.5px] text-[#3F3B38] leading-loose">
                  Go on Pinterest and pin some designs that you love.
                  Then try to categorize these designs! That’s what we did before we started.
                </p>
              </FaqCard>
              <FaqCard
                index="4"
                title={"How long does it take to complete a project?"}
              >
                <p className="text-sm md:text-lg tracking-[1.5px] text-[#3F3B38] leading-loose">
                  Go on Pinterest and pin some designs that you love.
                  Then try to categorize these designs! That’s what we did before we started.
                </p>
              </FaqCard>
              <FaqCard
                index="5"
                title={"Can i buy my goods personally?"}
              >
                <p className="text-sm md:text-lg tracking-[1.5px] text-[#3F3B38] leading-loose">
                  Go on Pinterest and pin some designs that you love.
                  Then try to categorize these designs! That’s what we did before we started.
                </p>
              </FaqCard>
            </ul>
          </div>
        </div>
      </section>
  )
}
