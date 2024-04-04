"use client";

import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <>
      <ul className='md:flex md:flex-row md:mt-0 md:gap-5 flex flex-col gap-7 mt-16'>
        {links.map((link) => {
          const isActive = pathName === link.route;
          return (
            <li
              key={link.route}
              className={`${isActive && "text-primary-500"}  whitespace-nowrap`}
            >
              <Link href={link.route} className=''>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavLinks;
