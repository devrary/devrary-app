import { ROUTES } from '@/src/constant/routes';
import { StackCodeParams } from '@/src/types';
import { SignInStepType } from '@/src/types/app';

export type StackParamList = {
  // Screen
  [ROUTES.SCREEN.HOME]: undefined;
  [ROUTES.SCREEN.LOADING]: StackCodeParams;
  [ROUTES.SCREEN.ERROR]: StackCodeParams;
  [ROUTES.SCREEN.SIGN_IN]: StackCodeParams & {
    step: SignInStepType;
  };

  // Modal
  [ROUTES.MODAL.ERROR]: StackCodeParams;
  [ROUTES.MODAL.LOADING]: StackCodeParams;
};
