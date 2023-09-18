import logo from "../../assets/ProjectThree/logo.svg";

const navbarLink = [
  { href: "/", label: "About" },
  { href: "/", label: "Services" },
  { href: "/", label: "Projects" },
];

const Navbar = () => {
  return (
    <div className='flex items-center content-center justify-between text-white font-["Barlow"]'>
      <img src={logo} alt='logo' className='w-36' />
      <ul className='flex items-center space-x-12 text-lg'>
        {navbarLink.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <a
          href='/'
          className='py-3 text-black bg-white rounded-full hover:bg-white/40 hover:text-white px-7 font-bold font-["Fraunces"] text-base'
        >
          CONTACT
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
