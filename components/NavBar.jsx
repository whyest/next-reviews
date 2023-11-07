import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="mr-auto font-orbitron font-bold">
          <NavLink href="/">Indie Gamer</NavLink>
        </li>
        <li>
          <NavLink href="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink href="/about" prefetch={false}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
