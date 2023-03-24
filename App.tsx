import React from 'react';

import {Alert, Platform, SafeAreaView} from 'react-native';

import RNFS from 'react-native-fs';
import Server, {STATES} from '@dr.pogodin/react-native-static-server';
import {WebView} from 'react-native-webview';
import useAsyncEffect from 'use-async-effect';

export default function App() {
  // Once the server is ready, the origin will be set and opened by WebView.
  const [origin, setOrigin] = React.useState<string>('');
  const webView = React.useRef<WebView>(null);

  useAsyncEffect(async () => {
    const fileDir: string = Platform.select({
      windows: `${RNFS.DocumentDirectoryPath}\\web`,
      default: '',
    });

    // In our example, `server` is reset to null when the component is unmount,
    // thus signalling that server init sequence below should be aborted, if it
    // is still underway.
    let server: null | Server = new Server({fileDir, stopInBackground: true});

    server?.addStateListener(newState => {
      console.log(`New server state is "${STATES[newState]}"`);
    });
    const res = await server?.start();

    if (res && server) {
      console.log('RES', res, fileDir);
      setOrigin(res);
    }

    return async () => {
      // In our example, here is no need to wait until the shutdown completes.
      await server?.stop();
      server = null;
      setOrigin('');
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        style={{flex: 1}}
        cacheMode="LOAD_NO_CACHE"
        // This way we can receive messages sent by the WebView content.
        onMessage={event => {
          const message = event.nativeEvent.data;
          Alert.alert('Got a message from the WebView content', message);
        }}
        ref={webView}
        source={{uri: origin}}
      />
    </SafeAreaView>
  );
}
