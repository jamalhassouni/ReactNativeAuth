import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, CardItem, Button, Input } from "./common";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label="Email"
            placeholder="Enter your email"
            secureTextEntry={false}
          />
        </CardItem>
        <CardItem>
          <Input
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </CardItem>
        <CardItem>
          <Button>Login</Button>
        </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  container: {}
});

export default LoginForm;
