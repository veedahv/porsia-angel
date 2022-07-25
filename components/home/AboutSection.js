import styles from '../../styles/Home.module.css';

export default function AboutSection() {
  return (
      <section className="py-14 md:py-20">
        <div className="container xl:max-w-screen-xl mx-auto px-4">
          <div className="flex items-stretch">
            <div className={styles.about + " md:flex-auto md:w-full relative"}></div>
            <div className="md:flex-auto w-full relative bg-white px-8 md:px-14 md:py-12">
              <p className="text-sm md:text-lg tracking-[1px] leading-loose max-w-xs">
                PORSIA & ANGEL combines creativity and storytelling to your space.
                We power the visuals by collaborating with your ideas and world class
                specialists making it possible to bring your dreams to reality without even asking “Is it possible?”
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
