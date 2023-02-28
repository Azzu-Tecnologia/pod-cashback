import React from "react";
import { Card } from "./styles";
import Icons from "src/assets/icons";
import { Text } from "src/components/UI";

export default () => {
  return (
    <Card onPress={() => alert("Testado")}>
      <Icons.Beer />
    </Card>
  );
};
