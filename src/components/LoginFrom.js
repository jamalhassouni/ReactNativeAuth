import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "../firebase";
import { Card, CardItem, Button, Input, Spinner } from "./common";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  }

  onLoginPressed = () => {
    const { email, password } = this.state;
    this.setState({ loading: true, error: "" });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onAuthSuccess)
          .catch(this.onAuthFailed);
      });
  };

  onAuthSuccess = () => {
    this.setState({
      email: "",
      password: "",
      error: "",
      loading: false
    });
  };
  onAuthFailed = () => {
    this.setState({
      error: "Authentication Failed",
      loading: false
    });
  };

  showButtonOrSpinner() {
    if (this.state.loading) return <Spinner />;

    return <Button onPress={this.onLoginPressed}>Login</Button>;
  }
  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label="Email"
            value={this.state.email}
            placeholder="Enter your email"
            secureTextEntry={false}
            onChangeText={email => this.setState({ email })}
          />
        </CardItem>
        <CardItem>
          <Input
            label="Password"
            value={this.state.password}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>
        <Text style={styles.errorMessage}>{this.state.error}</Text>
        <CardItem>{this.showButtonOrSpinner()}</CardItem>
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
