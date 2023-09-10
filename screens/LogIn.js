import React, { useEffect, useRef } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthSahred';
import { useForm } from 'react-hook-form';
import AuthButton from '../components/auth/AuthButton';
import { gql, useMutation } from '@apollo/client';
import { isLoggedInVar, logUserIn } from '../apollo';

const LOG_IN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function LogIn({ route: { params } }) {
  const { register, handleSubmit, setValue, watch, getValues } = useForm({
    defaultValues: {
      username: params?.username,
      password: params?.password,
    },
  });
  const passwordRef = useRef();
  const onCompleted = async (data) => {
    const {
      login: { ok, token },
    } = data;
    if (ok) {
      await logUserIn(token);
    }
  };
  const [logInMutation, { loading }] = useMutation(LOG_IN_MUTATION, {
    onCompleted,
  });
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  const onValid = (data) => {
    if (!loading) {
      logInMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    // useEffect:딱 한 번만 실행하거나 register가 바뀌면 실행하게 만듬.
    register('username', { required: true });
    register('password', { required: true });
  }, [register]);
  return (
    <AuthLayout>
      <TextInput
        value={watch('username')}
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize={'none'}
        placeholderTextColor={'rgba(244,244,244,0.6)'}
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue('username', text)}
      />
      <TextInput
        value={watch('password')}
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
        loading={loading}
        disabled={!watch('username') || !watch('password')}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
