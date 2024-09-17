"use client";

import ProfileIcon from "@/components/icons/profile-icon";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SearchIcon from "@/components/icons/search-icon";
import HeartIcon from "@/components/icons/heart-icon";
import CartIcon from "@/components/icons/cart-icon";
import NavMenuIcon from "@/components/icons/nav-menu-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CartDialog from "../_components/cart-dialog";
import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <header className="w-full h-fit bg-[#FFFFFF]">
      <nav className="container flex items-center justify-between py-7">
        <Link href={`/`} className="flex items-center gap-[5px]">
          <Image
            src={`/assets/images/logo.png`}
            alt="Furniro Logo"
            width={50}
            height={32}
          />

          <p className="text-4xl text-black font-bold">Furniro</p>
        </Link>

        <LinkNav />

        <NavRight />
      </nav>
    </header>
  );
}

function LinkNav() {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-3 sm:gap-8 lg:gap-16">
      {navLinks.map((item, index) => {
        const isActive = currentPath === item.href;

        return (
          <Link
            href={`${item.href}`}
            key={index}
            className={`hidden md:flex font-medium hover:text-myOrange transition-all duration-300 ${
              isActive ? "text-myOrange" : "text-black"
            }`}
          >
            {item.name}
          </Link>
        );
      })}

      <Button
        variant={`default`}
        className="bg-transparent hover:bg-transparent group flex lg:hidden"
      >
        <SearchIcon className="w-8 h-8 stroke-black group-hover:stroke-myOrange transition-all duration-300" />
      </Button>

      <DropDown />
    </div>
  );
}

function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex lg:hidden">
        <NavMenuIcon className="w-8 h-8 fill-black hover:fill-myOrange transition-all duration-300" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen">
        <DropdownMenuLabel className="text-[#9F9F9F] text-sm">
          Shortcuts
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2 w-full">
          <ProfileIcon className="w-5 h-5 fill-myOrange" />
          <p>Account</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 w-full">
          <HeartIcon className="w-5 h-5 stroke-none fill-myOrange" />
          <p>Favourites</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 w-full">
          <CartIcon className="w-5 h-5 fill-myOrange" />
          <Link href={`/cart`}>Cart</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="flex md:hidden" />
        <DropdownMenuLabel className="text-[#9F9F9F] text-sm md:hidden">
          Links
        </DropdownMenuLabel>
        {navLinks.map((item, index) => (
          <DropdownMenuItem
            className="flex items-center gap-2 w-full md:hidden"
            key={index}
          >
            <Link
              href={`${item.href}`}
              className="font-medium hover:text-myOrange transition-all duration-300"
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NavRight() {
  return (
    <div className="hidden lg:flex items-center gap-5">
      <Link href={`/account`} className="group p-2">
        <ProfileIcon className="w-7 h-7 fill-black group-hover:fill-myOrange transition-all duration-300" />
      </Link>

      <Button
        variant={`default`}
        className="bg-transparent hover:bg-transparent group"
      >
        <SearchIcon className="w-[25px] h-[25px] stroke-black group-hover:stroke-myOrange transition-all duration-300" />
      </Button>

      <Button
        variant={`default`}
        className="bg-transparent hover:bg-transparent group"
      >
        <HeartIcon className="w-[26px] h-6 stroke-black fill-none group-hover:stroke-none group-hover:fill-myOrange transition-all duration-300" />
      </Button>

      <Dialog>
        <DialogTrigger className="bg-transparent hover:bg-transparent group">
          <CartIcon className="w-[26px] h-[23px] fill-black group-hover:fill-myOrange transition-all duration-300" />
        </DialogTrigger>
        <DialogContent className="px-0 border-none">
          <CartDialog />
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface NavLinks {
  name: string;
  href: string;
  isActive: boolean;
}

const navLinks: NavLinks[] = [
  { name: "Home", href: "/", isActive: true },
  { name: "Shop", href: "/shop", isActive: false },
  { name: "Blog", href: "/blog", isActive: false },
  { name: "Contact", href: "/contact", isActive: false },
];

//className="max-w-screen h-screen bg-transparent px-0 border-none"
