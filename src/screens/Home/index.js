import React from "react";
import { Wrapper } from "./styles";
import Header from "src/components/Header";
import Categories from "src/components/Categories";

function HomeScreen() {
  return (
    <Wrapper>
      <Header />
      <Categories />
    </Wrapper>
  );
}

export default HomeScreen;
