import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constans";
const Footer = () => {
  return (
    <footer
      className="py-8 flex flex-col 
       items-center
  border-t text-black-100 mt-5 border-gray-100"
    >
      <div className="flex min-w-[1440] max-md:flex-col flex-wrap gap-5 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="object-contain"
            width={118}
            height={18}
          />
          <p className="text-base text-gray-700">
            Car Showcase <br />
            &copy; 2023 Car Showcase. All rights reserved.
          </p>
        </div>
        <div className="footer__links  flex-1 w-full flex justify-end max-md:justify-start max-md:mt-4 gap-4">
          {footerLinks.map((link, index) => (
            <div key={index} className="footer__link">
              <h3 className="text-lg font-bold text-gray-900">{link.title}</h3>
              <ul className="mt-2">
                {link.links.map((subLink, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-base text-gray-700 hover:text-blue-500"
                  >
                    <Link href={subLink.url}>{subLink.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
