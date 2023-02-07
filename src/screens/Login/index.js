import React from "react";
import { Wrapper, WrapperLogo } from "./styles";
import Logo from "../../assets/logos";
import { Button } from "../../components/UI";

function Login() {
  return (
    <Wrapper>
      <WrapperLogo>
        <Logo.Minimal width="230px" height="230px" />
      </WrapperLogo>
      <Logo.Pod />
      <Logo.CashBack />
      <Button text="ENTRAR" />
    </Wrapper>
  );
}

export default Login;
