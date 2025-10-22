"use client";

import Link from "next/link";

import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Team", path: "#team" },
    { name: "Statistics", path: "#statistics" },
    { name: "Moreover", path: "#moreover" },
    { name: "Contact Us", path: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 mx-auto">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className="text-secondary-foreground hover:text-primary active:text-primary/80 px-3 py-2 transition-colors duration-200">
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-secondary-foreground hover:text-primary active:text-primary/80 p-2 cursor-pointer transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} onClick={() => setMobileMenuOpen(false)} className="block text-secondary-foreground hover:text-primary active:text-primary/80 px-3 py-2 transition-colors duration-200">
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
