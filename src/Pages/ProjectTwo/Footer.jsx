import logo from "../../assets/Projecttwo/logo.svg";
import facebook from "../../assets/Projecttwo/icon-facebook.svg";
import instagram from "../../assets/Projecttwo/icon-instagram.svg";
import pinterest from "../../assets/Projecttwo/icon-pinterest.svg";
import twitter from "../../assets/Projecttwo/icon-twitter.svg";

const linkNavbar = [
  { href: "/", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/events", label: "Events" },
  { href: "/product", label: "Product" },
  { href: "/support", label: "Support" },
];

const linkSocial = [
  { img: facebook, href: "facebook", alt: "facebook" },
  { img: instagram, href: "instagram", alt: "instagram" },
  { img: pinterest, href: "pinterest", alt: "pinterest" },
  { img: twitter, href: "twitter", alt: "twitter" },
];

export default function Footer() {
  return (
    <div className='py-8 bg-black'>
      <div className='flex justify-between pb-6'>
        <img src={logo} alt='logo' />
        <div className='flex space-x-4'>
          {linkSocial.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className='relative transition ease-linear group'
            >
              <img src={link.img} alt={link.alt} />
              <span className='absolute inset-x-0 bottom-0 scale-x-0 bg-white h-0.5 group-hover:scale-x-100 transition-transform origin-center' />
            </a>
          ))}
        </div>
      </div>

      <div className='flex justify-between space-x-6 list-none'>
        <ul className='flex space-x-8'>
          {linkNavbar.map((link, index) => (
            <li key={index}>
              <a
                key={index}
                href={link.href}
                className='relative text-white transition ease-linear group'
              >
                <span className='absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center'></span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className='text-twodarkgray'>
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
}
