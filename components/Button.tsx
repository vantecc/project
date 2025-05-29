import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  style,
  textStyle,
  ...rest
}: ButtonProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return disabled ? styles.primaryDisabled : styles.primary;
      case 'secondary':
        return disabled ? styles.secondaryDisabled : styles.secondary;
      case 'outline':
        return disabled ? styles.outlineDisabled : styles.outline;
      case 'text':
        return styles.text;
      default:
        return disabled ? styles.primaryDisabled : styles.primary;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryText;
      case 'secondary':
        return styles.secondaryText;
      case 'outline':
        return disabled ? styles.outlineDisabledText : styles.outlineText;
      case 'text':
        return disabled ? styles.textDisabledText : styles.textText;
      default:
        return styles.primaryText;
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.small;
      case 'medium':
        return styles.medium;
      case 'large':
        return styles.large;
      default:
        return styles.medium;
    }
  };

  const getTextSizeStyle = () => {
    switch (size) {
      case 'small':
        return Typography.buttonSmall;
      default:
        return Typography.button;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        getSizeStyle(),
        style,
      ]}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'outline' || variant === 'text' ? Colors.primary : Colors.white} 
          size="small" 
        />
      ) : (
        <Text style={[getTextStyle(), getTextSizeStyle(), textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  primaryDisabled: {
    backgroundColor: Colors.grayMedium,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  secondaryDisabled: {
    backgroundColor: Colors.grayLight,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  outlineDisabled: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.grayMedium,
  },
  text: {
    backgroundColor: 'transparent',
  },
  primaryText: {
    color: Colors.white,
  },
  secondaryText: {
    color: Colors.white,
  },
  outlineText: {
    color: Colors.primary,
  },
  outlineDisabledText: {
    color: Colors.grayMedium,
  },
  textText: {
    color: Colors.primary,
  },
  textDisabledText: {
    color: Colors.grayMedium,
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});