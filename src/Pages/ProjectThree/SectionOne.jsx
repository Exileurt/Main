import egg from "../../assets/ProjectThree/desktop/image-transform.jpg";

const SectionOne = () => {
  return (
    <div className="flex font-['barlow']">
      <div className='w-1/2 py-32 pr-32 pl-36'>
        <h2 className="font-['Fraunces'] text-5xl font-bold ">
          Transform your brand
        </h2>
        <p className='pt-10 text-twoverydarkgrayishblue'>
          We are a full-service creative-agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <div className='pt-10'>
          <a
            href='/'
            className="font-['Fraunces'] text-base font-extrabold relative px-2 transition ease-linear group"
          >
            LEARN MORE
            <span className='absolute inset-x-0 bottom-0 h-2 transition rounded-full scale-x-1 bg-onesecondary/40 -z-10 group-hover:bg-onesecondary group' />
          </a>
        </div>
      </div>

      <img src={egg} alt='egg' className='w-1/2' />
    </div>
  );
};

export default SectionOne;
