import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.viewelcome}>
        <Text style={styles.textwelcome}>Bienvenidos a Winkel</Text>

        <View style={styles.viewimg}>
          <Image
            source={require("../assets/UuzajiconUzi.png")}
            style={styles.img}
          />
        </View>
        <Button
          onPress={() => navigation.navigate("homescreen")}
          buttonStyle={styles.button}
          title={"Empezemos"}
          titleStyle={styles.btntitle}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    justifyContent: "center",
  },
  viewelcome: {
    justifyContent: "space-around",
    flex: 1,
  },
  textwelcome: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  img: {
    width: 370,
    height: 200,
  },
  viewimg: {
    alignItems: "center",
    maxWidth: 400,
    maxHeight: 300,
  },
  button: {
    backgroundColor: "yellow",
    marginVertical: 10,
    marginHorizontal: 40,
    borderRadius: 20,
    paddingVertical: 7,
  },
  btntitle:{
    color:"black",
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold"
  }
});
