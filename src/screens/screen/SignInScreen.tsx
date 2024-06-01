import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/types/routes';
import { SignInStepType } from '@/src/types/app';
import Welcome from '@/src/screens/steps/SignIn/Welcome';
import SignIn from '../steps/SignIn/SignIn';

type Props = NativeStackScreenProps<StackParamList, 'SignInScreen'>;

const SignInScreen = ({ navigation, route }: Props) => {
  const { step } = route.params;
  const [pageStep, setPageStep] = useState<SignInStepType>(step);

  return pageStep === 'welcome' ? <Welcome onNext={() => setPageStep('app')} /> : <SignIn onNext={() => setPageStep('welcome')} />
};

export default SignInScreen;