import graphic from "../../assets/ProjectThree/desktop/image-graphic-design.jpg";
import photography from "../../assets/ProjectThree/desktop/image-photography.jpg";

const SectionThree = () => {
  return (
    <div className="flex font-['barlow']">
      <div className='relative w-1/2 text-onegreen'>
        <img src={graphic} alt='graphic' />
        <span className='absolute bottom-0 py-16 text-center px-44 inset-x-bottom'>
          <h2 className='text-4xl font-bold font-["Fraunces"] pb-10'>
            Graphic Design
          </h2>
          <p className='font-bold'>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures poetential client s
            attention.
          </p>
        </span>
      </div>
      <div className='relative w-1/2 text-onedarkblue'>
        <img src={photography} alt='photography' />
        <span className='absolute bottom-0 py-16 text-center px-44 inset-x-bottom'>
          <h2 className='text-4xl font-bold font-["Fraunces"] pb-10'>
            Photography
          </h2>
          <p className='font-bold'>
            Increase your credibilty by getting the most stunning, high-quality
            photos tant improve your business image.
          </p>
        </span>
      </div>
    </div>
  );
};

export default SectionThree;
