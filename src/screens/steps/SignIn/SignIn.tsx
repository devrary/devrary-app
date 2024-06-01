import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background1 from '@/src/assets/svg/Background1';
import { COLOR } from '@/src/styles/_color';
import BaseButton from '@/src/components/base/BaseButton';

type Props = {
  onNext: () => void
}

const SignIn = ({ onNext }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Background1 />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text_title}>Sign in</Text>
      </View>
      <View style={styles.button_container}>
        <BaseButton
          title="Continue with Google"
          type='width'
          paddingVertical={11}
          style={'outline'}
          border={1}
          radius={12}
          color1={COLOR.TEXT_2}
          color2={COLOR.TEXT_2}
          fontSize={16}
          onPress={() => onNext()}
        ></BaseButton>
        <View style={{ height: 12 }} />
        <BaseButton
          title="Continue with Apple"
          type='width'
          paddingVertical={11}
          style={'outline'}
          border={1}
          radius={12}
          color1={COLOR.TEXT_2}
          color2={COLOR.TEXT_2}
          fontSize={16}
          onPress={() => onNext()}
        ></BaseButton>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image_container: {
    flex: 3,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: 'rgb(130, 130, 130)',
        shadowOpacity: 0.5,
        shadowRadius: 32,
        shadowOffset: {
          height: 4,
          width: 4,
        },
      },
    })
  },
  text_container: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  text_title: {
    fontSize: 36,
  },
  button_container: {
    flex: 2,
    width: '100%',
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
})