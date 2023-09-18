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
    <div className='bg-twodarkblue'>
      <img src={logo} alt='logoFooter' className='w-12' />
      <ul className='flex'>
        {linkFooter.map((link, index) => (
          <li key={index}>
            <a href={link.link}>{link.label}</a>
          </li>
        ))}
      </ul>
      Footer
    </div>
  );
};

export default Footer;
