import { links } from "@/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className=''>
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon />
        </SheetTrigger>
        <SheetContent>
          {links.map((link) => (
            <SheetClose asChild key={link.id}>
              <Link href={link.route} className='flex flex-col gap-10 mt-10'>
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
