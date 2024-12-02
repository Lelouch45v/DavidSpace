"use client";
import { Socials ,nav_links } from "@/constants";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (sectionId: string) => {
    if (pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } 
    else {
      router.push(`/#${sectionId}`);
    }
  };

  
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
             David Space 
          </span>
        </a>
        
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {nav_links.map((navItem) => (
              <a
                key={navItem.section}
                onClick={() => handleNavClick(navItem.section)}
                className="cursor-pointer"
              >
                {navItem.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            social.link ? (
              <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ) : (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
