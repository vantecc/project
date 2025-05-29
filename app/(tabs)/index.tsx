import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Header } from '../../components/Header';
import { StatusCard } from '../../components/StatusCard';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';
import { Shadows } from '../../constants/Colors';
import { SescLogo } from '../../assets/logo';
import { useRouter } from 'expo-router';
import { CreditCard, ArrowRight, User, Bell } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();
  
  const navigateToCreateCredential = () => {
    router.push('/credential/new/personal');
  };
  
  const navigateToVerifyCredential = () => {
    router.push('/(tabs)/verify');
  };

  return (
    <SafeAreaContainer backgroundColor={Colors.background}>
      <Header 
        title="SESC Credenciais" 
        showBackButton={false} 
        rightAction={
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color={Colors.textPrimary} />
          </TouchableOpacity>
        }
      />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeHeader}>
            <SescLogo size={50} showText={false} />
            <View style={styles.welcomeText}>
              <Text style={Typography.h3}>Olá, Usuário</Text>
              <Text style={[Typography.bodySmall, styles.welcomeSubtitle]}>
                Bem-vindo ao SESC Credenciais
              </Text>
            </View>
          </View>
        </View>
        
        <StatusCard
          type="info"
          title="Novidades"
          message="Confira as novas funcionalidades do SESC Credenciais!"
        />
        
        <Text style={[Typography.h3, styles.sectionTitle]}>Serviços</Text>
        
        <View style={styles.servicesContainer}>
          <TouchableOpacity 
            style={[styles.serviceCard, Shadows.medium]}
            onPress={navigateToCreateCredential}
          >
            <View style={[styles.serviceIconContainer, styles.primaryIcon]}>
              <CreditCard size={24} color={Colors.white} />
            </View>
            <Text style={[Typography.subtitle, styles.serviceTitle]}>
              Criar Credencial
            </Text>
            <Text style={[Typography.caption, styles.serviceDescription]}>
              Solicite sua credencial SESC
            </Text>
            <View style={styles.arrowContainer}>
              <ArrowRight size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.serviceCard, Shadows.medium]}
            onPress={navigateToVerifyCredential}
          >
            <View style={[styles.serviceIconContainer, styles.secondaryIcon]}>
              <Search size={24} color={Colors.white} />
            </View>
            <Text style={[Typography.subtitle, styles.serviceTitle]}>
              Consultar
            </Text>
            <Text style={[Typography.caption, styles.serviceDescription]}>
              Verifique o status da sua credencial
            </Text>
            <View style={styles.arrowContainer}>
              <ArrowRight size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.serviceCard, Shadows.medium]}
            onPress={() => router.push('/(tabs)/profile')}
          >
            <View style={[styles.serviceIconContainer, styles.tertiaryIcon]}>
              <User size={24} color={Colors.white} />
            </View>
            <Text style={[Typography.subtitle, styles.serviceTitle]}>
              Meu Perfil
            </Text>
            <Text style={[Typography.caption, styles.serviceDescription]}>
              Gerencie suas informações pessoais
            </Text>
            <View style={styles.arrowContainer}>
              <ArrowRight size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.spacer} />
      </ScrollView>
    </SafeAreaContainer>
  );
}

import { Search } from 'lucide-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    marginLeft: 16,
  },
  welcomeSubtitle: {
    color: Colors.textSecondary,
    marginTop: 4,
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 16,
  },
  servicesContainer: {
    marginBottom: 24,
  },
  serviceCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  serviceIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryIcon: {
    backgroundColor: Colors.primary,
  },
  secondaryIcon: {
    backgroundColor: Colors.secondary,
  },
  tertiaryIcon: {
    backgroundColor: Colors.success,
  },
  serviceTitle: {
    marginBottom: 4,
  },
  serviceDescription: {
    color: Colors.textSecondary,
  },
  arrowContainer: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  notificationButton: {
    padding: 8,
  },
  spacer: {
    height: 20,
  },
});