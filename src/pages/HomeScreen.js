import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useNavigation } from '@react-navigation/native';

import Money from '../assets/money.png';

function HomeScreen() {
  const navigation = useNavigation();
  function navigationReg() {
    navigation.navigate('FormName');
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Hora de tranformar suas finanças</Text>
      <Image source={Money} style={styles.moneyscreen} />
      <Text style={styles.text}>O Caminho está a sua frente. Você já deu seu primeiro passo rumo a transformação financeira e nós te guaremos nessa jornada.</Text>
      <TouchableOpacity onPress={navigationReg}>
        <Text style={styles.btn}>Começar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.link}>Já sou cadastrado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  moneyscreen: {
    width: 260,
    height: 260,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 10,
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  link: {
    color: '#61dafb',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default HomeScreen;