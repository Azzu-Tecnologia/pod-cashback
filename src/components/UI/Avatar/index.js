import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components";
import { colors } from "../../../styles";

const Wrapper = styled.View`
  background: ${colors.secondary};
  border-radius: ${({ size }) => {
    return size;
  }}px;
  width: ${({ size }) => {
    return size;
  }}px;
  height: ${({ size }) => {
    return size;
  }}px;
`;

export default ({ size }) => {
  return <Wrapper size={size || 30} />;
};
