import { imagesWithText } from "./ProjectTwoData";

export default function Creation() {
  return (
    <div className='flex flex-col font-light uppercase'>
      <div className='flex justify-between mb-20'>
        <h2 className='text-4xl'>OUR CREATIONS</h2>
        <button className='px-10 text-white bg-black hover:opacity-70'>
          SEE ALL
        </button>
      </div>
      <div className='flex flex-wrap justify-center gap-6'>
        {imagesWithText.map((link, index) => (
          <a
            key={index}
            href='/'
            className='relative transition ease-linear group'
          >
            <img src={link.src} alt={link.alt} />
            <div className='absolute inset-0 h-full bg-white opacity-0 group-hover:opacity-50' />
            <span className='absolute inset-x-0 bottom-0 p-8 pr-10 text-3xl text-white'>
              {link.text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
