/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 // import type { Node } from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import BluetoothList from './app/bluetooth-list';
 
 
 const App= () => {
   // const isDarkMode = useColorScheme() === 'dark';
 
   // const backgroundStyle = {
   //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   // };
 
   return (
     <BluetoothList></BluetoothList>
   );
 };
 
 const styles = StyleSheet.create({
   encabezado:{
     textAlign:'center',
     marginTop:100
   }
 
 });
 
 export default App;
 