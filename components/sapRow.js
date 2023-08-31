import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base';


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

    <View style={styles.viewprice}>
        <Text style={styles.itemprice}>
        {item.price}
        </Text>

        <View>
            <TouchableOpacity>
                <Icon
                    name='minus-circle'
                    type='material-community'
                    
                />
            </TouchableOpacity>
        </View>
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
        shadowOpacity:1,
        shadowRadius:10,
        shadowColor:"#1c0d02",
        elevation:15,
        marginBottom:20,
        marginHorizontal:20,
        shadowOffset:{width:5 , height:10 }
    },
    img:{
        width:100,
        height:100,
        borderRadius:20,
        },
    viewnamedescription:{
        display:'flex',
        flex:1,
        marginBottom:50,
        gap:10
    },
    viewcontainernamedescription:{
        borderWidth:2,
        width:230,
    },
    txtname:{
        fontSize:25,
        textAlign:"center",        
    },
    viewprice:{
        borderWidth:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:15,
        alignItems:"center",
    },
    itemprice:{
        color:"#9b9b9b",
        fontSize:17,
        fontWeight:"bold",
    }

})