import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import restaurantImage from '../../assets/fried-potatoes.png';

import {
  Container,
  Header,
  HeaderTitle,
  OrderBox,
  OrderTitle,
  OrderBoxHeader,
  OrderDescriptionTitle,
  OrderDescription,
  OrderDescriptionItems,
  OrderDescriptionTitlePrice,
  OrderDescriptionHeader,
  ButtonContainer,
  ButtonLabel,
} from './style';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const Order = () => (
  <Container>
    <Header>
      <HeaderTitle>Pedidos</HeaderTitle>
    </Header>
    <OrderBox>
      <OrderBoxHeader style={{ borderBottomWidth: 1, borderColor: '#ededed' }}>
        <Image source={restaurantImage} style={{ resizeMode: 'contain' }} />
        <OrderTitle>Bar do Silva</OrderTitle>
      </OrderBoxHeader>
      <OrderDescription>
        <OrderDescriptionHeader>
          <OrderDescriptionTitle>Prato do dia</OrderDescriptionTitle>
          <OrderDescriptionTitlePrice>R$ 18,90</OrderDescriptionTitlePrice>
        </OrderDescriptionHeader>
        <OrderDescriptionItems>
          Arroz, feijão, ovo frito, bife de carne
        </OrderDescriptionItems>
      </OrderDescription>
      <ButtonContainer>
        <ButtonLabel>DETALHES</ButtonLabel>
      </ButtonContainer>
    </OrderBox>
  </Container>
);

export default Order;
