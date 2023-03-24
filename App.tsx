/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { WebView } from 'react-native-webview';


function App(): JSX.Element {


  return (
    <SafeAreaView style={{flex: 1}}>
     <Text> Testr </Text>

     <WebView source={{ uri: "https://www.whatsmybrowser.org/" }} useWebView2 />
    </SafeAreaView>
  );
}


export default App;
