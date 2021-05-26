import Icon from "../Icon";
import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton.js";
import {
  MarketingMessage,
  SuperHeaderContainer,
  HelpLink,
} from "./SuperHeader.styles";

const SuperHeader = () => (
  <SuperHeaderContainer>
    <MarketingMessage>
      Free shipping on domestic orders over $75!
    </MarketingMessage>
    <SearchInput placeholder="Search..." />
    <HelpLink href="/">Help</HelpLink>
    <UnstyledButton>
      <Icon id="shopping-bag" />
    </UnstyledButton>
  </SuperHeaderContainer>
);

export default SuperHeader;
