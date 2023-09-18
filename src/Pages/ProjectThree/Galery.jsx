import cone from "../../assets/ProjectThree/desktop/image-gallery-cone.jpg";
import milkbottles from "../../assets/ProjectThree/desktop/image-gallery-milkbottles.jpg";
import sugarcubes from "../../assets/ProjectThree/desktop/image-gallery-sugarcubes.jpg";
import orange from "../../assets/ProjectThree/desktop/image-gallery-orange.jpg";

const picture = [
  { pic: cone, alt: "cone" },
  { pic: milkbottles, alt: "milkbottles" },
  { pic: sugarcubes, alt: "sugarcubes" },
  { pic: orange, alt: "orange" },
];

const Galery = () => {
  return (
    <div className='flex'>
      {picture.map((pic, index) => (
        <div key={index}>
          <img src={pic.pic} href={pic.alt} />
        </div>
      ))}
    </div>
  );
};

export default Galery;
