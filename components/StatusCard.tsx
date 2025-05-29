import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Fonts';
import { Shadows } from '../constants/Colors';
import { CircleCheck as CheckCircle, CircleAlert as AlertCircle, Clock } from 'lucide-react-native';

type StatusType = 'success' | 'error' | 'warning' | 'info' | 'pending';

interface StatusCardProps {
  type: StatusType;
  title: string;
  message: string;
  style?: ViewStyle;
}

export function StatusCard({ type, title, message, style }: StatusCardProps) {
  const getStatusColor = () => {
    switch (type) {
      case 'success':
        return Colors.success;
      case 'error':
        return Colors.error;
      case 'warning':
      case 'pending':
        return Colors.warning;
      case 'info':
      default:
        return Colors.primary;
    }
  };

  const getStatusIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={24} color={Colors.success} />;
      case 'error':
        return <AlertCircle size={24} color={Colors.error} />;
      case 'warning':
        return <AlertCircle size={24} color={Colors.warning} />;
      case 'pending':
        return <Clock size={24} color={Colors.warning} />;
      case 'info':
      default:
        return <AlertCircle size={24} color={Colors.primary} />;
    }
  };

  return (
    <View 
      style={[
        styles.container, 
        { borderLeftColor: getStatusColor() },
        Shadows.small,
        style
      ]}
    >
      <View style={styles.iconContainer}>
        {getStatusIcon()}
      </View>
      <View style={styles.textContainer}>
        <Text style={[Typography.h4, styles.title]}>{title}</Text>
        <Text style={[Typography.body, styles.message]}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderLeftWidth: 4,
  },
  iconContainer: {
    marginRight: 16,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    marginBottom: 4,
  },
  message: {
    color: Colors.textSecondary,
  },
});