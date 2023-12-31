import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import { TouchableOpacity } from 'react-native';
import AuthLayout from '../components/auth/AuthLayout';
import AuthButton from '../components/auth/AuthButton';

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate('CreateAccount');
  const goToLogIn = () => navigation.navigate('LogIn');
  return (
    <AuthLayout>
      <AuthButton
        onPress={goToCreateAccount}
        disabled={false}
        text="Create New Account"
      />

      <TouchableOpacity onPress={goToLogIn}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
