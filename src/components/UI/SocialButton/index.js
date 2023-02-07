import React from "react";
import { ActivityIndicator } from "react-native";
import Icons from "../../../assets/SocialMedia";
import { Wrapper, Text, ButtonWrapper } from "./styles";

function SocialButton({
  disabled,
  loading,
  onPress,
  type,
  fontSize,
  fontWeight,
  outline,
  square,
  round,
}) {
  const socials = {
    google: { name: "Google", icon: <Icons.Google size={18} /> },
    facebook: { name: "Facebook", icon: <Icons.Facebook size={18} /> },
    apple: { name: "a Apple", icon: <Icons.Apple size={18} /> },
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
        {!loading && socials[type].icon}
        {loading && <ActivityIndicator />}
      </ButtonWrapper>
    </Wrapper>
  );
}

export default SocialButton;
