import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon } from '@rneui/themed';
import SapCard from '../components/sapCard';


export default function ListSAP() {
  const { params } = useRoute();
  const navigation = useNavigation();

  let item = params;
  // console.log("item: ", item);
  return (
    <>
      <ArrowLeft />

    <ScrollView>

    <View>

    <View style={styles.viewcontainer}>

    <View style={styles.viewknowandcontact}>
      <Text style={styles.txtknowandcontact}>{item.knowandcontact}</Text>
    </View>

      {/* menu talentos de servicios y productos */}
      <View style={styles.viewscrollview}>
      <ScrollView
      contentContainerStyle={styles.scrollviewcontentcontiner}
      style={styles.scrollview}
      >
        {item.talents.map((talentos, listCategories) =>{
          return(
            <SapCard
              item={talentos}
              key={listCategories}
            />
          )
        })}

      </ScrollView>      
      </View>

    </View>
    </View>
    </ScrollView>
    </>
  )
}

function ArrowLeft() {
  const navigation = useNavigation();

  return (
    <View style={styles.arrowleft}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" type="feather" color={"#ffd700"} size={35} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer:{
    paddingTop:20,
    width:"100%",
    top:5,
    alignItems:"center"    
  },
  viewscrollview:{
    alignItems:"center",
    marginRight:10,
    marginLeft:10,
    marginVertical:10,
    width:"100%",
    alignSelf:"baseline"
  },
  viewknowandcontact:{
    width:290,
    marginTop: 10,
    borderRadius:20,
  },
  
  txtknowandcontact:{
    fontWeight: "bold",
      fontSize: 19,
      paddingVertical:10,
      textAlign:"center"
  },
arrowleft: {
  zIndex: 50,
},
touch: {
  position: "absolute",
  top: 40,
  left: 13,
  borderRadius: 30,
  backgroundColor: "#808080",
},
scrollviewcontentcontiner:{
  paddingHorizontal:15,
  gap:20
},
scrollview:{
  overflow:"visible",
}
})