import React from "react";
import { Row, WrapperHeader, WrapperInfo, Wrapper } from "./styles";
import { Text, Avatar, Space } from "../../components/UI/";
import Icons from "../../assets/icons";

function Header() {
  return (
    <Wrapper>
      <Row>
        <Avatar size={40} />
        <WrapperHeader>
          <Text size={10} weight={300}>
            Olá,
          </Text>
          <Text size={16} weight={600}>
            Nome usuário
          </Text>
        </WrapperHeader>
        <Icons.QRCode />
      </Row>
      <Space size={40} />
      <WrapperInfo>
        <Text size={12} weight={300}>
          Cashback Disponível
        </Text>
        <Text size={40} weight={700}>
          R$ 243,13
        </Text>
      </WrapperInfo>
    </Wrapper>
  );
}

export default Header;
