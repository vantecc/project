import React from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Typography } from '../constants/Fonts';
import { Colors } from '../constants/Colors';
import { Button } from './Button';

interface FormStepProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onNext?: () => void;
  onBack?: () => void;
  nextLabel?: string;
  backLabel?: string;
  loading?: boolean;
  isLastStep?: boolean;
  scrollable?: boolean;
}

export function FormStep({
  title,
  subtitle,
  children,
  onNext,
  onBack,
  nextLabel = "Próximo",
  backLabel = "Voltar",
  loading = false,
  isLastStep = false,
  scrollable = true,
}: FormStepProps) {
  const Content = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={Typography.h2}>{title}</Text>
        {subtitle && <Text style={[Typography.subtitle, styles.subtitle]}>{subtitle}</Text>}
      </View>
      
      <View style={styles.content}>
        {children}
      </View>
      
      <View style={styles.footer}>
        {onBack && (
          <Button
            title={backLabel}
            variant="outline"
            onPress={onBack}
            style={styles.backButton}
            disabled={loading}
          />
        )}
        {onNext && (
          <Button
            title={isLastStep ? "Finalizar" : nextLabel}
            onPress={onNext}
            loading={loading}
            style={styles.nextButton}
          />
        )}
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      {scrollable ? (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Content />
        </ScrollView>
      ) : (
        <Content />
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  subtitle: {
    marginTop: 8,
  },
  content: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  backButton: {
    flex: 1,
    marginRight: 12,
  },
  nextButton: {
    flex: 1,
  },
});