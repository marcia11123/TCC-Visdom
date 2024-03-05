import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <text style={styles.textHeader}>Visdom</text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  header:{
    justifyContent: 'top',
    width:"100%",
    height:"10%",
    backgroundColor:'#000',
  },
  textHeader:{
    fontSize:20,
    color:'#fff',
   
  }
});
