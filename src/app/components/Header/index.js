import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

export default function Header({ profile }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white border-b border-gray-200 mb-10">
      <nav
        className="mx-auto flex items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <Logo />
        <NavigationLinks router={router} profile={profile} />
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
      </nav>
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
}
