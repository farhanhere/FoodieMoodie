
import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { app } from "../Screens/firebase";
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import AntDesign from 'react-native-vector-icons/AntDesign'
import LikedButton from './LikedButton';


export default function Bestseller()  {
    const [myfood, setMyfood] = useState([])

    useEffect(() => {


        const db = getDatabase(app);
        const dbRef = ref(db, 'food');
        onValue(dbRef, (snapshot) => {
            let data = snapshot.val();

            setMyfood(data)
           // console.log("data is ",data[2])

        });
    }, [])


    return (


        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={myfood}
            renderItem={({ item }) => (

                <TouchableOpacity>
                    <View style={styles.item}>
                        
                        <Image style={styles.Images} source={{ uri: item.img }} />
                        <View style={styles.viewrow}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>Rs.{item.price}/-</Text>
                        </View>
                        <View style={styles.viewrow}> 

                        <LikedButton like={item.liked} id={item.key} />
                        <View style={{flexDirection:'row',marginTop:10}}>
                         <AntDesign name='staro' style={styles.icon} />
                         <Text style={styles.rating}>{item.rating}</Text>
                         </View>
                         </View>
                       </View>
                </TouchableOpacity>

            )}

        />

    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 5,
        flexDirection:'row',
        borderRadius:10,
    },
    viewrow :{ 
    flexDirection:'column',
    alignContent:"center",
    justifyContent:"center",
    padding:10
    },
    

    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rating: {
        fontSize: 13,
        marginLeft:2,
    },
    price: {
        fontSize: 14,
        marginTop:5,
    },
    Images: {
        width: 100,
        height: 70,
        borderRadius: 5,
    },
    icon:{
        
          color: 'black',
          fontSize: 13,
    }
    
});
