import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Intro = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInDown">
          <div>
        <div className="text-4xl font-medium px-5 md:px-40 py-2">
          Hey!
        </div>
        <div className="px-5 md:px-40 py-5 text-2xl">
          <div className="partOne pb-2">
        I am a third year under graduate, Computer Engineering student and Data Science Enthusiast. I have worked as an intern in various companies as a Data Science Trainee, also I am an intermediate Full-Stack Web Developer and learning daily to improve my self.
        </div>
        <div className="partTwo pt-2">
        Currently I am focusing more towards learning the fundamentals of Data Science and creating my own Metaverse.
        </div>
        </div>
    </div>
    </AnimationOnScroll>
  )
}

export default Intro