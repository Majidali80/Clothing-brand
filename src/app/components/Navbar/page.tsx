
"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { useState } from "react"; // Import useState for toggling hamburger menu

// Updated image paths (from the public/Navbar folder)
const socialIcons = [
  { src: "/12.png", alt: "user" },
  { src: "/6.png", alt: "search" },
  { src: "/7.png", alt: "cart" },
  { src: "/8.png", alt: "mail" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
    console.log("Menu toggled:", isMenuOpen); // Check if the menu toggle is working
  };

  return (
    <div className="w-[1440px] h-[58px] lg:w-[1337px] lg:h-[58px] lg:px-[17px] lg:pl-[38px] flex items-center justify-between gap-[20px]">
      {/* Logo */}
      <div className="flex items-center">
      <h3 className="font-Montserrat font-semibold leading-[32px] text-[24px] text-[#252B42] mt-1 hidden lg:block">
  Bandage
</h3>

      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:flex-grow lg:justify-between items-center">
        <ul className="font-Montserrat font-semibold text-[14px] text-[#737373] gap-[20px] leading-[24px] flex ml-40">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Shop">Shop</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Team">Blog</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
          <li><Link href="/Product-1">Pages</Link></li>
        </ul>

        {/* Login / Register section */}
        <div className="flex items-center">
          <div className="w-[166px] h-[54px] p-[15px] flex items-center gap-[10px] mr-3">
            <div className="w-[12px] h-[12px] mt-[6px] ">
              <Image src={socialIcons[0].src} alt={socialIcons[0].alt} width={12} height={12} />
            </div>
            <span className="font-Montserrat font-semibold text-[14px] text-[#23A6F0]">
              Login / Register
            </span>
          </div>

          {/* Icons section */}
          <ul className="flex gap-[35px] items-center mr-10">
            {socialIcons.slice(1).map((icon, index) => (
              <li key={index}>
                <Image src={icon.src} alt={icon.alt} width={16} height={16} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      


      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center justify-between p-4 w-full">
        <h3 className="font-Montserrat font-semibold text-[24px]">Bandage</h3>
        <div className="flex items-center gap-[10px] sm:block md:block lg:hidden xl:hidden">
  <div className="w-[166px] h-[54px] p-[15px] flex items-center gap-[5px]">
        
  </div>

  {/* Icons section (Only Cart and Search Icons) */}
  <ul className="flex gap-[28px] items-center mr-10">
    <li>
      <Image src={socialIcons[1].src} alt={socialIcons[1].alt} width={24} height={24} /> {/* Search Icon */}
    </li>
    <li>
      <Image src={socialIcons[2].src} alt={socialIcons[2].alt} width={24} height={24} /> {/* Cart Icon */}
    </li>
  </ul>
</div>

        {/* Hamburger Icon */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`${isMenuOpen ? "block" : "hidden"} absolute bottom-0 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4`}>
        <ul className="font-Montserrat font-semibold text-[14px] text-white leading-[24px] gap-4 flex flex-col items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Product</Link></li>
          <li><Link href="/pricing">Pricing</Link></li> {/* New Pricing Link */}
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Close button */}
        <button onClick={toggleMenu} className="text-white font-Montserrat text-[14px]">
          Close Menu
        </button>
      </div>
    </div>
  );
}

