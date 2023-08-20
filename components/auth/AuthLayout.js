import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;
`;
//react nativ 에서는 모든 flex 컨테이너가 기본적으로 flex direction이 column임.

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
`;

export default function AuthLayout({ children }) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
      <Container>
        <Logo resizeMode="contain" source={require('../../assets/logo.png')} />
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
}
