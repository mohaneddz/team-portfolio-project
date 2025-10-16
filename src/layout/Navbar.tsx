"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { useState } from "react";

export default function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Team",
      link: "#team",
    },
    {
      name: "Statistics",
      link: "#statistics",
    },
    {
      name: "Moreover",
      link: "#moreover",
    },
    {
      name: "Contact Us",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (

    <Navbar>

      {/* Desktop Navigation */}
      <NavBody className="h-14">
        {/* <NavbarLogo /> */}
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>

  );
}

