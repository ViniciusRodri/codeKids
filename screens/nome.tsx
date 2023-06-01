import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";
import Background from "./background";
import { useTailwind } from "tailwind-rn/dist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Nome = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const saveUserInfo = async () => {
    try {
      await AsyncStorage.setItem("name", name);

      Alert.alert("Informações salvas com sucesso!");
      navigation.navigate("Idade");
    } catch (error) {
      console.log("Erro ao salvar as informações do usuário:", error);
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  return (
    <View style={styles.top}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Digite seu nome:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={handleNameChange}
        />
        <Pressable style={styles.pressable} onPress={saveUserInfo}>
          <Text style={styles.button}>Salvar</Text>
        </Pressable>
        <Background></Background>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: "Itim",
    width: 275,
    height: 51,
    top: 124,
    fontSize: 20,
    textAlign: "center",
    letterSpacing: -0.00022,
    textTransform: "capitalize",
    color: "#000000",
    alignSelf: "center",
  },
  input: {
    height: 31,
    marginTop: 120,
    width: 275,
    alignSelf: "center",
    marginBottom: 21,
    padding: 10,
    backgroundColor: "#7CC1F4",
    borderRadius: 10,
  },
  pressable: {
    height: 43,
    width: 95,
    marginBottom: 300,
    backgroundColor: "#1C54E4",
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

export default Nome;
