"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import { Button } from "../ui/button";
import LoginButton from "../auth/LoginButton";

const Header = () => {
  return (
    <>
      <header className='w-full mx-auto p-3'>
        <div className='flex justify-between items-center md:m-2'>
          <div className='md:hidden block'>
            <MobileNav />
          </div>
          <div className=''>
            <Link href='/' className=''>
              meau POST
            </Link>
          </div>
          <div>
            <nav className='hidden md:block'>
              <NavLinks />
            </nav>
          </div>

          <div>
            <LoginButton>
              <Button variant='secondary' size='lg'>
                Sign in
              </Button>
            </LoginButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
