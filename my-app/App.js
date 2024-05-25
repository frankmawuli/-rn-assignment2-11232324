import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let name = "Frank"
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style = {styles.name}>{name}</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Corrected the style property to use 'text' instead of 'Text'
  },
  name:{
    fontWeight: 'bold',
  }
});
