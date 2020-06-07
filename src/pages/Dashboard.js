import React from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {useNavigation } from '@react-navigation/native';

function Dashboard() {
  const year = new Date();
  const newDate = year.getFullYear();

  const navigation = useNavigation();
  function navigationEmail() {
    navigation.navigate('FormRegAssets');
  }

  return(
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.balance}>Saldo</Text>
        <Text style={styles.value}>R$ 991.000,89</Text>
      </View>
      <View style={styles.boxYear}>
        <Text style={styles.year}>{newDate}</Text>
      </View>
      <FlatList 
        style={styles.list}
        keyExtractor={dashboard => String(dashboard)}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.extract}>
            <View style={styles.box}>
              <FontAwesome name="circle" size={10} color="#61dafb" />
            </View>
            <View style={styles.informations}>
              <Text style={styles.name}>Nome do ativo</Text>
              <Text style={styles.category}>categoria</Text>
              <Text style={styles.regbalance}>R$ 1.001,90</Text>
            </View>
            <View style={styles.dates}>
              <Text style={styles.day}>23</Text>
              <Text style={styles.month}>Jan</Text>
            </View>
          </View>
        )}
      />   
      <View style={styles.boxNext}>
        <TouchableOpacity onPress={navigationEmail} style={styles.next}>
          <Feather style={styles.nextColor} name="arrow-right" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  screen: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: 60,
  },
  balance: {
    fontSize: 20,
    color: '#61dafb',
  },
  value: {
    fontSize: 30,
    color: '#61dafb',
  },
  boxYear: {
    alignItems: 'center',
    width:'100%',
    borderTopColor: '#61dafb',
    borderTopWidth: 1,
  },
  year: {
    color: '#61dafb',
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    borderTopColor: '#61dafb',
    borderTopWidth: 1,
  },
  extract: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  box: {
    width: '10%',
  },
  informations: {
    width: '70%',
  },
  name: {
    fontSize: 18,
    color: '#61dafb',
  },
  category: {
    fontSize: 13,
    lineHeight: 10,
    color: '#61dafb',
  },
  regbalance: {
    fontSize: 20,
    color: '#61dafb',
  },
  dates: {
    width: '20%',
    alignItems: 'center',
    color: '#61dafb',
  },
  day: {
    fontSize: 16,
    color: '#61dafb',
  },
  month: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#61dafb',
  },
  boxNext: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: '5%',
  },
  next: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
  },
  nextColor: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Dashboard;