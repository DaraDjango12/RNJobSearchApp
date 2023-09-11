import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useState } from "react";
import { icons, SIZES } from "../../../constants";
import { useRouter } from "expo-router";

import styles from "./welcome.style";

const jobtypes=["Fulltime","Part-time","Contractor"]

const Welcome = () => {
  const router=useRouter();
  const[activeJobType,setActiveJobType]=useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text styles={styles.userName}>Hello Django</Text>
        <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={()=>{}}
          placeholder="Whats job are you looking to find"
          
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image source={icons.search} resizeMode="contain"
          style={styles.searchBtnImage}
          />

        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList data={jobtypes}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activeJobType,item)}
          onPress={()=>{setActiveJobType(item);
            router.push(`/search/${item}`)
          
          }}>
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>
        )} 
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal/>

      </View>
    </View>
  );
};

export default Welcome;
