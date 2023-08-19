import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function SapRow({item}) {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('listsap', {...item})}>
    <View style={styles.viewcontainer}>
    <Image style={styles.img} source={item.image}/>

    <View style={styles.viewcontainernamedescription}>
    <View style={styles.viewnamedescription}>
        <Text style={styles.txtname}>{item.name}</Text>
        
    </View>
    </View>

    </View>
    </TouchableWithoutFeedback>

  )
}








const styles = StyleSheet.create({
    viewcontainer:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"white",
        alignItems:"center",
        padding:10,
        borderRadius:30,
        shadowOpacity:20,
        shadowRadius:10,
        shadowColor:"black",
        elevation:20,
        marginBottom:20,
        marginHorizontal:20
    },
    img:{
        width:100,
        height:100,
        borderRadius:20
    },
    viewnamedescription:{
        display:'flex',
        flex:1,
        marginBottom:50,
        gap:10
    },
    viewcontainernamedescription:{
        paddingLeft:10,
    },
    txtname:{
        fontSize:15,
        
    },
   

})