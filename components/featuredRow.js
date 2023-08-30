import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


//mis imports
import CategoriesCard from "./categoriesCard";


export default function FeaturedRow({ title, description, serviceandproducts }) {
  return (
    <View style={styles.viewcontainercontainer}>
      <View style={styles.viewcontainer}>
        <View>
          {/* <Text style={styles.texttitle}>{title}</Text> */}
          {/* <Text style={styles.textdescription}>{description}</Text> */}
        </View>
        
      </View>
      <ScrollView
      contentContainerStyle={styles.scrollviewcontentcontiner}
      style={styles.scrollview}
      >
      {
        serviceandproducts.map((itemsSAP,listCategories) => {
            return (
                <CategoriesCard
                    item={itemsSAP}
                    key={listCategories}
                />
            )
        })
      }

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    bottom:2,
    marginRight:10,
    marginLeft:10,
    marginVertical:10,
  },
  texttitle: {
    fontWeight: "bold",
    fontSize:20
  },
  textdescription:{
    fontSize:15,
    color:"gray",
  },
  scrollviewcontentcontiner:{
    paddingHorizontal:15,
  },
  scrollview:{
    overflow:"visible",
  },
  viewcontainercontainer:{
    top:20,
    height:300,
  }
});
