import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import LottieView from "lottie-react-native";
import { useTailwind } from "tailwind-rn/dist";
import React from "react";

const Background = () => {
  const style = useTailwind();

  return (
    <>
      <View style={styles.top}>
        <SafeAreaView style={styles.container}>
          <View style={styles.view}>
            <LottieView
              style={styles.lottie}
              source={require("../assets/animation.json")}
              autoPlay
              loop
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    flex: 1,
    backgroundColor: "#B8E7FF",
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view: {
    flex: 1,
  },
  text: {
    flex: 1,
    position: "absolute",
    left: "15.01%",
    right: "15.01%",
    top: "14.55%",
    bottom: "79.46%",
    fontFamily: "Itim",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: -0.00022,
    textTransform: "capitalize",
    color: "#000000",
  },
  lottie: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 410, // ajuste conforme necessário
  },
});

export default Background;
