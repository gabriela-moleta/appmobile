import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useRouter } from 'expo-router';
import { Skeleton } from 'moti/skeleton';

const produtosMock = [
  { id: '1', nome: 'Anel de Diamante', preco: 1200, ativo: true },
  { id: '2', nome: 'Colar de Ouro', preco: 800, ativo: false },
];

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Simula carregamento dos produtos com delay
    setTimeout(() => {
      setProdutos(produtosMock);
    }, 2000);
  }, []);

  if (produtos.length === 0) {
    // Skeleton loader enquanto carrega
    return (
      <ScrollView style={{ padding: 16 }}>
        {[1, 2].map((i) => (
          <Skeleton key={i} height={120} radius={12} colorMode="light" style={{ marginBottom: 20 }} />
        ))}
      </ScrollView>
    );
  }

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Loja de Joias</Text>

      {produtos.map(({ id, nome, preco, img, ativo }) => (
        <View 
          key={id} 
          style={{ 
            backgroundColor: '#f5f5f5', 
            padding: 12, 
            borderRadius: 12, 
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            opacity: ativo ? 1 : 0.5
          }}
        >
          <Image source={img} style={{ width: 80, height: 80, borderRadius: 8, marginRight: 16 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '600', fontSize: 18 }}>{nome}</Text>
            <Text style={{ marginTop: 4, fontSize: 16, color: '#555' }}>R$ {preco}</Text>
            <CustomButton 
              color={ativo ? 'green' : 'red'} 
              onPress={() => {
                // Alterna status ativo/inativo
                setProdutos((old) =>
                  old.map(p => p.id === id ? { ...p, ativo: !p.ativo } : p)
                );
              }}
            >
              {ativo ? 'Ativo' : 'Inativo'}
            </CustomButton>
          </View>
        </View>
      ))}

      <CustomButton onPress={() => router.push('/about')} color="green">
        Sobre
      </CustomButton>

      <CustomButton onPress={() => router.push('/contact')} color="green">
        Contato
      </CustomButton>
    </ScrollView>
  );
}
