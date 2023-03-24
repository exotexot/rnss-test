import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {WebView} from 'react-native-webview';
import Server from '@dr.pogodin/react-native-static-server';

import RNFS from 'react-native-fs';

function App(): JSX.Element {
  React.useEffect(() => {
    const server = new Server({
      // See further in the docs how to statically bundle assets into the App,
      // alternatively assets to server might be created or downloaded during
      // the app's runtime.
      fileDir: RNFS.DocumentDirectoryPath + '\\web\\',
    });

    server
      .start()
      .then(origin => {
        console.log(`Serving at URL ${origin}`);
      })
      .catch(e => {
        console.log('ERROR SERVER', e);
      });

    return () => server.stop();
  }, []);

  React.useEffect(() => {
    console.log('HELLO', RNFS.MainBundlePath);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text> Testr </Text>

      <WebView source={{uri: 'https://www.whatsmybrowser.org/'}} useWebView2 />
    </SafeAreaView>
  );
}

export default App;
