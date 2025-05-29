import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Switch } from 'react-native';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';
import { Shadows } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import { User, Settings, Bell, Lock, CircleHelp as HelpCircle, LogOut, ChevronRight, CircleUser as UserCircle } from 'lucide-react-native';

export default function ProfileScreen() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  const handleLogout = () => {
    Alert.alert(
      "Sair da conta",
      "Tem certeza que deseja sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Sair", 
          onPress: () => router.replace('/(auth)/login'),
          style: "destructive"
        }
      ]
    );
  };
  
  const handleEdit = () => {
    Alert.alert(
      "Editar Perfil",
      "Esta funcionalidade estará disponível em breve."
    );
  };

  return (
    <SafeAreaContainer backgroundColor={Colors.background}>
      <Header title="Meu Perfil" showBackButton={false} />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={[styles.profileHeader, Shadows.small]}>
          <View style={styles.profileImageContainer}>
            <UserCircle size={80} color={Colors.primary} />
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={Typography.h3}>João Silva</Text>
            <Text style={[Typography.body, styles.email]}>joao.silva@email.com</Text>
            <Text style={[Typography.bodySmall, styles.memberSince]}>
              Membro desde 2025
            </Text>
          </View>
          
          <TouchableOpacity 
            style={styles.editButton}
            onPress={handleEdit}
          >
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionTitle}>
          <Text style={Typography.h4}>Configurações da Conta</Text>
        </View>
        
        <View style={[styles.settingsSection, Shadows.small]}>
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, styles.userIcon]}>
                <User size={20} color={Colors.white} />
              </View>
              <Text style={styles.settingsItemText}>Informações Pessoais</Text>
            </View>
            <ChevronRight size={20} color={Colors.grayMedium} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, styles.securityIcon]}>
                <Lock size={20} color={Colors.white} />
              </View>
              <Text style={styles.settingsItemText}>Segurança</Text>
            </View>
            <ChevronRight size={20} color={Colors.grayMedium} />
          </TouchableOpacity>
          
          <View style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, styles.notificationIcon]}>
                <Bell size={20} color={Colors.white} />
              </View>
              <Text style={styles.settingsItemText}>Notificações</Text>
            </View>
            <Switch
              trackColor={{ false: Colors.grayLight, true: `${Colors.primary}80` }}
              thumbColor={notificationsEnabled ? Colors.primary : Colors.grayMedium}
              onValueChange={setNotificationsEnabled}
              value={notificationsEnabled}
            />
          </View>
        </View>
        
        <View style={styles.sectionTitle}>
          <Text style={Typography.h4}>Suporte</Text>
        </View>
        
        <View style={[styles.settingsSection, Shadows.small]}>
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, styles.helpIcon]}>
                <HelpCircle size={20} color={Colors.white} />
              </View>
              <Text style={styles.settingsItemText}>Central de Ajuda</Text>
            </View>
            <ChevronRight size={20} color={Colors.grayMedium} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, styles.settingsIcon]}>
                <Settings size={20} color={Colors.white} />
              </View>
              <Text style={styles.settingsItemText}>Termos de Uso</Text>
            </View>
            <ChevronRight size={20} color={Colors.grayMedium} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.settingsItem, styles.logoutItem]}
            onPress={handleLogout}
          >
            <View style={styles.settingsItemLeft}>
              <View style={[styles.iconContainer, styles.logoutIcon]}>
                <LogOut size={20} color={Colors.white} />
              </View>
              <Text style={[styles.settingsItemText, styles.logoutText]}>
                Sair da Conta
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.appInfo}>
          <Text style={styles.version}>Versão 1.0.0</Text>
          <Text style={styles.copyright}>© 2025 SESC. Todos os direitos reservados.</Text>
        </View>
        
        <View style={styles.spacer} />
      </ScrollView>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileHeader: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImageContainer: {
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  email: {
    color: Colors.textSecondary,
    marginTop: 4,
  },
  memberSince: {
    color: Colors.textSecondary,
    marginTop: 4,
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Colors.grayLight,
  },
  editButtonText: {
    ...Typography.bodySmall,
    color: Colors.textPrimary,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  settingsSection: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayLight,
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userIcon: {
    backgroundColor: Colors.primary,
  },
  securityIcon: {
    backgroundColor: Colors.secondary,
  },
  notificationIcon: {
    backgroundColor: Colors.warning,
  },
  helpIcon: {
    backgroundColor: Colors.success,
  },
  settingsIcon: {
    backgroundColor: Colors.primary,
  },
  logoutIcon: {
    backgroundColor: Colors.error,
  },
  settingsItemText: {
    ...Typography.body,
  },
  logoutItem: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: Colors.error,
    fontWeight: '500',
  },
  appInfo: {
    alignItems: 'center',
    padding: 16,
  },
  version: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  copyright: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  spacer: {
    height: 20,
  },
});