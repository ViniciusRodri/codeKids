import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dashboard = () => {
  const [userAge, setUserAge] = useState("");

  useEffect(() => {
    const fetchUserAge = async () => {
      try {
        const age = await AsyncStorage.getItem("age");
        if (age) {
          setUserAge(age);
        }
      } catch (error) {
        console.log("Erro ao recuperar a idade do usuário:", error);
      }
    };

    fetchUserAge();
  }, []);

  const handleNextScreen = async () => {
    await WebBrowser.openBrowserAsync("https://blockly.games/");
  };

  const handleCourseScreen = async () => {
    await WebBrowser.openBrowserAsync("https://studio.code.org/s/express-2021");
  };

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.container}
    >
      <Text style={styles.text}>estamos aqui para te ensinar programação</Text>
      <View style={styles.content}>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            handleNextScreen();
          }}
        >
          <ImageBackground
            source={require("../assets/block.png")}
            style={styles.pressable}
          />
        </Pressable>

        <Text style={styles.text2}>Blocky Gamers - Aprenda a programar</Text>
      </View>
      <View style={styles.container2}>
        {userAge && Number(userAge) > 13 && (
          <Pressable
            style={styles.pressable2}
            onPress={() => {
              handleCourseScreen();
            }}
          >
            <Text style={styles.button}>Aulas</Text>
          </Pressable>
        )}
      </View>

      <LottieView
        style={styles.lottie2}
        source={require("../assets/dino.json")}
        autoPlay
        loop
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  lottie2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 380, // ajuste conforme necessário
  },
  pressable2: {
    height: 43,
    width: 95,

    backgroundColor: "#1C54E4",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
  },
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
  container2: {
    bottom: 380,
  },
  text: {
    fontFamily: "Itim",
    flex: 1,
    width: 275,
    height: 51,
    top: 124,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: -0.00022,
    textTransform: "capitalize",
    color: "#000000",
    alignSelf: "center",
  },
  text2: {
    fontFamily: "Itim",
    alignItems: "center",
    justifyContent: "center",
    bottom: 420,
    width: "70%",
    fontWeight: "light",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: -0.00022,
    textTransform: "capitalize",
    color: "#000000",
  },
  pressable: {
    height: 110,
    width: 210,
    marginBottom: 300,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
  },
  button: {
    color: "white",
    fontSize: 12,
    alignSelf: "center",
  },
});

export default Dashboard;
