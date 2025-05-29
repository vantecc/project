import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const Typography = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
    lineHeight: 34,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary,
    lineHeight: 30,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
    lineHeight: 26,
  },
  h4: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
    lineHeight: 24,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.textPrimary,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.textSecondary,
    lineHeight: 16,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
    lineHeight: 22,
  },
  buttonSmall: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
    lineHeight: 20,
  },
});