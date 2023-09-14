import { linkNavbar } from "./ProjectTwoData";
import logo from "../../assets/Projecttwo/logo.svg";

export default function Navbar() {
  return (
    <div className='flex justify-between'>
      <img src={logo} alt='logo' className='w-40' />
      <ul className='flex space-x-8'>
        {linkNavbar.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className='relative transition ease-linear group'
            >
              {link.label}
              <span className='absolute bg-white h-0.5 scale-x-0 bottom-0 inset-x-0 transition-transform group-hover:scale-x-100 origin-center' />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
