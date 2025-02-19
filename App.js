import { StyleSheet } from 'react-native'
import React from 'react'
import AuthStack from './src/navigation/AuthStack'
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
      <AuthStack />
      </SafeAreaProvider>
    </PaperProvider>
  )
}

export default App

const styles = StyleSheet.create({})