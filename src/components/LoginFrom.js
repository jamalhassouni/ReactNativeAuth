import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, CardItem, Button } from "./common";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardItem />
        <CardItem />
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
