import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


const But = ({ navigation }) => (
  <View style={styles.container}> 
    <View style={styles.shadowWrapper}>  
      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Home')} 
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Login
      </Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    marginTop: 20,
  },

  
  shadowWrapper: {
    borderRadius: 50,
    backgroundColor: '#fff',  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10, // Android
  },

  
  button: {
    width: 120,
    borderRadius: 20,
    backgroundColor:'#F9FBFF',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#9482D8'
  }
});

export default But;
