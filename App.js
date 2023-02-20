import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, ScrollView, Switch } from 'react-native';
import { RadioButton } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';


import styles from './styles/style';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  function calc () {
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
      return {}
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
    <ScrollView>
    <View style={[styles.container, darkMode && styles.nightMode]}>
      <View style={styles.switch}>
        <Text style={styles.switchText}>Theme</Text>
        <Switch
          value={darkMode}
          onValueChange={v => setDarkMode(v)} />
      </View>
      
      <Text style={[styles.title, darkMode && styles.nightMode]}>Alcometer</Text>

      <Text style={styles.text}>Insert weight</Text>
      <TextInput
        style={styles.textInput}
        keyboardType='number-pad'
        value={weight} onChangeText={e => setWeight(e)}
      />

      <Text style={styles.text}>Bottles drank</Text>
      <NumericInput style={styles.numericInput} minValue={0} onChange={v => setBottles(v)} />

      <Text style={styles.text}>Time (hours)</Text>
      <NumericInput minValue={0} style={styles.numericInput} onChange={v => setTime(v)} />

      <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
        <View style={styles.radioButton}>
          <RadioButton value='male'/>
          <Text label={'male'} style={styles.text}>Male</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value='female' />
          <Text label={'female'} style={styles.text}>Female</Text>
        </View>
      </RadioButton.Group>

      <TouchableOpacity style={styles.button} onPress={calc}>
        <Text style={styles.buttonText}>CALCULATE</Text>
      </TouchableOpacity>
      <Text style={[styles.result, resultColor(result)]}>{result.toFixed(2)}</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}