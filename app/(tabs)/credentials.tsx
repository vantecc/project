import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { StatusCard } from '../../components/StatusCard';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';
import { Shadows } from '../../constants/Colors';
import { CreditCard, Plus, Clock, CircleCheck as CheckCircle, CircleAlert as AlertCircle } from 'lucide-react-native';

export default function CredentialsScreen() {
  const router = useRouter();
  
  const navigateToCreateCredential = () => {
    router.push('/credential/new/personal');
  };

  return (
    <SafeAreaContainer backgroundColor={Colors.background}>
      <Header title="Minhas Credenciais" showBackButton={false} />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={Typography.h3}>Credenciais</Text>
          <Button
            title="Nova"
            variant="primary"
            size="small"
            onPress={navigateToCreateCredential}
            style={styles.newButton}
            textStyle={styles.newButtonText}
            leftIcon={<Plus size={16} color={Colors.white} />}
          />
        </View>
        
        <StatusCard
          type="pending"
          title="Credencial em análise"
          message="Sua solicitação está sendo processada. Aguarde a aprovação."
          style={styles.statusCard}
        />
        
        <View style={styles.credentialsList}>
          <TouchableOpacity 
            style={[styles.credentialCard, Shadows.medium]}
            onPress={() => {}}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.cardIconContainer, styles.pendingIcon]}>
                <Clock size={20} color={Colors.white} />
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={Typography.subtitle}>Credencial Titular</Text>
                <Text style={[Typography.caption, styles.cardSubtitle]}>
                  Em análise
                </Text>
              </View>
              <Text style={[Typography.caption, styles.cardDate]}>
                Solicitada em: 15/05/2025
              </Text>
            </View>
            
            <View style={styles.cardContent}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Tipo:</Text>
                <Text style={styles.infoValue}>Comerciário</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>CPF:</Text>
                <Text style={styles.infoValue}>123.456.789-00</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Status:</Text>
                <View style={styles.statusContainer}>
                  <Clock size={14} color={Colors.warning} />
                  <Text style={[styles.statusText, styles.pendingStatus]}>
                    Em análise
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.credentialCard, Shadows.medium]}
            onPress={() => {}}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.cardIconContainer, styles.activeIcon]}>
                <CheckCircle size={20} color={Colors.white} />
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={Typography.subtitle}>Credencial Dependente</Text>
                <Text style={[Typography.caption, styles.cardSubtitle]}>
                  Ativa
                </Text>
              </View>
              <Text style={[Typography.caption, styles.cardDate]}>
                Validade: 31/12/2025
              </Text>
            </View>
            
            <View style={styles.cardContent}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Tipo:</Text>
                <Text style={styles.infoValue}>Dependente</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Nome:</Text>
                <Text style={styles.infoValue}>Maria Silva</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Status:</Text>
                <View style={styles.statusContainer}>
                  <CheckCircle size={14} color={Colors.success} />
                  <Text style={[styles.statusText, styles.activeStatus]}>
                    Ativa
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.credentialCard, Shadows.medium]}
            onPress={() => {}}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.cardIconContainer, styles.rejectedIcon]}>
                <AlertCircle size={20} color={Colors.white} />
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={Typography.subtitle}>Credencial Empresa</Text>
                <Text style={[Typography.caption, styles.cardSubtitle]}>
                  Rejeitada
                </Text>
              </View>
              <Text style={[Typography.caption, styles.cardDate]}>
                Solicitada em: 10/04/2025
              </Text>
            </View>
            
            <View style={styles.cardContent}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Tipo:</Text>
                <Text style={styles.infoValue}>Empresarial</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>CNPJ:</Text>
                <Text style={styles.infoValue}>12.345.678/0001-90</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Status:</Text>
                <View style={styles.statusContainer}>
                  <AlertCircle size={14} color={Colors.error} />
                  <Text style={[styles.statusText, styles.rejectedStatus]}>
                    Rejeitada
                  </Text>
                </View>
              </View>
              <Text style={styles.rejectionReason}>
                Motivo: Documentação incompleta. Por favor, reenvie os documentos solicitados.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.emptyState}>
          <CreditCard size={48} color={Colors.grayMedium} />
          <Text style={[Typography.subtitle, styles.emptyStateTitle]}>
            Precisa de mais credenciais?
          </Text>
          <Text style={[Typography.bodySmall, styles.emptyStateMessage]}>
            Você pode solicitar credenciais para dependentes ou adicionais
          </Text>
          <Button
            title="Solicitar nova credencial"
            onPress={navigateToCreateCredential}
            style={styles.emptyStateButton}
          />
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  newButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  newButtonText: {
    marginLeft: 4,
  },
  statusCard: {
    marginBottom: 16,
  },
  credentialsList: {
    marginBottom: 24,
  },
  credentialCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayLight,
  },
  cardIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activeIcon: {
    backgroundColor: Colors.success,
  },
  pendingIcon: {
    backgroundColor: Colors.warning,
  },
  rejectedIcon: {
    backgroundColor: Colors.error,
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardSubtitle: {
    color: Colors.textSecondary,
    marginTop: 2,
  },
  cardDate: {
    color: Colors.textSecondary,
  },
  cardContent: {
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  infoLabel: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    width: 80,
  },
  infoValue: {
    ...Typography.body,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    ...Typography.body,
    marginLeft: 6,
  },
  activeStatus: {
    color: Colors.success,
  },
  pendingStatus: {
    color: Colors.warning,
  },
  rejectedStatus: {
    color: Colors.error,
  },
  rejectionReason: {
    ...Typography.bodySmall,
    color: Colors.error,
    marginTop: 8,
    backgroundColor: 'rgba(216, 73, 73, 0.1)',
    padding: 8,
    borderRadius: 4,
  },
  emptyState: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    ...Shadows.small,
  },
  emptyStateTitle: {
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateMessage: {
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  emptyStateButton: {
    width: '100%',
  },
  spacer: {
    height: 20,
  },
});