import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 20px;
`;
//react nativ 에서는 모든 flex 컨테이너가 기본적으로 flex direction이 column임.

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export default function AuthLayout({ children }) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyboard}
      disabled={Platform.OS === 'web'}
    >
      <Container>
        <KeyboardAvoidingView
          style={{ width: '100%', justifyContent: 'center' }}
          behavior="position"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
        >
          <Logo
            resizeMode="contain"
            source={require('../../assets/logo.png')}
          />
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
