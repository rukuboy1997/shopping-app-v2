import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
	  <Text>Welcome to my shopping app that implements Timbu API</Text>
	  <TouchableOpacity style={styles.pressMe}><Link href="/products" style={styles.textColor}> Go to products</Link></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    pressMe: {
	padding: 10,
	margin: 10,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'green'
    },
    textColor:{
	textAlign: 'center',
	color: 'white',
    },
});
