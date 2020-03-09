import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import { WebcamDemo } from './webcam_demo';
import { RealtimeDemo } from './realtime_demo';
import { LandmarkDemo } from './landmark_demo';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false
    };
  }

  async componentDidMount() {
    // Wait for tf to be ready.
    await tf.ready();
    // Signal to the app that tensorflow.js can now be used.
    this.setState({
      isTfReady: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <LandmarkDemo returnToMain={() => {}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
