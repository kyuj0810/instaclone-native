import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import { Text, TouchableOpacity } from 'react-native';

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
  height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 13px 10px;
  margin-top: 20px;
  border-radius: 3px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;
const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
  /* font-size: 16px; */
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate('CreateAccount');
  const goToLogIn = () => navigation.navigate('LogIn');
  return (
    <Container>
      <Logo resizeMode="contain" source={require('../assets/logo.png')} />

      <CreateAccount disabled={false} onPress={goToCreateAccount}>
        <CreateAccountText>Create New Account</CreateAccountText>
      </CreateAccount>

      <TouchableOpacity onPress={goToLogIn}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </Container>
  );
}
