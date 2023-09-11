import { View, Text ,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import SignUpAnchor from './Anchor/SignUpAnchor'

const MessageRecriters = ({navigation}) => {
  return (
    <View >
      <TouchableOpacity onPress={navigation.navigate('SignUpAnchor')} style={styles.recruiterLink}>
      <Text>Subscribe to Premium offer to message Recruiters Directly</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    recruiterLink:{
        paddingVertical:20,
        paddingHorizontal:4,
        backgroundColor:'green',
        borderRadius:20,
        marginTop:20

    }
})

export default MessageRecriters