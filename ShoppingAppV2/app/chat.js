import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Chat() {
  return (
      <WebView
	style={styles.container}
        source={{ uri: 'https://barnaclestudios.com/chat/e/ff346917-f0cb-4976-ac44-61665f16a773' }}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
