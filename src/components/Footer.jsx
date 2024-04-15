import { Link } from "react-router-dom";

const links = [
  {
    name: "Terms",
    href: "/",
  },
  {
    name: "Privacy",
    href: "/",
  },
  {
    name: "Help",
    href: "/",
  },
];

const Footer = () => {
  return (
    <div className="py-24 px-5 flex justify-center relative">
      <h1 className="text-4xl md:text-6xl font-bold">Medium</h1>
      <ul className="flex gap-10 absolute bottom-0 font-roboto">
        {links.map((link, index) => (
          <Link className="hover:underline" to={link.href} key={index}>
            <li className="text-sm">{link.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
