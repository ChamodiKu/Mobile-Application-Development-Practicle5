import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, AppRegistry} from 'react-native';
//*********//
//import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';
//***********//

export default function App() {
  const [name, setName] =useState('');
  const [age, setAge] =useState('');
   
      return (
        <View style={styles.container}>
        
          <Text>Enter your name:</Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={(val) => setName(val)}
          /> 
        
          <Text>Enter your age:</Text>
          <TextInput 
            style={styles.inputBox}
            keyboardType = 'numeric' 
            onChangeText={(val)=> setAge(val)}
          /> 
        
        <Text>Hello, {name}. Your age is {age}
        </Text>
      
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems:'center', 
    justifyContent: 'center'
  },
  
  inputBox: {
    height: 40,
    width: 100,
    
    borderColor: 'blue',
    borderWidth:1
  } 
});
