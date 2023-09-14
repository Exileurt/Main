import logo from "../../assets/Projecttwo/logo.svg";

const linkNavbar = [
  { href: "/", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/events", label: "Events" },
  { href: "/product", label: "Product" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  return (
    <div className='flex items-center justify-between'>
      <img src={logo} alt='logo' className='w-40' />

      <nav className=''>
        <ul className='flex space-x-6'>
          {linkNavbar.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className='relative transition ease-linear group'
              >
                {link.label}
                <span className='absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center'></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
