import { HeaderContainer, Nav, NavLink } from "./Header.styles";
import Logo from "../Logo";

const Header = () => (
  <HeaderContainer>
    <Logo href="/">Sole&Ankle</Logo>
    <Nav role="main">
      <NavLink href="/sale">Sale</NavLink>
      <NavLink href="/releases">New Releases</NavLink>
      <NavLink href="/men">Men</NavLink>
      <NavLink href="/women">Women</NavLink>
      <NavLink href="/kids">Kids</NavLink>
      <NavLink href="/collections">Collections</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
