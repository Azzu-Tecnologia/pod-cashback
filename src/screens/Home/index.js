import React from "react";
import { Wrapper, WrapperLogo } from "./styles";
import Logo from "../../assets/logos";

function HomeScreen() {
  return (
    <Wrapper>
      <WrapperLogo>
        <Logo.Minimal width="230px" height="230px" />
      </WrapperLogo>
      <Logo.Pod />
      <Logo.CashBack />
    </Wrapper>
  );
}

export default HomeScreen;
