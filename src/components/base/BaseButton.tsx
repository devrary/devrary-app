import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BaseButtonProps } from '@/src/types/ui/Button';

const BaseButton = ({
  onPress,
  title,
  type,
  paddingHorizontal = 0,
  paddingVertical,
  style,
  icon,
  border = 0,
  radius,
  color1,
  color2,
  fontSize,
}: BaseButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: type === 'width' ? '100%' : 'auto',
        height: 'auto',
        paddingHorizontal: type === 'padding' ? paddingHorizontal : 0,
        paddingVertical: paddingVertical,
        borderRadius: radius,
        borderWidth: border,
        backgroundColor: style === 'fill' ? color1 : 'transparent',
        borderColor: style === 'outline' ? color2 : 'transparent',
      }}
      onPress={() => onPress()}
    >
      <Text
        style={{
          fontSize: fontSize,
          textAlign: 'center',
          color: style === 'fill' ? color2 : color1,
        }}
      >
        {icon && icon}
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BaseButton;
