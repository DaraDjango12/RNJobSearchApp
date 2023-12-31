import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";
import useFetch from "../../../../hook/useFetch";


const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  
  {console.log(item,'this is the one sent by')}

  const ImageAddress=''

  
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri:(item.employer_logo)}  }

          // source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'http://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg'}  }
          
          // resizeMode="contain"
          style={styles.logoImage}
        />
      
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.location}>{item.name}</Text>
      </View>
    </TouchableOpacity>
    
  );
};

export default PopularJobCard;
