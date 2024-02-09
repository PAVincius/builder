"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Ghost } from "lucide-react"

const links = [
  {
    name: "Home",
    href: "/builder",
    code: "https://github.com/Nebuloz/Galaxies/tree/main/Blocks/Navbar",
  },
  {
    name: "About Us",
    href: "/about",
    code: "https://github.com/Nebuloz/Galaxies/tree/main/Blocks/Navbar",
  },
  {
    name: "Projects",
    href: "/projects",
    code: "https://github.com/Nebuloz/Galaxies/tree/main/Blocks/Navbar",
  },
]

interface Model1 extends React.HTMLAttributes<HTMLDivElement> {}

export function Model1({ className, ...props }: Model1) {
  const pathname = usePathname()

  return (
    <div className="relative">
        <div className={cn("mb-4 flex items-center justify-between", className)} {...props}>
        <a href="#" className=" mx-1.5 sm:mx-6">
        <svg width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.50643 28.4759V8.69264L5.61724 12.8034V28.4759H1.50643ZM20.0051 0.0428203H24.073V28.3474L1.50643 5.78082V0L20.0051 18.4558V0.0428203Z" fill="#FFFAF4"/>
          <path d="M24.073 27.8764L26.5995 24.4079H49.4658V28.3474H24.073V27.8764ZM28.0982 22.3525L41.3727 4.15363H24.073V0.0428203H49.4658L33.1939 22.3525H28.0982Z" fill="#FFFAF4"/>
          <path d="M1.4881 32.8293V12.9965L5.18904 17.1176V32.8293H1.4881ZM18.1424 4.32502H21.8048V32.7006L1.4881 10.0774V4.28209L18.1424 22.7841V4.32502Z" fill="#181818"/>
          <path d="M21.8048 32.2283L24.0793 28.7512H44.6658V32.7006H21.8048V32.2283ZM25.4286 26.6906L37.3796 8.44612H21.8048V4.32502H44.6658L30.0162 26.6906H25.4286Z" fill="#181818"/>
          <path d="M0.774414 29.6178V10.0329L4.62829 14.1024V29.6178H0.774414ZM18.1169 1.46975H21.9306V29.4906L0.774414 7.15023V1.42736L18.1169 19.6981V1.46975Z" fill="#FF5757"/>
          <path d="M21.9306 29.0243L24.2991 25.5906H45.7363V29.4906H21.9306V29.0243ZM25.7042 23.5558L38.149 5.53935H21.9306V1.46975H45.7363L30.4814 23.5558H25.7042Z" fill="#FF5757"/>
        </svg>
        </a>
        <div className="flex flex-row ">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                pathname?.startsWith(link.href) ||
                  (index === 0 && pathname === "/")
                  ? "bg-transparent font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          </div>
          <Button>Contact</Button>
        </div>
    </div>
  )
}
