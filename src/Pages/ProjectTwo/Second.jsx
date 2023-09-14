import interactive from "../../assets/Projecttwo/desktop/image-interactive.jpg";

export default function Second() {
  return (
    <div className='relative overflow-hidden '>
      <img src={interactive} alt='interactive' className='w-2/3' />
      <div className='absolute bottom-0 right-0 max-w-xl pt-24 pl-24 bg-white max-xl:pt-12 max-xl:pl-12 max-xl:max-w-sm'>
        <h2 className='text-5xl font-light uppercase pb-11 max-xl:text-2xl max-xl:pb-2'>
          The leader in interactive VR
        </h2>
        <p className='text-twodarkgray'>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

/*
Founded in 2011, Loopstudios has been producing world-class
virtual reality projects for some of the best companies around the
globe. Our award-winning creations have transformed businesses
through digital experiences that bind to their brand.*/
