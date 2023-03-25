
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function NavBar() {

    

  
    return (


        <View style={{flexDirection:'row', backgroundColor: 'white',borderRadius:5,justifyContent:'center',alignItems:'center' }}>
        
        <AntDesign style={styles.icon} name='home'/>
        <AntDesign style={styles.icon}  name='hearto'/>
        <AntDesign style={styles.icon}  name='shoppingcart'/>
        <AntDesign style={styles.icon}  name='user'/>
        </View>

    );
}

const styles = StyleSheet.create({

  icon:{
    fontSize:30,
    padding:35,
    
  }
});
