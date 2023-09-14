import logo from "../src/assets/Projectone/logo.svg";
import iconArrow from "./assets/Projectone/icon-arrow.svg";
import heroDesktop from "./assets/Projectone/hero-desktop.jpg";

export default function ProjectOne() {
  return (
    <div className='flex min-h-screen bg-third'>
      <div className='flex max-w-3xl m-auto overflow-hidden shadow-2xl bg-third'>
        <section className='px-24 my-8 space-y-5'>
          <img src={logo} alt='logo' className='w-24 mb-16' />
          <h1 className='flex flex-col text-4xl font-light tracking-[.40rem] uppercase text-primary'>
            We&apos;re
            <span className='font-medium text-black'>
              coming
              <br /> soon
            </span>
          </h1>
          <p className='text-[0.5rem] text-primary'>
            Hello fellow shoppers! We re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form className='text-[0.6rem]'>
            <div className='relative'>
              <input
                type='email'
                name='email'
                id='test'
                placeholder='Email Address'
                className='w-full p-2 pr-10 border rounded-full outline-none border-four/70 focus:border-secondary bg-third'
              />
              <button
                type='submit'
                className='absolute right-0 flex items-center justify-center w-12 h-8 -translate-y-1/2 rounded-full shadow-xl top-1/2 bg-secondary hover:bg-four'
              >
                <img src={iconArrow} alt='logo' />
              </button>
            </div>
          </form>
        </section>

        <img src={heroDesktop} alt='logo' className='w-80' />
      </div>
    </div>
    //1h23
  );
}
