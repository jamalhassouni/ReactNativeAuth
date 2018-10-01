import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "./common";
import LoginForm from "./LoginFrom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Auth" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
