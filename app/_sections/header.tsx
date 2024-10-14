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
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import CartDialog from "../_components/cart-dialog";
import { usePathname } from "next/navigation";
import { useCart } from "../hooks/cart-context";
import { useLikedContext } from "../hooks/like-context";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState } from "react";
import { productList } from "../data/product";
import { CartLength } from "../functions/cart-totals";

export default function Header() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  return (
    <header className="w-full h-fit bg-[#FFFFFF] flex flex-col items-center">
      <nav className="px-5 sm:container flex items-center justify-between py-7 w-full">
        <Link href={`/`} className="flex items-center gap-[5px]">
          <Image
            src={`/assets/images/logo.png`}
            alt="Furniro Logo"
            width={50}
            height={32}
            className="h-5 w-auto sm:w-[50px] sm:h-[32px]"
          />

          <p className="text-lg sm:text-4xl text-black font-bold">Furniro</p>
        </Link>

        <LinkNav isHidden={isHidden} setIsHidden={setIsHidden} />

        <NavRight isHidden={isHidden} setIsHidden={setIsHidden} />
      </nav>

      <SearchComponent isHidden={isHidden} setIsHidden={setIsHidden} />
    </header>
  );
}

function SearchComponent({
  isHidden,
  setIsHidden,
}: {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
}) {
  const [value, setValue] = useState<string>("");
  const filteredResults = productList.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div
      className={`${
        isHidden ? "hidden" : "flex"
      } w-full max-w-[600px] flex-col relative pb-6 px-5 sm:container`}
    >
      <div
        className={`w-full h-[50px] px-2 rounded-[4px] border border-[#9f9f9f] ${
          isHidden ? "hidden" : "flex"
        } items-center`}
      >
        <Input
          placeholder="Search...."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[90%] border-r border-[#9f9f9f] outline-none pl-0 rounded-none"
        />
        <X
          className="w-[10%]"
          onClick={() => {
            setIsHidden(true);
            setValue("");
          }}
        />
      </div>

      <div
        className={`absolute ${
          value === "" ? "hidden" : "flex"
        } flex-col gap-1.5 w-[89.5%] top-[52px] bg-white py-5 px-3 border border-[#9f9f9f] rounded-b-[5px] max-h-[400px] overflow-y-auto`}
      >
        {filteredResults.length === 0 ? (
          <p className="text-sm font-medium text-[#9f9f9f] w-full text-center">
            No result found
          </p>
        ) : (
          filteredResults.map((item, index) => (
            <ResultItem key={index} item={item} setIsHidden={setIsHidden} />
          ))
        )}
      </div>
    </div>
  );
}

function LinkNav({
  isHidden,
  setIsHidden,
}: {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
}) {
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
        onClick={() => setIsHidden(!isHidden)}
        className="bg-transparent hover:bg-transparent group flex lg:hidden p-0.5"
      >
        <SearchIcon className="w-5 h-5 sm:w-8 sm:h-8 stroke-black group-hover:stroke-myOrange transition-all duration-300" />
      </Button>

      <LikedDialogComponent className="w-5 h-5 flex lg:hidden" />

      <DropDown />
    </div>
  );
}

function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex lg:hidden">
        <NavMenuIcon className="w-5 h-5 sm:w-8 sm:h-8 fill-black hover:fill-myOrange transition-all duration-300" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen">
        <DropdownMenuLabel className="text-[#9F9F9F] text-sm">
          Shortcuts
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/**
         * <DropdownMenuItem className="flex items-center gap-2 w-full">
          <ProfileIcon className="w-5 h-5 fill-myOrange" />
          <p>Account</p>
        </DropdownMenuItem>
         */}
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

function NavRight({
  isHidden,
  setIsHidden,
}: {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
}) {
  const { cartItems } = useCart();

  return (
    <div className="hidden lg:flex items-center gap-5">
      {/**
       * <Link href={`/account`} className="group p-2">
        <ProfileIcon className="w-7 h-7 fill-black group-hover:fill-myOrange transition-all duration-300" />
      </Link>
       */}

      <Button
        variant={`default`}
        onClick={() => setIsHidden(!isHidden)}
        className="bg-transparent hover:bg-transparent group"
      >
        <SearchIcon className="w-[25px] h-[25px] stroke-black group-hover:stroke-myOrange transition-all duration-300" />
      </Button>

      <LikedDialogComponent />

      <Dialog>
        <DialogTrigger className="bg-transparent px-4 py-2 hover:bg-transparent group relative">
          <p
            className={`bg-red-800 text-white font-medium text-xs w-fit rounded-full px-2.5 py-1 ${
              cartItems.length === 0 ? "hidden" : "flex"
            } absolute right-0 -top-1`}
          >
            {CartLength()}
          </p>
          <CartIcon className="w-[26px] h-[23px] fill-black group-hover:fill-myOrange transition-all duration-300" />
        </DialogTrigger>
        <DialogContent className="px-0 border-none">
          <DialogTitle>Cart Products</DialogTitle>
          <DialogDescription>
            These are the products you added to your cart.
          </DialogDescription>
          <CartDialog type="Shopping Cart" data={cartItems} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function LikedDialogComponent({ className = "" }: { className?: string }) {
  const { likedItems } = useLikedContext();

  return (
    <Dialog>
      <DialogTrigger
        className={`bg-transparent px-4 py-2 hover:bg-transparent group relative ${
          className ? "flex lg:hidden" : "hidden lg:flex"
        }`}
      >
        <p
          className={`bg-red-800 text-white font-medium text-[9px] md:text-xs w-fit rounded-full px-2 py-0.5 md:px-2.5 md:py-1 ${
            likedItems.length === 0 ? "hidden" : "flex"
          } absolute right-1 md:right-0 top-0 md:-top-1`}
        >
          {likedItems.length}
        </p>
        <HeartIcon
          className={`${
            className ? className : "w-[26px] h-6"
          } stroke-black fill-none group-hover:stroke-none group-hover:fill-myOrange transition-all duration-300`}
        />
      </DialogTrigger>
      <DialogContent className="px-0 border-none">
        <DialogTitle>Favourites</DialogTitle>
        <DialogDescription>These are the products you liked.</DialogDescription>
        <CartDialog type="Favourites" data={likedItems} />
      </DialogContent>
    </Dialog>
  );
}

function ResultItem({
  item,
  setIsHidden,
}: {
  item: ProductList;
  setIsHidden: (isHidden: boolean) => void;
}) {
  return (
    <Link
      onClick={() => setIsHidden(true)}
      href={`/shop/${item.id}`}
      className="flex items-center justify-between hover:bg-gray-100 p-1.5 rounded-[4px]"
    >
      <div className="flex items-center gap-3">
        <img
          src={item.productImage}
          alt="Product Image"
          className="w-16 h-16 rounded-[5px]"
        />

        <div className="flex flex-col">
          <p className={`text-sm`}>{item.name}</p>
          <p className={`text-xs text-gray-500`}>
            {item.type === "discount"
              ? "₦" + item.newPrice?.toLocaleString()
              : "₦" + item.originalPrice.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

const navLinks: NavLinks[] = [
  { name: "Home", href: "/", isActive: true },
  { name: "Shop", href: "/shop", isActive: false },
  { name: "Blog", href: "/blog", isActive: false },
  { name: "Contact", href: "/contact", isActive: false },
];

interface NavLinks {
  name: string;
  href: string;
  isActive: boolean;
}

interface ProductList {
  id: number;
  type: "normal" | "discount" | "new";
  productImage: string;
  name: string;
  description: string;
  newPrice?: number;
  originalPrice: number;
  discount?: string;
  count?: number;
  isLiked?: boolean;
}
