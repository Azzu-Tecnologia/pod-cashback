import React, { useEffect } from "react";
import { Wrapper, WrapperLogo } from "./styles";
import Logo from "src/assets/logos";

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 5000);
  }, []);

  return (
    <Wrapper>
      <WrapperLogo>
        <Logo.Minimal />
      </WrapperLogo>
      <Logo.CashBack />
    </Wrapper>
  );
}

export default SplashScreen;
