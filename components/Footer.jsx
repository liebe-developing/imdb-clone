import Link from "next/link";
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

const FooterItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "#" },
  { title: "Contant", path: "#" },
];
const Footer = () => {
  return (
    <footer className="max-w-6xl sm:mx-auto p-4 mt-6">
      <div className="flex flex-col gap-2 justify-center items-center border-b pb-4">
        <Link href="/">
          <h2 className="text-xl space-x-1.5">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
        <div className="flex gap-8 mt-2.5">
          {FooterItems.map((item, idx) => (
            <Link key={idx} href={item.path} className="hover:text-amber-600">
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flexBetween mt-4">
        <span>&copy; 2023 Ali Razmjooei. All rights reserved</span>
        <div className="flexCenter gap-2 text-xl cursor-pointer">
          <Link
            href="https://github.com/liebe-developing/imdb-clone"
            target="_blank"
          >
            <FaGithub className="social_icons" />
          </Link>
          <Link href="https://www.instagram.com/alirazmjue" target="_blank">
            <FaInstagramSquare className="social_icons" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ali-razmjooei-8760b7208/"
            target="_blank"
          >
            <FaLinkedin className="social_icons" />
          </Link>
          <Link href="https://wa.me/+989396922723" target="_blank">
            <FaWhatsappSquare className="social_icons" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
