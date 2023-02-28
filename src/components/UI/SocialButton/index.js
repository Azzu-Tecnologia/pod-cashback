import React from "react";
import { ActivityIndicator } from "react-native";
import Icons from "src/assets/socialMedia";
import { Wrapper, Text, ButtonWrapper } from "./styles";
import Space from "../Space";

function SocialButton({
  disabled,
  loading,
  onPress,
  type,
  outline,
  square,
  round,
}) {
  const socials = {
    google: { name: "Conectar com Google", icon: <Icons.Google size={18} /> },
    facebook: { name: "Facebook", icon: <Icons.Facebook size={18} /> },
    apple: { name: "Conectar com a Apple", icon: <Icons.Apple size={18} /> },
  };
  return (
    <Wrapper>
      <ButtonWrapper
        onPress={onPress}
        disabled={loading || disabled}
        loading={loading}
        outline={outline}
        square={square}
        round={round}
        type={type}
      >
        {/* {!loading && socials[type].icon} */}
        <Space size={5} />
        <Text> {!loading && socials[type].name} </Text>
        {loading && <ActivityIndicator />}
      </ButtonWrapper>
    </Wrapper>
  );
}

export default SocialButton;
