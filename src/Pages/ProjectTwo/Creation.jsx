import curiosity from "../../assets/Projecttwo/desktop/image-curiosity.jpg";
import deapEarth from "../../assets/Projecttwo/desktop/image-deep-earth.jpg";
import fishEye from "../../assets/Projecttwo/desktop/image-fisheye.jpg";
import fromAbove from "../../assets/Projecttwo/desktop/image-from-above.jpg";
import nightArcade from "../../assets/Projecttwo/desktop/image-night-arcade.jpg";
import pocketBorealis from "../../assets/Projecttwo/desktop/image-pocket-borealis.jpg";
import soccerImage from "../../assets/Projecttwo/desktop/image-soccer-team.jpg";
import porsche from "../../assets/Projecttwo/desktop/image-grid.jpg";

export default function Creation() {
  const imagesWithText = [
    { src: curiosity, alt: "curiosity", text: "Curiosity" },
    { src: deapEarth, alt: "deepearth", text: "Deep Earth" },
    { src: fishEye, alt: "fisheye", text: "Make it Fish Eye" },
    { src: porsche, alt: "fisheye", text: "Porsche" },
    { src: fromAbove, alt: "fromAbove", text: "From Up Above vr" },
    { src: nightArcade, alt: "nightarcade", text: "Night Arcade" },
    { src: pocketBorealis, alt: "pocketborealis", text: "Pocket Borealis" },
    { src: soccerImage, alt: "soccerimage", text: "Soccer Image" },
  ];

  return (
    <div>
      <div className='flex items-center justify-between pb-16'>
        <div className='text-4xl font'>OUR CREATIONS</div>
        <button className='h-10 px-10 text-sm font-light text-white bg-black hover:opacity-60'>
          SEE ALL
        </button>
      </div>
      <div className='flex flex-wrap justify-center gap-6'>
        {imagesWithText.map((image, index) => (
          <div key={index} className='relative group hover:bg-white'>
            <img
              src={image.src}
              alt={image.alt}
              className='object-cover w-full h-full'
            />
            <div className='absolute inset-0 transition-opacity bg-white opacity-0 group-hover:opacity-40'></div>
            <div className='absolute inset-x-0 bottom-0 transition-opacity'>
              <p className='text-4xl font-light text-white uppercase px-7 py-7'>
                {image.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
