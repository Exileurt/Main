import logo from "../../assets/ProjectThree/logo.svg";

const linkFooter = [
  {
    link: "/",
    label: "About",
  },
  { link: "/", label: "Services" },
  { link: "/", label: "Projects" },
];

const Footer = () => {
  return (
    <div className='flex flex-col m-auto bg-twodarkblue/60 items-center'>
      <img src={logo} alt='logoFooter' className='w-36 m-10' />
      <ul className='flex font-["Barlow"] space-x-12 font-semibold text-twodarkblue'>
        {linkFooter.map((link, index) => (
          <li key={index} className='mb-10'>
            <a href={link.link}>{link.label}</a>
          </li>
        ))}
      </ul>
      LOGO LOGO LOGO LOGO
    </div>
  );
};

export default Footer;
