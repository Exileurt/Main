import Navbar from "./Navbar";
import arrow from "../../assets/ProjectThree/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div className='bg-[url("../src/assets/ProjectThree/desktop/image-header.jpg")] bg-cover bg-center h-screen '>
      <div className='flex flex-col justify-center px-10 pt-10 m-auto text-center'>
        <Navbar />
        <h1 className='text-5xl text-white py-32 font-["Fraunces"] tracking-[0.6rem] font-extrabold'>
          WE ARE CREATIVES
        </h1>
        <img src={arrow} alt={arrow} className='m-auto w-13' />
      </div>
    </div>
  );
};

export default Hero;
