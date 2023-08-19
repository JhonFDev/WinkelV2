import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";


export default function ListSAP() {
  const { params } = useRoute();
  const navigation = useNavigation();

  let item = params;
  // console.log("item: ", item);
  return (
    <>

    <ScrollView>

    <View>

    <View style={styles.viewcontainer}>

    <View style={styles.viewdescription}>
      <Text style={styles.txtdescription}>{item.description}</Text>
    </View>

    <View>
      <Text>{item.knowandcontact}</Text>
    </View>

    </View>
    </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  viewcontainer:{
    paddingTop:25,
    width:400,
    borderWidth:2,
    top:25,
    height:640,
    borderWidth:1
    
  },
  viewdescription:{
    marginTop: 6,
    bottom: 29,
    borderWidth:1
  },
  txtdescription:{
    fontWeight: "bold",
    fontSize: 20,
    left: 20,
    bottom: 10,
    top:5
},
})