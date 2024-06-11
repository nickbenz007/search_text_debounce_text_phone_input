import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Search</Link>
        </li>
        <li>
          <Link to={"/searchdebounce"}>Debounce</Link>
        </li>
        <li>
          <Link to={"/finalphoneinput"}>Phone</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};
