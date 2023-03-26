import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Bestseller from '../Components/Bestseller';
import PopularFood from '../Components/PopularFood';
import FoodCategory from '../Components/FoodCategory';
import NavBar from '../Components/NavBar';
import Hometop from '../Components/Hometop';


const Home = () => {
    
    return (
        <View>
            <View style={styles.view}>
            <Hometop/>
           <Text style={styles.header}>Food Category</Text>
            <FoodCategory/>
            <Text style={styles.header}>Popular Food</Text>
            <PopularFood/>
            
            
            <Text style={styles.header}>Best Seller</Text>
            <Bestseller/>
            
            </View>
            
            <NavBar/>
            
            
            </View>
    )
}
const styles = StyleSheet.create({
view:{
     padding: 10,
     marginTop: 50,
},
header:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10,
    marginTop:15,
    marginLeft:5
},




})


export { Home }; 