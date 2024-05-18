import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/types/routes';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from 'App';
import { useCallback, useEffect } from 'react';
import { SET_THEME } from '@/src/redux/slice/appSlice';
import { getAuthState } from '@/src/redux/slice/authSlice';
import { ROUTES } from '@/src/constant/routes';
import ErrorScreen from '@/src/screens/screen/ErrorScreen';
import { getError } from '@/src/redux/slice/errorSlice';
import LoadingScreen from '@/src/screens/screen/LoadingScreen';
import HomeScreen from '@/src/screens/screen/HomeScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  const dispatch = useDispatch();
  const theme = storage.getString('theme');
  const { isError, code } = useSelector(getError);
  const { isSignIn, isSigningIn, isSigningUp } = useSelector(getAuthState);

  const renderScreen = useCallback(() => {
    if (isError) {
      return (
        <Stack.Screen name={ROUTES.SCREEN.ERROR} component={ErrorScreen} />
      );
    }
    if (!isSignIn && isSigningIn && isSigningUp) {
      return (
        <Stack.Screen name={ROUTES.SCREEN.LOADING} component={LoadingScreen} />
      );
    } else if (!isSignIn && !isSigningIn && !isSigningUp) {
      return <Stack.Screen name={ROUTES.SCREEN.HOME} component={HomeScreen} />;
    } else {
      return <Stack.Screen name={ROUTES.SCREEN.HOME} component={HomeScreen} />;
    }
  }, [isSignIn, isSigningIn, isSigningUp]);

  useEffect(() => {
    if (theme !== undefined) {
      dispatch(
        SET_THEME({
          theme: theme,
        })
      );
    }
  }, [theme]);

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'none',
        headerShown: false,
      }}
    >
      {renderScreen()}
    </Stack.Navigator>
  );
};

export default StackNavigator;
