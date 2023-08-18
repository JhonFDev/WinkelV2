import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SapRow({item}) {
  return (
    <View style={styles.viewcontainer}>
    <Image style={styles.img} source={item.image}/>

    <View style={styles.viewcontainernamedescription}>
    <View style={styles.viewnamedescription}>
        <Text style={styles.txtname}>{item.name}</Text>
        <Text style={styles.txtdescription}>{item.description}</Text>
    </View>
    </View>

    </View>
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
        borderWidth:1,
        marginBottom:50,
        gap:10
    },
    viewcontainernamedescription:{
        paddingLeft:10,
    },
    txtname:{
        fontSize:15,
        
    },
    txtdescription:{
        color:"gray",
        fontWeight:"700"
    },

})