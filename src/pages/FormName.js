import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation } from '@react-navigation/native';

function FormName() {
  const navigation = useNavigation();
  function navigationEmail() {
    navigation.navigate('FormEmail');
  }

  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Primeiro Nome"
          placeholderTextColor="#666666"
          autoCapitalize="words"
          autoFocus={true}
        />
      </View>
      <TouchableOpacity onPress={navigationEmail} style={styles.next}>
        <Feather style={styles.nextColor} name="arrow-right" size={40} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 50,
    paddingHorizontal: '5%',
  },
  form: {
    width: '100%',
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderLeftWidth: 1,
    borderLeftColor: '#61dafb',
    borderBottomWidth: 1,
    borderBottomColor: '#61dafb',
    color: '#61dafb',
  },
  next: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: '5%',
  },
  nextColor: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FormName;