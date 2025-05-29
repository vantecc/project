import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export function SescLogo({ size = 100, showText = true }) {
  const scale = size / 100;
  
  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer, { width: size, height: size }]}>
        <View style={[styles.square, { transform: [{ scale }] }]}>
          <Text style={[styles.logoText, { fontSize: 36 * scale }]}>S</Text>
        </View>
      </View>
      {showText && (
        <Text style={[styles.sescText, { fontSize: 24 * scale }]}>SESC</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  sescText: {
    color: Colors.primary,
    fontWeight: 'bold',
    marginTop: 8,
  },
});