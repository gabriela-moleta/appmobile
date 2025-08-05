import React from 'react';
import { Button } from 'react-native-paper';

export default function CustomButton({ mode = 'contained', color = 'green', onPress, children }) {
  return (
    <Button 
      mode={mode} 
      onPress={onPress} 
      style={{ backgroundColor: color === 'green' ? '#4CAF50' : '#F44336', marginVertical: 8 }}
      textColor="white"
    >
      {children}
    </Button>
  );
}
