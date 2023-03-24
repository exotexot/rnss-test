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
import Server from '@dr.pogodin/react-native-static-server';


function App(): JSX.Element {


  React.useEffect(() => {



 const server = new Server({
  // See further in the docs how to statically bundle assets into the App,
  // alternatively assets to server might be created or downloaded during
  // the app's runtime.
  fileDir: '/path/to/static/assets/on/target/device',
});


server.start().then((origin) => {
  console.log(`Serving at URL ${origin}`);
});

    return () => server.stop()
  }, [])



  return (
    <SafeAreaView style={{flex: 1}}>
     <Text> Testr </Text>

     <WebView source={{ uri: "https://www.whatsmybrowser.org/" }} useWebView2 />
    </SafeAreaView>
  );
}


export default App;
