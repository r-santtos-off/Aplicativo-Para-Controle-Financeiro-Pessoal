import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

function FormRegLiabilites() {
  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do Passivo"
          placeholderTextColor="#666666"
          autoCapitalize="words"
          autoFocus={true}
        />

        <TextInput 
          style={styles.input}
          placeholder="Categoria"
          placeholderTextColor="#666666"
          autoCapitalize="words"
        />

        <TextInput 
          style={styles.input}
          placeholder="R$ 0,00"
          placeholderTextColor="#666666"
          autoCapitalize="words"
          keyboardType="number-pad"
        />
      </View>

      <TouchableOpacity style={styles.boxBtn}>
        <Text style={styles.btn}>Registrar</Text>
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
    marginBottom: 15,
  },
  boxBtn: {
    width: '100%',
  },
  btn: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FormRegLiabilites;