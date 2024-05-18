import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FunnelProps } from '@/src/types';

type Props = {
  funnelProps: FunnelProps[];
};

const Funnel = ({ funnelProps }: Props) => {
  return (
    <View>
      <Text>Funnel</Text>
    </View>
  );
};

export default Funnel;

const styles = StyleSheet.create({});
