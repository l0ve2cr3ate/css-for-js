import { useState } from "react";
import SHOES from "../../data";
import Breadcrumbs from "../Breadcrumbs";
import Dropdown from "../Dropdown";
import Header from "../Header";
import ShoeItem from "../ShoeItem";
import Sidebar from "../Sidebar";
import Spacer from "../Spacer";
import SuperHeader from "../SuperHeader/SuperHeader";
import Title from "../Title";
import {
  Container,
  LeftAside,
  TitleDropdownContainer,
  ShoeGridContainer,
  MainColumn,
} from "./App.styles";

function App() {
  const [sortValue, setSortValue] = useState("newest");
  return (
    <div className="App">
      <header>
        <SuperHeader />
        <Header />
      </header>
      <Container>
        <LeftAside>
          <Breadcrumbs>
            <Breadcrumbs.Breadcrumb href="/home">Home</Breadcrumbs.Breadcrumb>
            <Breadcrumbs.Breadcrumb href="/sale">Sale</Breadcrumbs.Breadcrumb>
            <Breadcrumbs.Breadcrumb href="/shoes">Shoes</Breadcrumbs.Breadcrumb>
          </Breadcrumbs>
          <Spacer height="30px" />
          <Sidebar />
        </LeftAside>
        <MainColumn>
          <TitleDropdownContainer>
            <Title>Sale</Title>
            <Dropdown
              label="Sort"
              value={sortValue}
              onChange={(event) => setSortValue(event.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Dropdown>
          </TitleDropdownContainer>
          <Spacer height="30px" />
          <ShoeGridContainer>
            {SHOES.map((shoe) => (
              <ShoeItem key={shoe.slug} shoe={shoe} />
            ))}
          </ShoeGridContainer>
        </MainColumn>
      </Container>
    </div>
  );
}

export default App;
