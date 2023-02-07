import React from "react";
import { ActivityIndicator } from "react-native";

import { Wrapper, Text, ButtonWrapper } from "./styles";

const Button = ({
  color,
  disabled,
  indicatorColor,
  loading,
  onPress,
  children,
  style,
  text,
  fontSize,
  fontWeight,
  outline,
  square,
  round,
  small,
}) => (
  <ButtonWrapper
    onPress={onPress}
    color={color}
    disabled={loading || disabled}
    loading={loading}
    outline={outline}
    square={square}
    round={round}
    small={small}
  >
    {loading && <ActivityIndicator color={indicatorColor} />}
    {!loading && (
      <Text
        outline={outline}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        type="h4"
      >
        {children || text}
      </Text>
    )}
  </ButtonWrapper>
);

export default Button;
