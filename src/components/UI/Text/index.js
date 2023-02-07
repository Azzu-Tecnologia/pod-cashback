import styled from "styled-components/native";
import { colors } from "../../../styles";

const Text = styled.Text`
  font-size: ${({ size }) => size || 16}px;
  font-weight: ${({ weight }) => weight || 400};
  color: ${({ color }) => (color ? colors[color] || color : "#000")};
  text-align: ${({ align }) => align || "left"};
  ${({ uppercase }) => uppercase && `text-transform: uppercase;`}
`;

export default Text;
