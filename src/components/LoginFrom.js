import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, CardItem, Button, Input } from "./common";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onLoginPressed = () => {
console.log(`Username is: ${this.state.email}`);
console.log(`password is: ${this.state.password}`);
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
        <CardItem>
          <Button onPress={this.onLoginPressed}>Login</Button>
        </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  container: {}
});

export default LoginForm;
