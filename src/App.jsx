import Creation from "./Pages/ProjectTwo/Creation";
import Footer from "./Pages/ProjectTwo/Footer";
import Hero from "./Pages/ProjectTwo/Hero";
import Second from "./Pages/ProjectTwo/Second";

export default function App() {
  return (
    <div className='flex flex-col justify-center m-auto max-w-screen'>
      <div className='bg-cover bg-hero-pattern'>
        <section className='px-32 py-14'>
          <Hero />
        </section>
      </div>
      <section className='px-32 py-32'>
        <Second />
      </section>
      <section className='px-32 py-32'>
        <Creation />
      </section>
      <div className='bg-black bg-cover'>
        <section className='px-32 pt-6'>
          <Footer />
        </section>
      </div>
    </div>
  );
}

/*About Carseers Events Products Support Immersive experiences that deliver
The leader in interactive VR Founded in 2011, Loopstudios has been
producing world-class virtual reality projects for some of the best
companies around the globe. Our award-winning creations have transformed
businesses through digital experiences that bind to their brand. Our
creations See all Deep earth Night arcade Soccer team VR The grid From up
above VR Pocket borealis The curiosity Make it fisheye About Careers
Events Products Support © 2021 Loopstudios. All rights reserved. */
