import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { app } from "./Firebase";
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import AntDesign from 'react-native-vector-icons/AntDesign'

const LikedButton = ({ like, id }) => {
    const [isLiked, setIsLiked] = useState(like);
    const db = getDatabase(app);
  
    const handleLike = () => {
      const dbRef = ref(db, `food/${id}`);
      setIsLiked(!isLiked);
      update(dbRef, { liked: !isLiked });
    };
  
    return (
      <TouchableOpacity onPress={handleLike}>
        <AntDesign name='heart' style={{ color: isLiked ? 'red' : 'grey', fontSize: 20, textAlign: 'right' }} />
      </TouchableOpacity>
    );
  };
  export default LikedButton;