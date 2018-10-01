import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "../firebase";
import { Card, CardItem, Button, Input } from "./common";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  onLoginPressed = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(this.onAuthFailed);
      });
  };

  onAuthFailed = () => {
    this.setState({
      error: "Authentication Failed"
    });
  };
  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label="Email"
            placeholder="Enter your email"
            secureTextEntry={false}
            onChangeText={email => this.setState({ email })}
          />
        </CardItem>
        <CardItem>
          <Input
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>
        <Text style={styles.errorMessage}>{this.state.error}</Text>
        <CardItem>
          <Button onPress={this.onLoginPressed}>Login</Button>
        </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    alignSelf: "center",
    color: "#ff0000",
    marginTop: 5
  }
});

export default LoginForm;
