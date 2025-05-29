import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Fonts';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  rightAction?: React.ReactNode;
  style?: ViewStyle;
}

export function Header({
  title,
  showBackButton = true,
  rightAction,
  style,
}: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity
            onPress={handleBack}
            style={styles.backButton}
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
          >
            <ArrowLeft size={24} color={Colors.textPrimary} />
          </TouchableOpacity>
        )}
      </View>

      <Text style={[Typography.h3, styles.title]} numberOfLines={1}>
        {title}
      </Text>

      <View style={styles.rightContainer}>
        {rightAction}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayLight,
  },
  leftContainer: {
    width: 40,
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
});