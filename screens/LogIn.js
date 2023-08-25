import React, { useEffect, useRef } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthSahred';
import { useForm } from 'react-hook-form';
import AuthButton from '../components/auth/AuthButton';

export default function LogIn({ navigation }) {
  const { register, handleSubmit, setValue } = useForm();
  const passwordRef = useRef();
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  const onValid = (data) => {
    console.log(data);
  };

  useEffect(() => {
    // useEffect:딱 한 번만 실행하거나 register가 바뀌면 실행하게 만듬.
    register('username', { required: true });
    register('password', { required: true });
  }, [register]);
  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize={'none'}
        placeholderTextColor={'rgba(244,244,244,0.6)'}
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue('username', text)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={'rgba(244,244,244,0.6)'}
        onChangeText={(text) => setValue('password', text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton
        text="Log In"
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
