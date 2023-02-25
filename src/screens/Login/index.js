import React from "react";
import { Wrapper, WrapperLogo } from "./styles";
import Logo from "src/assets/logos";
import { Button, SocialButton, Space, Text } from "src/components/UI";

function Login({ navigation }) {
  return (
    <Wrapper>
      <WrapperLogo>
        <Logo.Minimal width="230px" height="230px" />
        <Space />
        <Logo.Pod />
        <Space size={8} />
        <Logo.CashBack />
      </WrapperLogo>
      <Button text="ENTRAR" onPress={() => navigation.replace("Home")} />
      <Space size={12} />
      <Text color="white" weight={600} size={12}>
        OU
      </Text>
      <Space size={12} />
      <SocialButton type="apple" />
      <Space />
      <SocialButton type="google" />
    </Wrapper>
  );
}

export default Login;
