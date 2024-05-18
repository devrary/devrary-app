import { ROUTES } from '@/src/constant/routes';
import { StackCodeParams } from '@/src/types';

export type StackParamList = {
  // Screen
  [ROUTES.SCREEN.HOME]: undefined;
  [ROUTES.SCREEN.LOADING]: StackCodeParams;
  [ROUTES.SCREEN.ERROR]: StackCodeParams;

  // Modal
  [ROUTES.MODAL.ERROR]: StackCodeParams;
  [ROUTES.MODAL.LOADING]: StackCodeParams;
};
