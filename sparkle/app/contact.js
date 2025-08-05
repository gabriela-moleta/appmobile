import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const enviarContato = () => {
    if (!nome || !email) {
      Alert.alert('Erro', 'Preencha nome e email');
      return;
    }
    Alert.alert('Sucesso', `Obrigado pelo contato, ${nome}!`);
    setNome('');
    setEmail('');
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Contato</Text>

      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 8,
          marginBottom: 16,
        }}
        placeholder="Seu nome"
      />

      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 8,
          marginBottom: 16,
        }}
        placeholder="seu@email.com"
      />

      <CustomButton onPress={enviarContato} color="green">
        Enviar
      </CustomButton>
    </ScrollView>
  );
}
