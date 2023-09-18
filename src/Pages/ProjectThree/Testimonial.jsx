import emily from "../../assets/ProjectThree/image-emily.jpg";
import thomas from "../../assets/ProjectThree/image-thomas.jpg";
import jennie from "../../assets/ProjectThree/image-jennie.jpg";

const client = [
  {
    name: "Emily R.",
    picture: emily,
    info: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    work: "Marketing Director",
  },
  {
    name: "Thomas S.",
    picture: thomas,
    info: "Sunnyside s enthusiams coupled with their keen interest in our brand s success made it a satifying and enjoyable experience.",
    work: "Chief Operating Officer",
  },
  {
    name: "Thomas S.",
    picture: jennie,
    info: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    work: "Business Owner",
  },
];

const Testimonial = () => {
  return (
    <div className='flex flex-col justify-center text-center font-["Barlow"] py-28 '>
      <h2 className='pb-20 text-1xl font-["Fraunces"] font-extrabold uppercase text-twovgrayishblue tracking-[0.3rem]'>
        Client testimonials
      </h2>
      <div className='flex flex-wrap justify-center gap-3'>
        {client.map((profil, index) => (
          <div
            key={index}
            className='flex flex-col items-center w-1/4 px-4 text-center'
          >
            <img
              src={profil.picture}
              alt={profil.name}
              className='w-20 rounded-full'
            />
            <p className='py-10 font-bold text-twoverydarkgrayishblue'>
              {profil.info}
            </p>
            <h3 className='font-bold font-["Fraunces"] pb-1'>{profil.name}</h3>
            <h4 className='text-twovgrayishblue'>{profil.work}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
