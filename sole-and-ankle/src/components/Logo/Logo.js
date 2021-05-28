import { LogoContainer, LogoText } from "./Logo.styles";

const Logo = ({ href, children }) => (
  <LogoContainer href={href}>
    <LogoText>{children}</LogoText>
  </LogoContainer>
);

export default Logo;
