import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "../firebase";
import { Header, Button, Spinner } from "./common";
import LoginForm from "./LoginFrom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isLoggedIn: true
        });
      } else {
        this.setState({
          isLoggedIn: false
        });
      }
    });
  }

  showContents() {
    switch (this.state.isLoggedIn) {
      case true:
        return (
          <View style={styles.logoutContainer}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;

      default:
        return <Spinner />;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title="Auth" />
        {this.showContents()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoutContainer: {
    height: 80,
    margin: 10
  }
});

export default App;
