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
