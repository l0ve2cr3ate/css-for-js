import React from "react";
import styled from "styled-components";
import "@reach/tooltip/styles.css";

import Header from "./Header";
import PageContent from "./PageContent";
import GlobalStyles from "./GlobalStyles";
import HelpButton from "./HelpButton";

export default function App() {
  return (
    <Wrapper>
      <HelpButton />
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageContent />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 150vh;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
`;
