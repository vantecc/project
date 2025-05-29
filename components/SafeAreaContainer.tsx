import React from 'react';
import { SafeAreaView, StyleSheet, Platform, ViewStyle, StatusBar } from 'react-native';
import { Colors } from '../constants/Colors';

interface SafeAreaContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
}

export function SafeAreaContainer({ 
  children, 
  style, 
  backgroundColor = Colors.white 
}: SafeAreaContainerProps) {
  return (
    <SafeAreaView style={[
      styles.container, 
      { backgroundColor }, 
      style
    ]}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={backgroundColor} 
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});