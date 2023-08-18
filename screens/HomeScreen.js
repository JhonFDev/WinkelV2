import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Input } from "@rneui/themed";
import { featuredProducts, featuredServices } from "../components/constants/listCategories";
import FeaturedRow from "../components/featuredRow";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.viewcontainerbar}>
        <View style={styles.viewsearchbar}>
          <Input
            placeholder="como te podemos ayudar hoy?"
            inputStyle={styles.input}
            inputContainerStyle={styles.inputcontainr}
            leftIcon={
              <Icon
                type="material-community"
                name="magnify"
                size={25}
                color={"gray"}
              />
            }
          />
        </View>
      </View>

      {/* menu */}
      <ScrollView>
        <View style={styles.viewmenu}>
          {[featuredServices, featuredProducts].map((item, listCategories) => {
            return (
              <FeaturedRow
                key={listCategories}
                title={item.title}
                serviceandproducts={item.serviceandproduct}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaview: {
    backgroundColor: "white",
    flex: 1,
  },
  viewcontainerbar: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  viewsearchbar: {
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
  input: {
    paddingLeft: 10,
  },
  inputcontainr: {
    borderColor: "transparent",
  },
  viewmenu:{
    height:760 ,
    gap:20
  }
});
