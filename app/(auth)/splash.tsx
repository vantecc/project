import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { SescLogo } from '../../assets/logo';
import { Colors } from '../../constants/Colors';

export default function SplashScreen() {
  const router = useRouter();
  const fadeAnim = new Animated.Value(0);
  
  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
    
    // Navigate to login after a delay
    const timer = setTimeout(() => {
      router.replace('/(auth)/login');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <SafeAreaContainer backgroundColor={Colors.background} style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        <SescLogo size={160} />
      </Animated.View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
});