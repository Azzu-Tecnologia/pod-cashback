import styled from "styled-components";
import { colors } from "src/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { metrics } from "src/utils";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.primary};
  padding: ${metrics.px30}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperHeader = styled.View`
  flex: 1;
  padding-left: ${metrics.px10}px;
`;

export const WrapperInfo = styled.View`
  align-items: center;
`;
