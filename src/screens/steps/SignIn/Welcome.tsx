import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '@/src/styles/_color'
import Background2 from '@/src/assets/svg/Background2';
import BaseButton from '@/src/components/base/BaseButton';

type Props = {
  onNext: () => void;
}

const Welcome = ({ onNext }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Background2 />
      </View>
      <View style={styles.text_container}>
        <View style={styles.text_inner}>
          <Text style={styles.text_welcome}>Welcome, </Text>
          <View>
            <Text style={styles.text_title}>
              Developer
            </Text>
            <View style={styles.empty_border} />
          </View>
        </View>
        <Text
          style={styles.text_content}
        >{`Devrary에서 개발 공부에 필요한 학습 자료들을 찾고, \n자신이 공부한 내용을 남겨보세요 🖥️`}</Text>
      </View>
      <View style={styles.button_container}>
        <View style={styles.button_inner}>
          <BaseButton
            title="Next"
            type="padding"
            paddingHorizontal={20}
            paddingVertical={7}
            style={'outline'}
            border={2}
            radius={12}
            color1={COLOR.PRIMARY}
            color2={COLOR.PRIMARY}
            fontSize={16}
            onPress={() => onNext()}
          ></BaseButton>
        </View>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image_container: {
    flex: 6,
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
  empty_border: {
    height: 2,
    backgroundColor: COLOR.PRIMARY,
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    transform: [{ translateY: 2 }]
  },
  text_container: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  text_inner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  text_title: {
    fontSize: 36,
    fontWeight: '400',
  },
  text_welcome: {
    color: COLOR.TEXT_1,
    fontSize: 24,
    fontWeight: '400',
  },
  text_content: {
    color: COLOR.TEXT_3,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 28,
    paddingRight: (Dimensions.get('screen').width / 7),
    lineHeight: 22,
  },
  button_container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  button_inner: {
    marginBottom: 50,
    marginRight: 10,
  },
});
