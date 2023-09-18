import standOut from "../../assets/ProjectThree/desktop/image-stand-out.jpg";

const SectionTwo = () => {
  return (
    <div className='flex font-["barlow"]'>
      <img src={standOut} alt='standOut' className='w-1/2' />
      <div className='w-1/2 py-32 pr-32 pl-36'>
        <h2 className="font-['Fraunces'] text-5xl font-bold">
          Stand out to the right audience
        </h2>
        <p className='pt-10 text-twoverydarkgrayishblue'>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we ll build and extend
          your brand in digital places.
        </p>
        <div className='pt-10'>
          <a
            href='/'
            className='font-["Fraunces"] text-base font-extrabold relative px-2 transition ease-linear group'
          >
            LEARN MORE
            <span className='absolute inset-x-0 bottom-0 h-2 transition scale-x-100 rounded-full bg-oneprimary/50 -z-10 group-hover:bg-oneprimary' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
