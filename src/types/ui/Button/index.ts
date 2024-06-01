import { ReactNode } from 'react';

export type BaseButtonProps = {
  onPress: () => void;
  title: string;
  type: 'width' | 'padding';
  style: 'fill' | 'outline';
  paddingHorizontal?: number;
  paddingVertical: number;
  icon?: ReactNode;
  radius: number;
  color1: string;
  color2: string;
  border?: number;
  fontSize: number;
};
