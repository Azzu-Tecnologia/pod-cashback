import styled from "styled-components";
import { colors } from "src/styles";
import { metrics } from "src/utils";

export const Card = styled.TouchableOpacity`
  background-color: ${colors.gray500};
  border-radius: ${metrics.px8}px;
  width: ${metrics.px(76)}px;
  height: ${metrics.px(76)}px;
  justify-content: center;
  align-items: center;
`;
