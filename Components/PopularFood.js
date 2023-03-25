
import { StyleSheet, Text, View,FlatList, TouchableOpacity,Image} from 'react-native';
import { useState,useEffect } from 'react';
import { app } from "./Firebase";
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function PopularFood() {

  const [mypopular, setMypopular] = useState([])

  useEffect(() => {


      const db = getDatabase(app);
      const dbRef = ref(db, 'Popularfood');
      onValue(dbRef, (snapshot) => {
          let data = snapshot.val();
          setMypopular(data)
         // console.log("data is ",data[2])

      });
  }, [])
  return (
   
    
         <FlatList
           horizontal
           showsHorizontalScrollIndicator={false}
          data={mypopular}
          keyExtractor={item=>item.key}
          renderItem={({item})=>(

            <TouchableOpacity >
            
            <View style={styles.item}>
                        <View style={{flexDirection:"row"}}>
                        <AntDesign name='staro' style={styles.icon} />
                        <Text style={styles.rating}>{item.rating}</Text> 
                        <AntDesign name='hearto' style={{color:'black',fontSize:17,marginLeft:118}} />
                        </View>
                        <Image style={styles.Images} source={{uri: item.img}} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>Rs.{item.price}/-</Text>
                         
                         </View>

            </TouchableOpacity>
            
          )}
        
          />
   
    
  );
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 5,
    borderRadius:10,
},
  
  Images: {
    width: 180,
    height: 130,
    borderRadius: 5,
},
title: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  textAlignVertical: 'center',
},
rating: {
  fontSize: 15,
  marginLeft:2,
},
price: {
  fontSize: 14,
  marginTop:5,
  textAlign: 'center',
  textAlignVertical: 'center',
},
icon:{
        
  color: 'black',
  fontSize: 15,
}
});
