import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthSahred';

export default function LogIn({ navigation }) {
  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        returnKeyType="next"
        placeholderTextColor={'rgba(244,244,244,0.8)'}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={'rgba(244,244,244,0.8)'}
      />
    </AuthLayout>
  );
}
