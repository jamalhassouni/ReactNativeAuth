import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 60,
    backgroundColor: "#34495e",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15
  },
  textStyle: {
    color: "#ecf0f1",
    fontSize: 17,
    fontWeight: "bold"
  }
});

export { Header };
