import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Sobre a Loja</Text>
      <Text style={{ fontSize: 16, lineHeight: 24 }}>
        Nossa loja de joias oferece peças exclusivas, com materiais de alta qualidade e design único.
        Trabalhamos para que cada cliente tenha uma experiência de compra memorável.
      </Text>
    </ScrollView>
  );
}
