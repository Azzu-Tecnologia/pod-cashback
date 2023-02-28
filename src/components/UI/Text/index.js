import styled from "styled-components/native";
import { colors } from "../../../styles";

const fonts = {
  100: "Montserrat-Thin",
  200: "Montserrat-ExtraLight",
  300: "Montserrat-Light",
  400: "Montserrat-Regular",
  500: "Montserrat-Medium",
  600: "Montserrat-SemiBold",
  700: "Montserrat-Bold",
  800: "Montserrat-ExtraBold",
};

const Text = styled.Text`
  font-family: ${({ weight }) => fonts[weight || 400]};
  font-size: ${({ size }) => size || 16}px;
  font-weight: ${({ weight }) => weight || 400};
  color: ${({ color }) => (color ? colors[color] || color : "#000")};
  text-align: ${({ align }) => align || "left"};
  ${({ uppercase }) => uppercase && `text-transform: uppercase;`}
`;

export default Text;
