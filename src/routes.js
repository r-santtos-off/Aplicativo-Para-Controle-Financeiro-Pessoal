import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

import HomeScreen from './pages/HomeScreen';
import FormName from './pages/FormName';
import FormEmail from './pages/FormEmail';
import FormPass from './pages/FormPass';
import Dashboard from './pages/Dashboard';
import FormRegAssets from './pages/FormRegAssets';
import FormRegLiabilities from './pages/FormRegLiabilities';

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
        <AppStack.Navigator   
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: "horizontal",
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
          >

          <AppStack.Screen
            name="HomeScreen" 
            component={HomeScreen} 
            options={{ 
              title: 'Financeiro', 
              headerTitleAlign: 'center', 
              headerStyle: {backgroundColor: '#000'}, 
              headerTintColor: '#61dafb',  
            }}
          />

          <AppStack.Screen
            name="FormName" 
            component={FormName} 
            options={{ 
              title: 'Qual é seu nome?',
              headerStyle: {backgroundColor: '#000'}, 
              headerTintColor: '#61dafb',  
            }}
          />

          <AppStack.Screen
            name="FormEmail" 
            component={FormEmail} 
            options={{
              title: 'Qual seu e-mail?',
              headerStyle: {backgroundColor: '#000'}, 
              headerTintColor: '#61dafb',  
            }}
          />

          <AppStack.Screen
            name="FormPass" 
            component={FormPass} 
            options={{
              title: 'Digite sua senha',
              headerStyle: {backgroundColor: '#000'}, 
              headerTintColor: '#61dafb',  
            }}
          />

          <AppStack.Screen
            name="Dashboard" 
            component={Dashboard} 
            options={{
              title: 'Dashboard',
              headerStyle: {backgroundColor: '#000'}, 
              headerTintColor: '#61dafb',  
            }}
          />

          <AppStack.Screen
            name="FormRegAssets" 
            component={FormRegAssets} 
            options={{
              title: 'Registre Ativos',
              headerStyle: {backgroundColor: '#000'}, 
              headerTintColor: '#61dafb',  
            }}
          />

          <AppStack.Screen
            name="FormRegLiabilities" 
            component={FormRegLiabilities} 
            options={{
              title: 'Registre Passivos',
              headerStyle: {backgroundColor: '#000'}, 
              headerTintColor: '#61dafb',  
            }}
          />

        </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;