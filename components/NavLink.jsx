"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href, prefetch }) => {
  const pathName = usePathname();

  if (href === pathName) {
    return <span className="text-orange-700 underline">{children}</span>;
  }

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className="text-orange-800 hover:underline"
    >
      {children}
    </Link>
  );
};
export default NavLink;
