import Link from "next/link";
import { mPlusRounded1c } from "../../lib/font";
import HamburgerMenu from "./HamburgerMenu";
import Overlay from "./Overlay";
import UserMenu from "./UserMenu";

export default function Header() {


  return (
    <>
      {/* overlay (for floating menu) */}
      <Overlay />

      {/* Main Header */}
      <nav className="flex justify-between items-center bg-secondary-1/30 backdrop-blur-md sticky top-0 z-50">
        {/* Main Logo */}
        <div className="flex items-center">
          {/* Hamburger icon and floating menu container */}
          <HamburgerMenu />
          <Link
            href="/home"
            className={`${mPlusRounded1c.className} block cursor-pointer mx-1.5 my-2 font-black text-4xl p-2 text-primary-1`}
          >
            Todo
          </Link>
        </div>
        <UserMenu />
      </nav>
    </>
  );
}
