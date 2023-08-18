import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

export default function ServicesAndProducts() {
  const { params } = useRoute();
  const navigation = useNavigation();

  let item = params;
  console.log("item: ", item);

  return (
    <>
      <ArrowLeft />

      <ScrollView>
        <View style={styles.viewimg}>
          <Image style={styles.img} source={item.image} />
        </View>

        {/* presentation */}
        <View style={styles.viewcontainerpresentation}>
          <View style={styles.viewname}>
            <Text style={styles.textname}>{item.name}</Text>
            <View style={styles.viewicontr}>
              <Icon name="star" type="material-community" color={"#ffd700"} />
              <Text style={styles.textstars}>{item.stars}</Text>
              <Text style={styles.textreviews}>
                ({item.reviews} Reviews) .{" "}
                <Text style={styles.textcategory}>{item.category}</Text>
              </Text>
            </View>
            
          <Text style={styles.textdescription}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
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
  viewimg: {
    position: "relative",
  },
  img: {
    width: "100%",
    height: 300,
    objectFit: "contain",
  },
  arrowleft: {
    zIndex: 50,
  },
  touch: {
    position: "absolute",
    top: 30,
    left: 13,
    borderRadius: 30,
    backgroundColor: "#808080",
  },
  viewcontainerpresentation: {
    position: "absolute",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 25,
    top: 209,
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 10,
  },
  textname: {
    fontWeight: "bold",
    fontSize: 30,
    left: 20,
    bottom: 10,
    top: 5,
  },
  viewname: {
    marginTop: 6,
    bottom: 29,
  },
  viewicontr: {
    flexDirection: "row",
    marginTop: 5,
    gap: 2,
    alignItems: "center",
    left:20
  },
  textstars: {
    color: "#228b22",
  },
  textreviews: {
    fontWeight: "normal",
  },
  textcategory: {
    fontWeight: "600",
  },
  textdescription:{
    fontSize:15,
    color:"gray",
  },
});
