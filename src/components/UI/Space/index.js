import styled from "styled-components/native";
import { colors } from "../../../styles";

const Space = styled.View`
  height: ${({ size }) => size || 16}px;
  width: ${({ size }) => size || 16}px;
`;

export default Space;
