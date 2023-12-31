import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useState } from "react";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from '../../../components/common/cards/popular/PopularJobCard'
import { useRouter } from "expo-router";
import { isLoading } from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import uuid from 'react-native-uuid'
import useFetch from '../../../hook/useFetch';

const uniqueId=uuid.v4()


const Popularjobs = () => {
  const router = useRouter();
  const {data,isLoading,error}=useFetch('search',{query:'React developer',num_pages:1})
  
  // console.log(data,'dedayors')



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerBtn}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
          data={data}
          renderItem={({item})=>(<PopularJobCard item={item}
          
          
            
          />)}
          
            
          
          // keyExtractor={uniqueId
          // }

          
          keyExtractor={item=>item?.numericCode
          
          }
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
          />
        )}
        
      </View>
    </View>
  );
};

export default Popularjobs;
 