import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
//import styles from './styles/style';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const radioStyle = { flexDirection: 'row', alignItems: 'center' };

  const mode = darkMode ? "Lightmode" : "Darkmode";

  function calc (e) {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);

    let promille = 0;
    
    const ratio = gender === 'male' ? 0.7 : 0.6;
    promille =  gramsLeft / (weight * ratio);

    if (!time || !bottles) 
      return;

    if (weight <= 0) 
      return alert('weight required');
    
    if (promille < 0) {
      promille = 0;
    }
    setResult(promille);
  };

  function resultColor (result) {
    if (result == 0) {
      return {color: 'black'}
    }
    else if (result <= 0.40) {
      return { color: 'green' };
    } 
    else if (result >= 0.41 && result <= 0.99) {
      return { color: 'yellow' };
    } 
    else if (result >= 1) {
      return { color: 'red' };
    } 
    else {
      return {};
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});